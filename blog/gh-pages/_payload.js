export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:{"content-query-P7tMefFVLD":{_path:"\u002Fblog\u002Fgh-pages",_dir:"blog",_draft:j,_partial:j,_locale:f,_empty:j,title:"Cómo publicar un sitio web estático generado por Nuxt.js en GitHub Pages",description:k,date:"2023-03-13",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:k}]},{type:a,tag:g,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:"Lo primero que debes hacer es instalar la herramienta gh-pages. Puedes hacerlo ejecutando el siguiente comando en la terminal de tu proyecto:"}]},{type:a,tag:d,props:{code:n,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:n}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esto instalará la herramienta gh-pages en tu proyecto y la añadirá a la sección devDependencies de tu archivo package.json."}]},{type:a,tag:g,props:{id:o},children:[{type:b,value:p}]},{type:a,tag:c,props:{},children:[{type:b,value:"A continuación, debes generar el sitio web estático con Nuxt.js. Para hacerlo, debes ejecutar el siguiente comando en la terminal de tu proyecto:"}]},{type:a,tag:d,props:{code:q,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:q}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Este comando generará el sitio web estático en la carpeta dist de tu proyecto."}]},{type:a,tag:g,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:c,props:{},children:[{type:b,value:"Antes de poder publicar el sitio web estático en GitHub Pages, debes configurar la herramienta gh-pages. Para hacerlo, debes añadir las siguientes líneas a la sección scripts de tu archivo package.json:"}]},{type:a,tag:d,props:{code:t,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:t}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esto configurará la herramienta gh-pages para que publique el sitio web estático desde la carpeta dist. La línea predeploy ejecutará el comando nuxt generate antes de ejecutar el comando gh-pages, de forma que el sitio web estático siempre esté actualizado antes de publicarlo."}]},{type:a,tag:g,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:c,props:{},children:[{type:b,value:"Por último, puedes publicar el sitio web estático en GitHub Pages ejecutando el siguiente comando en la terminal de tu proyecto:"}]},{type:a,tag:d,props:{code:w,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:d,props:{__ignoreMap:f},children:[{type:b,value:w}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Este comando publicará el sitio web estático en la rama gh-pages de tu repositorio de GitHub."}]},{type:a,tag:g,props:{id:x},children:[{type:b,value:y}]},{type:a,tag:c,props:{},children:[{type:b,value:"Con la herramienta gh-pages, publicar un sitio web estático generado por Nuxt.js en GitHub Pages es muy sencillo. Siguiendo estos sencillos pasos, podrás publicar tu sitio web en GitHub Pages en pocos minutos."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Espero que esta entrada de blog te haya resultado útil. Si tienes alguna pregunta o comentario, no dudes en dejármelo en los comentarios. ¡Gracias por leer!"}]}],toc:{title:f,searchDepth:e,depth:e,links:[{id:l,depth:e,text:m},{id:o,depth:e,text:p},{id:r,depth:e,text:s},{id:u,depth:e,text:v},{id:x,depth:e,text:y}]}},_type:"markdown",_id:"content:blog:gh-pages.md",_source:"content",_file:"blog\u002Fgh-pages.md",_extension:"md"}},prerenderedAt:1680741766340}}("element","text","p","code",2,"","h2",null,"pre",false,"Si has creado un sitio web estático utilizando Nuxt.js y quieres publicarlo en GitHub Pages, puedes utilizar la herramienta gh-pages para hacerlo de forma sencilla. En esta entrada de blog, te explicaré cómo hacerlo.","paso-1-instalar-la-herramienta-gh-pages","Paso 1: Instalar la herramienta gh-pages","npm install gh-pages --save-dev\n","paso-2-generar-el-sitio-web-estático-con-nuxtjs","Paso 2: Generar el sitio web estático con Nuxt.js","nuxt generate\n","paso-3-configurar-la-herramienta-gh-pages","Paso 3: Configurar la herramienta gh-pages","\"deploy\": \"gh-pages -d dist\",\n\"predeploy\": \"npm run generate\"\n","paso-4-publicar-el-sitio-web-estático-en-github-pages","Paso 4: Publicar el sitio web estático en GitHub Pages","npm run deploy\n","conclusión","Conclusión"))