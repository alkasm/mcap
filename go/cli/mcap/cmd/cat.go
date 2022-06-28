package cmd

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"math"
	"os"
	"strconv"
	"strings"

	"github.com/foxglove/mcap/go/cli/mcap/utils"
	"github.com/foxglove/mcap/go/cli/mcap/utils/ros"
	"github.com/foxglove/mcap/go/mcap"
	"github.com/spf13/cobra"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protodesc"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/types/descriptorpb"
	"google.golang.org/protobuf/types/dynamicpb"
)

var (
	catTopics     string
	catStart      int64
	catEnd        int64
	catFormatJSON bool
)

type DecimalTime uint64

func digits(n uint64) int {
	if n == 0 {
		return 1
	}
	count := 0
	for n != 0 {
		n = n / 10
		count++
	}
	return count
}

func (t DecimalTime) MarshalJSON() ([]byte, error) {
	seconds := uint64(t) / 1e9
	nanoseconds := uint64(t) % 1e9
	requiredLength := digits(seconds) + 1 + 9
	buf := make([]byte, 0, requiredLength)
	buf = strconv.AppendInt(buf, int64(seconds), 10)
	buf = append(buf, '.')
	for i := 0; i < 9-digits(nanoseconds); i++ {
		buf = append(buf, '0')
	}
	buf = strconv.AppendInt(buf, int64(nanoseconds), 10)
	return buf, nil
}

type Message struct {
	Topic       string          `json:"topic"`
	Sequence    uint32          `json:"sequence"`
	LogTime     DecimalTime     `json:"log_time"`
	PublishTime DecimalTime     `json:"publish_time"`
	Data        json.RawMessage `json:"data"`
}

func printMessages(r io.Reader, w io.Writer, formatJSON bool) error {
	msg := &bytes.Buffer{}
	msgReader := &bytes.Reader{}
	transcoders := make(map[uint16]*ros.JSONTranscoder)
	descriptors := make(map[uint16]protoreflect.MessageDescriptor)
	encoder := json.NewEncoder(w)
	target := Message{}

	handleMessage := func(schema *mcap.Schema, channel *mcap.Channel, message *mcap.Message) error {
		if !formatJSON {
			if len(message.Data) > 10 {
				fmt.Fprintf(w, "%d %s [%s] %v...\n", message.LogTime, channel.Topic, schema.Name, message.Data[:10])
			} else {
				fmt.Fprintf(w, "%d %s [%s] %v\n", message.LogTime, channel.Topic, schema.Name, message.Data)
			}
			return nil
		}
		switch schema.Encoding {
		case "ros1msg":
			transcoder, ok := transcoders[channel.SchemaID]
			if !ok {
				packageName := strings.Split(schema.Name, "/")[0]
				var err error
				transcoder, err = ros.NewJSONTranscoder(packageName, schema.Data)
				if err != nil {
					return fmt.Errorf("failed to build transcoder for %s: %w", channel.Topic, err)
				}
				transcoders[channel.SchemaID] = transcoder
			}
			msgReader.Reset(message.Data)
			err := transcoder.Transcode(msg, msgReader)
			if err != nil {
				return fmt.Errorf("failed to transcode %s record on %s: %w", schema.Name, channel.Topic, err)
			}
		case "protobuf":
			messageDescriptor, ok := descriptors[channel.SchemaID]
			if !ok {
				fileDescriptorSet := &descriptorpb.FileDescriptorSet{}
				if err := proto.Unmarshal(schema.Data, fileDescriptorSet); err != nil {
					return fmt.Errorf("failed to build file descriptor set: %w", err)
				}
				files, err := protodesc.FileOptions{}.NewFiles(fileDescriptorSet)
				if err != nil {
					return fmt.Errorf("failed to create file descriptor: %w", err)
				}
				descriptor, err := files.FindDescriptorByName(protoreflect.FullName(schema.Name))
				if err != nil {
					return fmt.Errorf("failed to find descriptor: %w", err)
				}
				messageDescriptor = descriptor.(protoreflect.MessageDescriptor)
				descriptors[channel.SchemaID] = messageDescriptor
			}
			protoMsg := dynamicpb.NewMessage(messageDescriptor.(protoreflect.MessageDescriptor))
			if err := proto.Unmarshal(message.Data, protoMsg); err != nil {
				return fmt.Errorf("failed to parse message: %w", err)
			}
			bytes, err := protojson.Marshal(protoMsg)
			if err != nil {
				return fmt.Errorf("failed to marshal message: %w", err)
			}
			if _, err = msg.Write(bytes); err != nil {
				return fmt.Errorf("failed to write message bytes: %w", err)
			}
		default:
			return fmt.Errorf("JSON output only supported for ros1msg and protobuf schemas")
		}
		target.Topic = channel.Topic
		target.Sequence = message.Sequence
		target.LogTime = DecimalTime(message.LogTime)
		target.PublishTime = DecimalTime(message.PublishTime)
		target.Data = msg.Bytes()
		if err := encoder.Encode(target); err != nil {
			return fmt.Errorf("failed to write encoded message: %s", err)
		}
		msg.Reset()
		return nil
	}

	topics := strings.FieldsFunc(catTopics, func(c rune) bool { return c == ',' })
	cbReader, err := mcap.NewCallbackReader(mcap.ReadOptions{
		OnMessage: handleMessage,
		ChannelFilter: func(schema *mcap.Schema, channel *mcap.Channel) bool {
			if len(topics) == 0 {
				return true
			}
			for _, topic := range topics {
				if topic == channel.Topic {
					return true
				}
			}
			return false
		},
		StartTime: uint64(catStart * 1e9),
		EndTime:   uint64(catEnd * 1e9),
	})
	cbReader.Read(r)
	if err != nil {
		return err
	}
	return nil
}

func isReadingStdin() (bool, error) {
	stat, err := os.Stdin.Stat()
	if err != nil {
		return false, err
	}
	return stat.Mode()&os.ModeCharDevice == 0, nil
}

var catCmd = &cobra.Command{
	Use:   "cat [file]",
	Short: "Cat the messages in an mcap file to stdout",
	Run: func(cmd *cobra.Command, args []string) {
		// stdin is a special case, since we can't seek
		readingStdin, err := isReadingStdin()
		if err != nil {
			log.Fatalf("Failed to determine status of stdin: %s", err)
		}
		if readingStdin {
			err := printMessages(os.Stdin, os.Stdout, catFormatJSON)
			if err != nil {
				log.Fatalf("error printing messages: %s", err)
			}
			return
		}

		if len(args) == 0 {
			log.Fatalf("supply a file")
		}
		err = utils.WithReader(context.Background(), args[0], func(remote bool, rs io.ReadSeeker) error {
			return printMessages(rs, os.Stdout, catFormatJSON)
		})
		if err != nil {
			log.Fatalf("Failed to print messages: %s", err)
		}
	},
}

func init() {
	rootCmd.AddCommand(catCmd)

	catCmd.PersistentFlags().Int64VarP(&catStart, "start-secs", "", 0, "start time")
	catCmd.PersistentFlags().Int64VarP(&catEnd, "end-secs", "", math.MaxInt64, "end time")
	catCmd.PersistentFlags().StringVarP(&catTopics, "topics", "", "", "comma-separated list of topics")
	catCmd.PersistentFlags().BoolVarP(&catFormatJSON, "json", "", false, "print messages as JSON")
}
