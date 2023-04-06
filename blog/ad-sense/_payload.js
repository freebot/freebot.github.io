export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:{"content-query-ZmSF76yEZG":{_path:"\u002Fblog\u002Fad-sense",_dir:"blog",_draft:g,_partial:g,_locale:e,_empty:g,title:"Agregar Google Analytics a una aplicación de Nuxt3",description:h,date:"2023-03-24",author:"Jorge",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:h}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para agregar Google Analytics a tu aplicación de Nuxt3, sigue estos sencillos pasos:"}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Instala el paquete vue-gtag-next ejecutando el siguiente comando:"}]}]},{type:a,tag:f,props:{code:i,language:"css",meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:i}]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Crea un nuevo archivo en la carpeta plugins llamado vue-gtag.client.js."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Agrega el siguiente código al archivo de plugin:"}]}]},{type:a,tag:f,props:{code:l,language:"javascript",meta:j},children:[{type:a,tag:k,props:{},children:[{type:a,tag:f,props:{__ignoreMap:e},children:[{type:b,value:l}]}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Reemplaza 'GA_MEASUREMENT_ID' con tu ID de medición de Google Analytics real."}]}]},{type:a,tag:d,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Cuando ejecutes tu sitio web en el cliente, verás que Google Analytics se ha importado a tu sitio web."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Nuxt leerá automáticamente los archivos en tu directorio de plugins y los cargará. Puedes definir qué plugins se usarán en el servidor o en el cliente agregando un sufijo de .server o .client al nombre del archivo. Estos se registran automáticamente en tu aplicación de Nuxt, por lo que ya no es necesario definirlos en el archivo nuxt.config."}]},{type:a,tag:c,props:{},children:[{type:b,value:"El uso de plugins en Nuxt3 facilita la integración con servicios externos, como Google Analytics, y mejora el rendimiento y la escalabilidad general de tu aplicación."}]}],toc:{title:e,searchDepth:m,depth:m,links:[]}},_type:"markdown",_id:"content:blog:ad-sense.md",_source:"content",_file:"blog\u002Fad-sense.md",_extension:"md"}},prerenderedAt:1680741766228}}("element","text","p","blockquote","","code",false,"Nuxt3 ha introducido muchas mejoras, una de las cuales es el uso de plugins en la aplicación. Esto permite una fácil integración de herramientas y servicios de terceros, como Google Analytics.","\nnpm install --save-dev vue-gtag-next\n",null,"pre","\nimport VueGtag from 'vue-gtag-next'\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n  nuxtApp.vueApp.use(VueGtag, {\n    property: {\n      id: 'GA_MEASUREMENT_ID'\n    }\n  })\n})\n",2))