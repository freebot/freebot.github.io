__NUXT_JSONP__("/posts/libsystemd-journal0-(>=-201)-but-it-is-not-installable", (function(a,b,c,d,e,f,g){return {data:[{post:{title:"libsystemd-journal0 (\u003E= 201) but it is not installable",description:"Unable to install docker",date:"2020-09-16T00:00:00.000Z",image:"\u002Fbanner-1157109_1280.jpg",alt:null,tags:["ubuntu","docker"],toc:[],body:{type:"root",children:[{type:a,tag:c,props:{},children:[]},{type:b,value:"\nOtro problema surgió al tratar de instalar docker:\n"},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"\nlibsystemd-journal0 (\u003E= 201) but it is not installable\n"}]}]},{type:b,value:f},{type:a,tag:c,props:{},children:[]},{type:b,value:"\nLa solución fue actualizar el sources.list\n"},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"\nsudo nano \u002Fetc\u002Fapt\u002Fsources.list \n"}]}]},{type:b,value:f},{type:a,tag:c,props:{},children:[]},{type:b,value:"\nMuchas guías en internet pide agregar el https:\u002F\u002Fapt.dockerproject.org\u002Frepo pero ya fue descontinuado desde marzo de 2020, así que se debe instalar:\n"},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"\neb [arch=amd64] https:\u002F\u002Fdownload.docker.com\u002Flinux\u002Fubuntu trusty stable\n"}]}]},{type:b,value:f},{type:a,tag:c,props:{},children:[]},{type:b,value:"\nAún así marcaba algunas dependencias que se solucionaron agregando el siguiente repositorio:\n"},{type:a,tag:d,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:"\ndeb http:\u002F\u002Fcz.archive.ubuntu.com\u002Fubuntu trusty main\n"}]}]},{type:b,value:"\nY después hay que darle "},{type:a,tag:"i",props:{},children:[{type:b,value:"sudo apt-get update"}]}]},dir:"\u002Fposts\u002Flibsystemd-journal0-(\u003E=-201)-but-it-is-not-installable",path:"\u002Fposts\u002Flibsystemd-journal0-(\u003E=-201)-but-it-is-not-installable\u002Findex",extension:".md",slug:"index",createdAt:g,updatedAt:g}}],fetch:[],mutations:void 0}}("element","text","br","pre","code","\n","2020-09-17T00:05:23.396Z")));