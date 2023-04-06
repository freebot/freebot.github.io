export default (function(a,b,c,d,e,f,g){return {data:{"content-query-bkEhIJFyih":{_path:"\u002Fblog\u002Fubuntu-latest",_dir:"blog",_draft:d,_partial:d,_locale:e,_empty:d,title:"Waiting for a runner to pick up this job",description:f,date:"2023-04-05",author:"Jorge",body:{type:"root",children:[{type:a,tag:b,props:{},children:[{type:c,value:f}]},{type:a,tag:b,props:{},children:[{type:c,value:"Después de buscar en StackOverflow, descubrí que una posible razón podría ser que Github ya no soporta el sistema operativo que estaba solicitando. En mi caso, estaba usando \"ubuntu 18.04\" y tuve que cambiarlo a \"ubuntu-latest\" para que funcionara correctamente."}]},{type:a,tag:b,props:{},children:[{type:c,value:"Es probable que Github no soporte más esa versión de Ubuntu. Resulta que Github dejó de soportar Ubuntu 16.04 en septiembre de 2021, y sólo admite sistemas operativos específicos. Si estás teniendo problemas con las acciones de Github, verifica la lista de sistemas operativos soportados en la documentación oficial."}]},{type:a,tag:b,props:{},children:[{type:c,value:"Espero que esta información te sea útil si te encuentras con un problema similar. La solución puede ser tan simple como cambiar la versión del sistema operativo en tu archivo de configuración."}]}],toc:{title:e,searchDepth:g,depth:g,links:[]}},_type:"markdown",_id:"content:blog:ubuntu-latest.md",_source:"content",_file:"blog\u002Fubuntu-latest.md",_extension:"md"}},prerenderedAt:1680741948879}}("element","p","text",false,"","Hoy tuve un problema con el CD\u002FCI de Github. Al usar las acciones de Github con mi configuración, el proceso tardaba mucho tiempo en ejecutarse y se mostraba el mensaje \"Waiting for a runner to pick up this job\". Me pregunté qué significaba 'runner' y cómo podía resolver el problema.",2))