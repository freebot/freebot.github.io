export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A){return {data:{"content-query-Jy7Ld6swn0":{_path:"\u002Fblog\u002Frobots",_dir:"blog",_draft:j,_partial:j,_locale:e,_empty:j,title:"Cómo implementar un archivo robots.txt en un proyecto Nuxt Js",description:k,date:"2023-03-12",body:{type:"root",children:[{type:a,tag:d,props:{},children:[{type:b,value:k}]},{type:a,tag:d,props:{},children:[{type:b,value:"Hay varias formas de agregar robots.txt y es tan fácil como escribirlo manualmente en la carpeta \"statics\". Pero para este tutorial, usaremos nuxtjs\u002Frobots ya que es más flexible y el contenido de robots.txt se puede manipular fácilmente."}]},{type:a,tag:i,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:d,props:{},children:[{type:b,value:"Lo primero es lo primero, instala el paquete de robots y defínelo en la matriz de módulos de nuxt.config.js."}]},{type:a,tag:c,props:{code:n,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:n}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Para definir la configuración de robots, podemos pasar un objeto, una matriz o una función, donde cada método tiene sus propios casos de uso."}]},{type:a,tag:c,props:{code:o,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:o}]}]}]},{type:a,tag:i,props:{id:p},children:[{type:b,value:q}]},{type:a,tag:d,props:{},children:[{type:b,value:"En este caso, define el código de la siguiente manera y permitirá que todos los agentes de usuario (bot) rastreen el sitio. En cambio, si el valor de Disallow es \"\u002F\", entonces no permitimos que se rastree ninguna de las páginas."}]},{type:a,tag:c,props:{code:r,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:r}]}]}]},{type:a,tag:i,props:{id:s},children:[{type:b,value:t}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si desea especificar una configuración para un agente de usuario diferente, pase la matriz de objetos como valor de robots y se comportará como se define."}]},{type:a,tag:c,props:{code:u,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:u}]}]}]},{type:a,tag:i,props:{id:v},children:[{type:b,value:w}]},{type:a,tag:d,props:{},children:[{type:b,value:"También puede pasar una función como valor de robots y, en este caso, definir la lógica o definir condicionalmente el valor del robot que desea que sea."}]},{type:a,tag:c,props:{code:x,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:x}]}]}]},{type:a,tag:i,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:d,props:{},children:[{type:b,value:"Finalmente, ejecuta \"yarn dev\" y ahora puedes visitar \u002Frobots.txt para ver el valor de robots.txt que has definido."}]},{type:a,tag:c,props:{code:A,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:A}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Este post fue originalmente publicado en PostSrc 🔥🔥🔥. Si te gustan este tipo de tutoriales, realmente apreciaría si le das una visita."}]}],toc:{title:e,searchDepth:f,depth:f,links:[{id:l,depth:f,text:m},{id:p,depth:f,text:q},{id:s,depth:f,text:t},{id:v,depth:f,text:w},{id:y,depth:f,text:z}]}},_type:"markdown",_id:"content:blog:robots.md",_source:"content",_file:"blog\u002Frobots.md",_extension:"md"}},prerenderedAt:1679694074548}}("element","text","code","p","",2,null,"pre","h2",false,"Tener un archivo robots.txt es muy importante ya que ayuda a controlar que Google y otros motores de búsqueda como Bing indexen el contenido del sitio web. Esto se debe a que lo primero que revisa un rastreador cuando visita un sitio web es si existe robots.txt, por lo que determina cuándo se debe rastrear el contenido o no.","instalar-el-paquete-nuxtjsrobots","Instalar el paquete nuxtjs\u002Frobots","yarn add @nuxtjs\u002Frobots\n","export default {\n  modules: [\n    '@nuxtjs\u002Frobots'\n  ],\n  robots: {\n    \u002F* opciones del módulo *\u002F\n  }\n}\n","configuración-simple","Configuración simple","export default {\n  robots: {\n    UserAgent: '*',\n    Disallow: ''\n  }\n}\n","configuración-de-múltiples-agentes-de-usuario","Configuración de múltiples agentes de usuario","export default {\n  robots: [\n    {\n      UserAgent: 'Googlebot',\n      Disallow: '\u002Fusuario',\n    },\n    {\n      UserAgent: '*',\n      Disallow: '\u002Fadmin',\n    },\n  ]\n}\n","configuración-de-función","Configuración de función","export default {\n  robots: () =\u003E {\n    if (algunaLogicaAquí) {\n      return {\n        UserAgent: '*',\n        Disallow: '\u002F'\n      }\n    }\n  }\n}\n","ejecutar-yarn-dev-npm-run-dev","Ejecutar \"yarn dev\" \u002F \"npm run dev\"","User-agent: Googlebot\nDisallow: \u002Fusuarios\nUser-agent: Bingbot\nDisallow: \u002Fadmin\n"))