export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:{"content-query-JxKRUZXibw":{_path:"\u002Fblog\u002Fsalvaje",_dir:"blog",_draft:h,_partial:h,_locale:d,_empty:h,title:"Cómo conectar Google Spreadsheets a ChatGPT",description:i,author:"Jorge",date:"2023-02-20T00:00:00.000Z",body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:i}]},{type:a,tag:c,props:{code:j,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:j}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"En la columna B el prompt:"}]},{type:a,tag:c,props:{code:k,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:k}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"En la columna B, ChatGPT proporcionó una lista de los 10 mejores libros sobre emprendimiento. Luego en el D2 hicimos una fórmula para conjuntar el prompt de A2 con el de B2 que contiene el título del libro proporcionado por ChatGPT:"}]},{type:a,tag:c,props:{code:l,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:l}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"En H2 le pedimos una tabla:"}]},{type:a,tag:c,props:{code:m,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:m}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Sólo no recuerdo cómo hicimos la lista de la fila F :\u002F"}]}],toc:{title:d,searchDepth:n,depth:n,links:[]}},_type:"markdown",_id:"content:blog:salvaje.md",_source:"content",_file:"blog\u002Fsalvaje.md",_extension:"md"}},prerenderedAt:1682000538269}}("element","text","code","","p",null,"pre",false,"Hace poco vi un video de Salvaje en YouTube que mostraba cómo conectar ChatGPT a Google Spreadsheets. Después de instalar la extensión correspondiente, en la primer columna colocamos el siguiente prompt:","Escriba un texto pequeño en español sobre lo que trata este libro y su precio en Amazon\n","=GPT_LIST(\"Crea una lista de los mejores ibros de emprendimiento, solo bestsellers, no repitas ninguno, solo el título sin el autor\")\n","=GPT(A2;B2)\n","=GPT_TABLE(\"Crea una tabla con el nombre de libro, autor de libro, categoria del libro, precio del libro\";F2:F11)\n",2))