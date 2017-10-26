Search.setIndex({docnames:["index","mixpanel_api"],envversion:50,filenames:["index.rst","mixpanel_api.rst"],objects:{"":{mixpanel_api:[1,0,0,"-"]},"mixpanel_api.Mixpanel":{BETA_IMPORT_API:[1,2,1,""],FORMATTED_API:[1,2,1,""],IMPORT_API:[1,2,1,""],LOGGER:[1,2,1,""],RAW_API:[1,2,1,""],VERSION:[1,2,1,""],__init__:[1,3,1,""],_datasets_request:[1,3,1,""],_dispatch_batches:[1,3,1,""],_dt_from_iso:[1,4,1,""],_event_object_from_csv_row:[1,4,1,""],_get_engage_page:[1,3,1,""],_gzip_file:[1,4,1,""],_import_data:[1,3,1,""],_list_from_argument:[1,4,1,""],_list_from_items_filename:[1,4,1,""],_people_object_from_csv_row:[1,4,1,""],_prep_event_for_import:[1,4,1,""],_prep_params_for_profile:[1,4,1,""],_properties_from_csv_row:[1,4,1,""],_response_handler_callback:[1,4,1,""],_send_batch:[1,3,1,""],_unicode_urlencode:[1,4,1,""],_write_items_to_csv:[1,4,1,""],create_dataset_version:[1,3,1,""],deduplicate_people:[1,3,1,""],delete_dataset_version:[1,3,1,""],event_counts_to_people:[1,3,1,""],export_data:[1,4,1,""],export_events:[1,3,1,""],export_people:[1,3,1,""],formatter:[1,2,1,""],import_events:[1,3,1,""],import_people:[1,3,1,""],jql_operation:[1,3,1,""],list_all_dataset_versions:[1,3,1,""],list_dataset_version:[1,3,1,""],log_level:[1,2,1,""],mark_dataset_version_readable:[1,3,1,""],people_add:[1,3,1,""],people_append:[1,3,1,""],people_change_property_name:[1,3,1,""],people_delete:[1,3,1,""],people_operation:[1,3,1,""],people_remove:[1,3,1,""],people_revenue_property_from_transactions:[1,3,1,""],people_set:[1,3,1,""],people_set_once:[1,3,1,""],people_union:[1,3,1,""],people_unset:[1,3,1,""],query_engage:[1,3,1,""],query_export:[1,3,1,""],query_jql:[1,3,1,""],request:[1,3,1,""],sh:[1,2,1,""],sum_transactions:[1,4,1,""],update_dataset_version:[1,3,1,""],wait_until_dataset_version_ready:[1,3,1,""]},mixpanel_api:{Mixpanel:[1,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:staticmethod"},terms:{"boolean":1,"case":1,"class":1,"default":1,"export":1,"float":1,"function":1,"import":1,"int":1,"new":1,"null":[],"return":1,"static":1,"true":1,"while":1,The:1,Used:1,Uses:[],__init__:1,_base_dataset_request:[],_datasets_request:1,_dispatch_batch:1,_dt_from_iso:1,_event_object_from_csv_row:1,_export_data:[],_get_engage_pag:1,_gzip_fil:1,_import_data:1,_list_from_argu:1,_list_from_items_filenam:1,_people_object_from_csv_row:1,_prep:1,_prep_event_for_import:1,_prep_params_for_profil:1,_properties_from_csv_row:1,_response_handler_callback:1,_send_batch:1,_unicode_urlencod:1,_write_items_to_csv:1,accept:1,access:1,add:1,add_gzip_head:1,added:1,addit:1,adjust:1,alia:1,all:1,alreadi:1,altern:1,alwai:1,amount:1,analyt:1,ani:1,api:1,api_secret:1,append:1,appli:1,appropri:1,arbitrari:1,arg:1,argument:1,arrai:1,as_of_timestamp:1,asynchron:1,attribut:1,avail:1,back:1,backup:1,backup_fil:1,base:1,base_url:1,batch:1,been:1,begin:1,behavior:1,beta:1,beta_api:[],beta_import_api:1,bool:1,both:1,bypass:1,calcul:1,call:1,can:1,cannot:1,case_sensit:1,check:1,check_if_dataset_version_readi:[],column:1,com:1,compress:1,construct:1,contain:1,content:0,convert:1,copi:1,count:1,cpu_count:1,creat:1,create_dataset_vers:1,create_or_update_dataset:[],csv:1,current:1,data:1,dataset:1,dataset_id:1,dataset_nam:[],dataset_object:[],dataset_vers:1,date:1,datetim:1,debug:1,deduplicate_peopl:1,defin:1,delet:1,delete_dataset:[],delete_dataset_vers:1,depend:1,determin:1,dict:1,dictionari:1,disk:1,distinct_id:1,distinct_id_index:1,downgrad:1,download:1,dt_from_iso:[],dump:1,duplic:1,dynam:1,either:1,email:1,enabl:1,encod:1,endpoint:1,engag:1,ensur:1,epoch:1,equal:1,error:1,event:1,event_counts_to_peopl:1,event_index:1,event_object_from_csv_row:[],everi:1,exclud:1,exist:1,expect:1,export_data:1,export_ev:1,export_peopl:1,fals:1,fetch:1,field:1,file:1,filenam:1,flag:1,format:1,formatt:1,formatted_api:1,found:1,from:1,from_dat:1,get:1,give:1,given:1,global:1,goe:1,gzip:1,gzip_fil:[],has:1,header:1,help:1,hour:1,http:1,ignore_alia:1,ignored_column:1,import_api:1,import_ev:1,import_peopl:1,import_record:[],includ:1,increment:1,index:[0,1],indic:1,initi:1,insensit:1,instanc:1,integ:[],intern:1,invalid:1,isn:1,item:1,item_list:1,its:1,jql:1,jql_oper:1,jql_param:1,jql_script:1,json:1,just:1,kei:1,kept:1,lambda:1,last_seen:1,latest:1,least:1,level:1,like:1,list:1,list_all_dataset:[],list_all_dataset_vers:1,list_dataset:[],list_dataset_vers:1,list_from_argu:[],list_from_items_filenam:[],log:1,log_level:1,logger:1,lookup:1,made:1,make:1,mark:1,mark_dataset_version_read:1,match:1,max:1,max_retri:1,maximum:1,meet:1,merge_prop:1,method:1,min:1,mixpanel:1,mixpnael:[],modifi:1,modul:0,multipl:1,multiprocess:1,must:1,name:1,need:1,new_nam:1,none:1,note:1,number:1,numer:1,object:1,offset:1,old:1,old_nam:1,onc:1,onli:1,oper:1,option:1,other:1,otherwis:1,output:1,output_fil:1,packag:0,page:0,param:1,paramet:1,pars:1,patch:1,path:1,path_compon:1,peopl:1,people_add:1,people_append:1,people_change_property_nam:1,people_delet:1,people_object_from_csv_row:[],people_oper:1,people_remov:1,people_revenue_property_from_transact:1,people_set:1,people_set_onc:1,people_union:1,people_unset:1,per:1,perform:1,poll:1,pool_siz:1,post:1,prep_arg:1,preserv:1,prior:1,profil:1,project:1,project_id:[],prop:1,prop_to_match:1,properti:1,properties_from_csv_row:[],provid:1,put:1,queri:1,query_engag:1,query_export:1,query_jql:1,query_param:1,rais:1,raw:1,raw_api:1,raw_record_import:1,read:1,read_pool_s:1,readabl:1,readi:1,receiv:1,record:[],refer:1,remain:1,remov:1,replac:1,report:[],repres:1,request:1,requir:1,respons:1,response_handler_callback:[],result:1,retri:1,revenu:1,row:1,rtype:[],run:1,runtim:1,runtimeerror:1,same:1,script:1,search:0,second:1,secret:1,see:[],self:1,send:1,sensit:1,separ:1,set:1,set_as_current_dataset:[],set_onc:1,should:1,singl:1,singleton:1,sourc:1,spec:1,specif:1,specifi:1,state:1,statu:1,str:1,streamhandl:1,string:1,subsequ:1,success:1,sum:1,sum_transact:1,tabl:1,take:1,target:1,than:1,thei:1,thi:1,those:1,thread:1,time:1,time_convert:1,time_index:1,timeout:1,timestamp:1,timezon:1,timezone_offset:1,token:1,transact:1,type:1,unicode_urlencod:[],union:1,unix:1,unset:1,until:1,updat:1,update_dataset_vers:1,update_valu:1,upgrad:1,url:1,use:1,used:1,user:1,using:1,utc:1,v2beta:[],valu:1,variabl:1,variou:1,verb:1,version:1,version_id:1,versions_request:1,via:1,wait:1,wait_until_dataset_version_readi:1,when:1,whether:1,whose:1,writabl:1,write:1,write_items_to_csv:[],yet:1,your:1,yyyi:1},titles:["Welcome to mixpanel_api&#8217;s documentation!","mixpanel_api package"],titleterms:{content:1,document:0,indic:0,mixpanel_api:[0,1],modul:1,packag:1,tabl:0,welcom:0}})