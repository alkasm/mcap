Search.setIndex({docnames:["apidoc/index","apidoc/mcap","apidoc/mcap.mcap0","apidoc/mcap.mcap0.chunk_builder","apidoc/mcap.mcap0.data_stream","apidoc/mcap.mcap0.exceptions","apidoc/mcap.mcap0.opcode","apidoc/mcap.mcap0.reader","apidoc/mcap.mcap0.records","apidoc/mcap.mcap0.serialization","apidoc/mcap.mcap0.stream_reader","apidoc/mcap.mcap0.summary","apidoc/mcap.mcap0.well_known","apidoc/mcap.mcap0.writer","index","jsonschema_tutorial"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["apidoc/index.rst","apidoc/mcap.rst","apidoc/mcap.mcap0.rst","apidoc/mcap.mcap0.chunk_builder.rst","apidoc/mcap.mcap0.data_stream.rst","apidoc/mcap.mcap0.exceptions.rst","apidoc/mcap.mcap0.opcode.rst","apidoc/mcap.mcap0.reader.rst","apidoc/mcap.mcap0.records.rst","apidoc/mcap.mcap0.serialization.rst","apidoc/mcap.mcap0.stream_reader.rst","apidoc/mcap.mcap0.summary.rst","apidoc/mcap.mcap0.well_known.rst","apidoc/mcap.mcap0.writer.rst","index.rst","jsonschema_tutorial.rst"],objects:{"":[[1,0,0,"-","mcap"]],"mcap.mcap0":[[3,0,0,"-","chunk_builder"],[4,0,0,"-","data_stream"],[5,0,0,"-","exceptions"],[6,0,0,"-","opcode"],[7,0,0,"-","reader"],[8,0,0,"-","records"],[9,0,0,"-","serialization"],[10,0,0,"-","stream_reader"],[11,0,0,"-","summary"],[12,0,0,"-","well_known"],[13,0,0,"-","writer"]],"mcap.mcap0.chunk_builder":[[3,1,1,"","ChunkBuilder"]],"mcap.mcap0.chunk_builder.ChunkBuilder":[[3,2,1,"","add_channel"],[3,2,1,"","add_message"],[3,2,1,"","add_schema"],[3,3,1,"","count"],[3,2,1,"","end"],[3,2,1,"","reset"]],"mcap.mcap0.data_stream":[[4,1,1,"","ReadDataStream"],[4,1,1,"","RecordBuilder"]],"mcap.mcap0.data_stream.ReadDataStream":[[4,3,1,"","count"],[4,2,1,"","read"],[4,2,1,"","read1"],[4,2,1,"","read2"],[4,2,1,"","read4"],[4,2,1,"","read8"],[4,2,1,"","read_prefixed_string"]],"mcap.mcap0.data_stream.RecordBuilder":[[4,3,1,"","count"],[4,2,1,"","end"],[4,2,1,"","finish_record"],[4,2,1,"","start_record"],[4,2,1,"","write"],[4,2,1,"","write1"],[4,2,1,"","write2"],[4,2,1,"","write4"],[4,2,1,"","write8"],[4,2,1,"","write_prefixed_string"]],"mcap.mcap0.exceptions":[[5,4,1,"","EndOfFile"],[5,4,1,"","InvalidMagic"],[5,4,1,"","McapError"]],"mcap.mcap0.opcode":[[6,1,1,"","Opcode"]],"mcap.mcap0.opcode.Opcode":[[6,5,1,"","ATTACHMENT"],[6,5,1,"","ATTACHMENT_INDEX"],[6,5,1,"","CHANNEL"],[6,5,1,"","CHUNK"],[6,5,1,"","CHUNK_INDEX"],[6,5,1,"","DATA_END"],[6,5,1,"","FOOTER"],[6,5,1,"","HEADER"],[6,5,1,"","MESSAGE"],[6,5,1,"","MESSAGE_INDEX"],[6,5,1,"","METADATA"],[6,5,1,"","METADATA_INDEX"],[6,5,1,"","SCHEMA"],[6,5,1,"","STATISTICS"],[6,5,1,"","SUMMARY_OFFSET"]],"mcap.mcap0.reader":[[7,1,1,"","McapReader"],[7,1,1,"","NonSeekingReader"],[7,1,1,"","SeekingReader"],[7,6,1,"","make_reader"]],"mcap.mcap0.reader.McapReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.reader.NonSeekingReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.reader.SeekingReader":[[7,2,1,"","get_summary"],[7,2,1,"","iter_attachments"],[7,2,1,"","iter_messages"],[7,2,1,"","iter_metadata"]],"mcap.mcap0.records":[[8,1,1,"","Attachment"],[8,1,1,"","AttachmentIndex"],[8,1,1,"","Channel"],[8,1,1,"","Chunk"],[8,1,1,"","ChunkIndex"],[8,1,1,"","DataEnd"],[8,1,1,"","Footer"],[8,1,1,"","Header"],[8,1,1,"","McapRecord"],[8,1,1,"","Message"],[8,1,1,"","MessageIndex"],[8,1,1,"","Metadata"],[8,1,1,"","MetadataIndex"],[8,1,1,"","Schema"],[8,1,1,"","Statistics"],[8,1,1,"","SummaryOffset"]],"mcap.mcap0.records.Attachment":[[8,5,1,"","content_type"],[8,5,1,"","create_time"],[8,5,1,"","data"],[8,5,1,"","log_time"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.AttachmentIndex":[[8,5,1,"","content_type"],[8,5,1,"","create_time"],[8,5,1,"","data_size"],[8,5,1,"","length"],[8,5,1,"","log_time"],[8,5,1,"","name"],[8,5,1,"","offset"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Channel":[[8,5,1,"","id"],[8,5,1,"","message_encoding"],[8,5,1,"","metadata"],[8,2,1,"","read"],[8,5,1,"","schema_id"],[8,5,1,"","topic"],[8,2,1,"","write"]],"mcap.mcap0.records.Chunk":[[8,5,1,"","compression"],[8,5,1,"","data"],[8,5,1,"","message_end_time"],[8,5,1,"","message_start_time"],[8,2,1,"","read"],[8,5,1,"","uncompressed_crc"],[8,5,1,"","uncompressed_size"],[8,2,1,"","write"]],"mcap.mcap0.records.ChunkIndex":[[8,5,1,"","chunk_length"],[8,5,1,"","chunk_start_offset"],[8,5,1,"","compressed_size"],[8,5,1,"","compression"],[8,5,1,"","message_end_time"],[8,5,1,"","message_index_length"],[8,5,1,"","message_index_offsets"],[8,5,1,"","message_start_time"],[8,2,1,"","read"],[8,5,1,"","uncompressed_size"],[8,2,1,"","write"]],"mcap.mcap0.records.DataEnd":[[8,5,1,"","data_section_crc"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Footer":[[8,2,1,"","read"],[8,5,1,"","summary_crc"],[8,5,1,"","summary_offset_start"],[8,5,1,"","summary_start"],[8,2,1,"","write"]],"mcap.mcap0.records.Header":[[8,5,1,"","library"],[8,5,1,"","profile"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.McapRecord":[[8,2,1,"","write"]],"mcap.mcap0.records.Message":[[8,5,1,"","channel_id"],[8,5,1,"","data"],[8,5,1,"","log_time"],[8,5,1,"","publish_time"],[8,2,1,"","read"],[8,5,1,"","sequence"],[8,2,1,"","write"]],"mcap.mcap0.records.MessageIndex":[[8,5,1,"","channel_id"],[8,2,1,"","read"],[8,5,1,"","records"],[8,2,1,"","write"]],"mcap.mcap0.records.Metadata":[[8,5,1,"","metadata"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.MetadataIndex":[[8,5,1,"","length"],[8,5,1,"","name"],[8,5,1,"","offset"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Schema":[[8,5,1,"","data"],[8,5,1,"","encoding"],[8,5,1,"","id"],[8,5,1,"","name"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.records.Statistics":[[8,5,1,"","attachment_count"],[8,5,1,"","channel_count"],[8,5,1,"","channel_message_counts"],[8,5,1,"","chunk_count"],[8,5,1,"","message_count"],[8,5,1,"","message_end_time"],[8,5,1,"","message_start_time"],[8,5,1,"","metadata_count"],[8,2,1,"","read"],[8,5,1,"","schema_count"],[8,2,1,"","write"]],"mcap.mcap0.records.SummaryOffset":[[8,5,1,"","group_length"],[8,5,1,"","group_opcode"],[8,5,1,"","group_start"],[8,2,1,"","read"],[8,2,1,"","write"]],"mcap.mcap0.serialization":[[9,6,1,"","normalize_value"],[9,6,1,"","stringify_record"]],"mcap.mcap0.stream_reader":[[10,1,1,"","StreamReader"]],"mcap.mcap0.stream_reader.StreamReader":[[10,3,1,"","records"]],"mcap.mcap0.summary":[[11,1,1,"","Summary"]],"mcap.mcap0.well_known":[[12,1,1,"","MessageEncoding"],[12,1,1,"","Profile"],[12,1,1,"","SchemaEncoding"]],"mcap.mcap0.well_known.MessageEncoding":[[12,5,1,"","CBOR"],[12,5,1,"","CDR"],[12,5,1,"","Flatbuffer"],[12,5,1,"","JSON"],[12,5,1,"","Protobuf"],[12,5,1,"","ROS1"]],"mcap.mcap0.well_known.Profile":[[12,5,1,"","ROS1"],[12,5,1,"","ROS2"]],"mcap.mcap0.well_known.SchemaEncoding":[[12,5,1,"","Flatbuffer"],[12,5,1,"","JSONSchema"],[12,5,1,"","Protobuf"],[12,5,1,"","ROS1"],[12,5,1,"","ROS2"],[12,5,1,"","SelfDescribing"]],"mcap.mcap0.writer":[[13,1,1,"","CompressionType"],[13,1,1,"","IndexType"],[13,1,1,"","Writer"]],"mcap.mcap0.writer.CompressionType":[[13,5,1,"","LZ4"],[13,5,1,"","NONE"],[13,5,1,"","ZSTD"]],"mcap.mcap0.writer.IndexType":[[13,5,1,"","ALL"],[13,5,1,"","ATTACHMENT"],[13,5,1,"","CHUNK"],[13,5,1,"","MESSAGE"],[13,5,1,"","METADATA"],[13,5,1,"","NONE"]],"mcap.mcap0.writer.Writer":[[13,2,1,"","add_attachment"],[13,2,1,"","add_message"],[13,2,1,"","add_metadata"],[13,2,1,"","finish"],[13,2,1,"","register_channel"],[13,2,1,"","register_schema"],[13,2,1,"","start"]],mcap:[[2,0,0,"-","mcap0"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:exception","5":"py:attribute","6":"py:function"},terms:{"0":[13,15],"00":15,"04t01":15,"1":[6,13,15],"10":[6,15],"1000":15,"1048576":13,"11":[6,15],"12":[6,15],"13":6,"1320330730":15,"1320330731":15,"14":6,"15":6,"16":13,"1e9":15,"2":[6,13],"2011":15,"3":[6,13],"30":13,"32":15,"3d":15,"4":[6,13,15],"43":15,"5":6,"6":6,"7":[6,15],"781030912":15,"8":[6,13,14,15],"881030912":15,"9":6,"900m":15,"93":15,"abstract":7,"byte":[4,7,8,9,10,13,15],"class":[3,4,6,7,8,10,11,12,13,14],"enum":[6,12,13],"final":[13,15],"float":15,"import":[14,15],"int":[4,7,8,9,13,15],"new":13,"public":15,"return":[7,10,13],"static":8,"true":13,A:[13,15],And:15,For:15,If:[13,15],In:15,That:15,The:[13,14,15],These:15,To:15,_:15,__file__:15,_io:[10,13],abc:7,about:13,accord:13,ad:13,add:[13,15],add_attach:13,add_channel:3,add_messag:[3,13,14,15],add_metadata:13,add_schema:3,address:15,after:7,all:[13,15],allow:12,an:[6,7,10,13,15],ani:[9,13,15],appendix:12,ar:[7,12,15],arg:15,argument:14,assert:15,assign:13,associ:13,attach:[6,7,8,13,15],attachment_count:8,attachment_index:6,attachmentindex:8,australian:15,avail:[12,13,15],b64encod:15,base64:15,base:[3,4,5,6,7,8,10,11,12,13],base_timestamp:15,befor:7,belong:15,blob:12,bool:[10,13],brew:15,buffer:15,bufferedread:10,bufferedwrit:13,build:15,built:15,bytearrai:15,bytesio:10,can:15,cbor:12,cdr:12,center:15,centr:15,channel:[3,6,7,8,13,14,15],channel_count:8,channel_id:[8,13,14,15],channel_message_count:8,check:15,choos:15,chunk:[6,8,13,15],chunk_build:[1,2],chunk_count:8,chunk_index:6,chunk_length:8,chunk_siz:13,chunk_start_offset:8,chunkbuild:3,chunkindex:8,cli:15,close:[13,14],cloud:15,code:15,collect:15,com:12,compress:[8,13,15],compressed_s:8,compressiontyp:13,conform:13,contain:[7,15],content:[0,7,15],content_typ:[8,13],convert:14,coordin:15,count:[3,4],counter:13,creat:[13,14],create_tim:[8,13],csv:14,csv_path:15,current:13,custom:[12,13,14,15],data:[4,7,8,10,13,14],data_end:6,data_s:8,data_section_crc:8,data_stream:[1,2,8],dataend:8,dataset:15,datetim:15,debug:13,decod:[13,14],def:15,defin:15,demonstr:15,describ:15,determin:15,diagnost:14,dict:[8,9,13],displai:15,doc:12,doctor:15,doe:13,don:12,drag:15,dt:15,dump:[14,15],durat:15,e:13,each:15,emit_chunk:10,empti:13,enabl:[13,15],encod:[8,12,13,14,15],encount:10,end:[3,4,15],end_tim:7,endian:15,endoffil:5,enumer:[6,13],etc:13,examin:15,excel:15,except:[1,2],exist:15,expect:15,extend:15,extra:15,f:[14,15],facilit:15,fals:10,few:15,ffff:15,field:[13,15],file:[13,14],finish:[13,14,15],finish_record:4,first:15,flag:13,flatbuff:12,float32:15,focu:15,footer:[6,8,15],form:13,format:[13,14,15],found:15,four:15,foxglov:[12,14],frame:15,frame_id:15,frame_timestamp:15,free:13,from:[7,10,14,15],g:13,gener:15,get_summari:7,github:[12,15],group_length:8,group_opcod:8,group_start:8,h:15,have:15,header:[6,8,15],help:14,high:7,how:15,http:12,hz:15,i:15,id:[8,13],ident:15,identifi:[13,14,15],includ:[7,15],index:[13,14],index_typ:13,indextyp:13,indic:13,info:15,inform:[13,15],input:[10,15],instal:15,instanc:15,integ:[7,13],intens:15,intenum:6,introduct:14,invalidmag:5,invok:15,io:[4,7,10,13],iter:[7,10],iter_attach:7,iter_messag:[7,14],iter_metadata:7,its:[13,15],jpg:13,json:[12,14],jsonschema:[12,14,15],kei:13,know:15,known:[12,13,15],later:15,layout:15,leav:15,length:[4,8,13],let:15,level:7,librari:[8,13,15],lidar:15,list:[8,12],littl:15,ll:15,log:[7,13],log_tim:[8,13,14,15],lz4:13,m:15,main:12,make_read:[7,14],mcap0:[0,1,14,15],mcaperror:5,mcapread:7,mcaprecord:[8,9,10],md:12,messag:[3,6,7,8,12,13,14,15],message_count:8,message_encod:[8,13,14,15],message_end_tim:8,message_index:6,message_index_length:8,message_index_offset:8,message_start_tim:8,messageencod:[12,15],messageindex:8,metadata:[6,7,8,13,15],metadata_count:8,metadata_index:6,metadataindex:8,microsecond:15,mime:13,modul:[0,14],msg:15,must:[13,15],my:[14,15],name:[8,13,14,15],nanosecond:7,need:[12,15],next:15,none:[7,8,13,15],nonseekingread:7,normalize_valu:9,note:[12,13],now:15,nsec:15,numer:13,object:[3,4,7,8,10,11,12,13,14,15],offset:[8,15],one:[13,15],onli:[7,15],opcod:[1,2,4],open:[14,15],option:[7,13],order:10,orient:15,other:13,our:15,out:7,output:[13,15],own:15,pack:15,packag:[0,14],page:14,panel:15,param:7,paramet:[7,13],parent:15,pars:15,path:15,per:15,place:15,plain:13,point:15,point_read:15,point_strid:15,point_timestamp:15,pointcloud:14,pose:15,posit:15,precis:15,prefix:[12,13],pretti:15,print:14,profil:[8,12,13,14,15],properti:[3,4,10,14],protobuf:12,provid:[7,14,15],publicli:15,publish:13,publish_tim:[8,13,14,15],python:15,quickli:15,r:15,rang:15,rawiobas:10,rb:[14,15],re:15,read1:4,read2:4,read4:4,read8:4,read:[4,7,8,10,14,15],read_prefixed_str:4,readdatastream:[4,8],reader:[1,2,15],record:[1,2,3,7,9,10,12,13],recordbuild:[4,8],refer:15,regist:13,register_channel:[13,14,15],register_schema:[13,14,15],rel:15,releas:15,repeat_channel:13,repeat_schema:13,repo:15,requir:[13,15],reset:3,result:15,robot:15,ros1:12,ros1msg:12,ros2:12,ros2msg:12,run:15,s:15,sampl:14,sample_top:14,scene1:13,schema:[3,6,7,8,12,13,14],schema_count:8,schema_id:[8,13,14,15],schemaencod:[12,15],search:14,sec:15,second:15,section:7,see:15,seekabl:7,seekingread:7,selfdescrib:12,sequenc:[8,13],sequenti:10,serial:[1,2,15],set:[12,13],should:13,simpl:15,sinc:15,singl:15,skip_mag:10,so:15,some:15,sourc:[3,4,5,6,7,8,9,10,11,12,13,14],specif:12,specifi:13,start:[13,14,15],start_record:4,start_tim:7,statist:[6,8],str:[4,7,8,9,10,13,15],stream:[4,7,8,10,13,14],stream_read:[1,2],streamread:10,street:15,string:[13,14,15],stringify_record:9,strptime:15,struct:15,studio:15,submodul:[0,1],subpackag:0,success:15,summari:[1,2,7,13,15],summary_crc:8,summary_offset:6,summary_offset_start:8,summary_start:8,summaryoffset:8,sydnei:15,t:12,take:15,test:14,text:13,thank:15,thi:[7,13,14,15],through:7,throughout:13,time:[13,14,15],time_n:14,timedelta:15,timestamp:[7,15],timestr:15,tool:[14,15],topic:[7,8,13,14,15],tupl:[7,8],tutori:14,type:[13,14,15],uncompressed_crc:8,uncompressed_s:8,underli:13,understand:15,union:[9,10,13,15],univers:15,urban:15,us:[12,13,15],use_chunk:13,use_statist:13,use_summary_offset:13,user_data:13,utf:[14,15],v1:14,valid:15,valu:[4,6,9,13],varieti:15,version:13,view:15,w:15,wa:13,wai:15,want:15,wb:[14,15],we:15,well:[12,13,15],well_known:[1,2,15],what:14,whatev:15,when:15,where:15,which:[13,15],whole:15,window:15,without:15,would:15,write1:4,write2:4,write4:4,write8:4,write:[4,8,13,14],write_prefixed_str:4,writer:[1,2,15],wrote:[14,15],x:[12,13,14,15],y:15,yield:15,you:[12,15],your:15,z:15,zero:[13,15],zstd:[13,15]},titles:["mcap","mcap package","mcap.mcap0 package","mcap.mcap0.chunk_builder module","mcap.mcap0.data_stream module","mcap.mcap0.exceptions module","mcap.mcap0.opcode module","mcap.mcap0.reader module","mcap.mcap0.records module","mcap.mcap0.serialization module","mcap.mcap0.stream_reader module","mcap.mcap0.summary module","mcap.mcap0.well_known module","mcap.mcap0.writer module","MCAP Python Library","Tutorial: Converting CSV to MCAP with JSON Schema"],titleterms:{chunk_build:3,content:[1,2,14],convert:15,creat:15,csv:15,data:15,data_stream:4,decod:15,exampl:14,except:5,file:15,foxglov:15,indic:14,introduct:15,json:15,librari:14,mcap0:[2,3,4,5,6,7,8,9,10,11,12,13],mcap:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],modul:[1,2,3,4,5,6,7,8,9,10,11,12,13],opcod:6,packag:[1,2],pointcloud:15,python:14,reader:[7,14],record:8,schema:15,serial:9,sourc:15,stream_read:10,submodul:2,subpackag:1,summari:11,tabl:14,tutori:15,well_known:12,write:15,writer:[13,14]}})