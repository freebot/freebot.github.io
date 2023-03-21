export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:{"content-query-DdF8NB80cx":{_path:"\u002Fblog\u002Fserver-rendering",_dir:"blog",_draft:f,_partial:f,_locale:e,_empty:f,title:"Cómo implementar el Renderizado del Lado del Servidor en una aplicación Nuxt.js",description:j,date:"2023-03-12T00:00:00.000Z",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:j}]},{type:a,tag:c,props:{},children:[{type:b,value:"En este tutorial, aprenderemos cómo implementar el renderizado del lado del servidor en una aplicación Nuxt.js. Nuxt.js es un framework popular para construir aplicaciones Vue.js, y proporciona soporte integrado para el renderizado del lado del servidor.\nRequisitos previos"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Antes de empezar, asegúrate de tener lo siguiente:"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:k,props:{},children:[{type:b,value:"Node.js (versión 12 o superior)"}]},{type:a,tag:k,props:{},children:[{type:b,value:"Nuxt.js (versión 2.14 o superior)"}]}]},{type:a,tag:"h2",props:{id:l},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para crear una nueva aplicación Nuxt.js, ejecuta el siguiente comando:"}]},{type:a,tag:d,props:{code:n,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:n}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Este comando generará una nueva aplicación Nuxt.js con la configuración predeterminada. Sigue las indicaciones para personalizar la configuración en función de tus requisitos.\nHabilitación del renderizado del lado del servidor"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Por defecto, Nuxt.js utiliza el renderizado del lado del cliente (CSR) para renderizar las páginas. Para habilitar el renderizado del lado del servidor, debemos modificar el archivo nuxt.config.js."}]},{type:a,tag:d,props:{code:o,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:o}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En el archivo nuxt.config.js, establece el mode en 'universal' y establece la propiedad ssr en true bajo la configuración de render. Esto habilitará el renderizado del lado del servidor para la aplicación.\nPrueba del renderizado del lado del servidor"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para probar el renderizado del lado del servidor, ejecuta el siguiente comando para iniciar el servidor de desarrollo:"}]},{type:a,tag:d,props:{code:p,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:p}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Abre tu navegador y navega hasta "},{type:a,tag:"a",props:{href:q,rel:["nofollow"]},children:[{type:b,value:q}]},{type:b,value:". Deberías ver la aplicación Nuxt.js ejecutándose en el navegador."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para verificar que el renderizado del lado del servidor está funcionando, abre las herramientas de desarrollador en tu navegador y desactiva JavaScript. Actualiza la página y deberías seguir viendo el contenido renderizado en la página. Esto confirma que el contenido se está renderizando en el servidor y se envía al cliente.\nConclusión"}]},{type:a,tag:c,props:{},children:[{type:b,value:"En este tutorial, aprendimos cómo implementar el renderizado del lado del servidor en una aplicación Nuxt.js. Al habilitar el renderizado del lado del servidor, podemos mejorar el rendimiento y SEO de nuestra aplicación web. Con Nuxt.js, es fácil habilitar el renderizado del lado del servidor y probarlo en el entorno de desarrollo."}]}],toc:{title:e,searchDepth:i,depth:i,links:[{id:l,depth:i,text:m}]}},_type:"markdown",_id:"content:blog:server-rendering.md",_source:"content",_file:"blog\u002Fserver-rendering.md",_extension:"md"}},prerenderedAt:1679409664092}}("element","text","p","code","",false,null,"pre",2,"El renderizado del lado del servidor (SSR) es una técnica utilizada para mejorar el rendimiento y la optimización de motores de búsqueda (SEO) de aplicaciones web. En una aplicación de lado del cliente tradicional, el navegador solicita los archivos HTML, CSS y JavaScript del servidor y luego renderiza la página en el lado del cliente. Con el renderizado del lado del servidor, el servidor genera la marca HTML y la envía al cliente, lo que mejora el tiempo de carga inicial y hace que el contenido sea más accesible a los motores de búsqueda.","li","creación-de-una-aplicación-nuxtjs","Creación de una aplicación Nuxt.js","\nnpx create-nuxt-app mi-aplicacion\n","\nexport default {\n  mode: 'universal',\n  \u002F*\n  ** Configuración del renderizado del lado del servidor\n  *\u002F\n  render: {\n    ssr: true\n  },\n  \u002F\u002F otras opciones de configuración\n}\n","npm run dev\n","http:\u002F\u002Flocalhost:3000"))