export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:{"content-query-mG4zYPB7CK":{_path:"\u002Fblog\u002Ffonts-awesome",_dir:"blog",_draft:j,_partial:j,_locale:e,_empty:j,title:"Usando iconos FontAwesome con Nuxt 3",description:l,date:"2023-03-25",author:"Jorge",body:{type:"root",children:[{type:a,tag:d,props:{},children:[{type:b,value:l}]},{type:a,tag:d,props:{},children:[{type:b,value:"Esta es la misma configuración que uso en mi propio sitio web, y puedes ver el código fuente completo en el repositorio de GitHub aquí."}]},{type:a,tag:i,props:{id:m},children:[{type:b,value:n}]},{type:a,tag:d,props:{},children:[{type:b,value:"Ejecuta el siguiente comando para agregar el componente vue-fontawesome."}]},{type:a,tag:c,props:{code:o,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:o}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"También necesitarás instalar el paquete de iconos que deseas utilizar. Para mi proyecto, agregué los paquetes svg-core y free-brands-svg-icons."}]},{type:a,tag:c,props:{code:p,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:p}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Después de la instalación, las dependencias en el archivo package.json se verán así:"}]},{type:a,tag:c,props:{code:q,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:q}]}]}]},{type:a,tag:i,props:{id:r},children:[{type:b,value:s}]},{type:a,tag:d,props:{},children:[{type:b,value:"Para usar los iconos de FontAwesome en Nuxt 3, deberás agregar lo siguiente al arreglo css en tu archivo nuxt.config."}]},{type:a,tag:c,props:{code:t,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:t}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Luego, crea un directorio de plugins en la raíz de tu aplicación Nuxt 3 y crea un archivo fontawesome.js dentro."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Este archivo es donde registraremos los iconos en nuestra librería y agregaremos el componente "},{type:a,tag:k,props:{},children:[{type:b,value:" para que se importe automáticamente en todas nuestras páginas y componentes de Nuxt."}]}]},{type:a,tag:i,props:{id:u},children:[{type:b,value:v}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si solo estás usando algunos iconos, puedes subconjuntar qué iconos se agregan a la librería para mejorar el rendimiento. En este ejemplo, solo estoy usando los iconos TwitteSquare, Twitch y GitHubSquare, por lo que no hay necesidad de instalar toda la librería."}]},{type:a,tag:d,props:{},children:[{type:b,value:"En mi archivo fontawesome.js a continuación, solo estoy importando los iconos que necesito de @fortawesome\u002Ffree-brands-svg-icons, luego pasando esos valores a través de library.add()."}]},{type:a,tag:c,props:{code:w,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:w}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Luego, agrego el componente FontAwesomeIcon y lo registro como "},{type:a,tag:k,props:{},children:[{type:b,value:" para que pueda usarlo en mi proyecto.\nImportar sin subconjuntos"}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si deseas importar toda la librería de iconos, importarías y pasarías el nombre completo de la librería, así:"}]},{type:a,tag:c,props:{code:x,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:x}]}]}]},{type:a,tag:i,props:{id:y},children:[{type:b,value:z}]},{type:a,tag:d,props:{},children:[{type:b,value:"Ahora puedes usar el componente "},{type:a,tag:k,props:{},children:[{type:b,value:" en cualquiera de tus páginas o componentes de Nuxt y pasar la librería de iconos y el nombre al atributo icon."}]}]},{type:a,tag:c,props:{code:A,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:A}]}]}]},{type:a,tag:d,props:{},children:[{type:b,value:"Si deseas usar valores dinámicos, pasa la librería y el nombre del icono como un array al atributo "},{type:a,tag:"icon",props:{},children:[]},{type:b,value:". Por ejemplo, aquí estamos mostrando los iconos vinculados en función de los valores de una matriz socialLinks."}]},{type:a,tag:c,props:{code:B,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:c,props:{__ignoreMap:e},children:[{type:b,value:B}]}]}]},{type:a,tag:i,props:{id:C},children:[{type:b,value:D}]},{type:a,tag:d,props:{},children:[{type:b,value:"Eso debería ser suficiente para que empieces, pero aquí hay enlaces a más documentación sobre FontAwesome con Nuxt y Subsetting."}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:E,props:{},children:[{type:a,tag:F,props:{href:"https:\u002F\u002Ffontawesome.com\u002Fdocs\u002Fweb\u002Fuse-with\u002Fvue\u002Fuse-with#nuxt",rel:[G]},children:[{type:b,value:"FontAwesome con Nuxt Docs"}]}]},{type:a,tag:E,props:{},children:[{type:a,tag:F,props:{href:"https:\u002F\u002Ffontawesome.com\u002Fdocs\u002Fapis\u002Fjavascript\u002Ficon-library#subsetting",rel:[G]},children:[{type:b,value:"FontAwesome Subsetting Docs"}]}]}]}],toc:{title:e,searchDepth:h,depth:h,links:[{id:m,depth:h,text:n},{id:r,depth:h,text:s},{id:u,depth:h,text:v},{id:y,depth:h,text:z},{id:C,depth:h,text:D}]}},_type:"markdown",_id:"content:blog:fonts-awesome.md",_source:"content",_file:"blog\u002Ffonts-awesome.md",_extension:"md"}},prerenderedAt:1680310554304}}("element","text","code","p","",null,"pre",2,"h2",false,"font-awesome-icon","FontAwesome proporciona más de 2,000 iconos gratuitos para usar en tus proyectos. Aquí te explicamos cómo comenzar a usarlos en tu aplicación Nuxt 3, incluyendo cómo mejorar el rendimiento importando solo los iconos que necesitas.","instalación","Instalación","npm i --save @fortawesome\u002Fvue-fontawesome@latest-3\n","npm i --save @fortawesome\u002Ffontawesome-svg-core\nnpm i --save @fortawesome\u002Ffree-brands-svg-icons\n","\"dependencies\": {\n\"@fortawesome\u002Ffontawesome-svg-core\": \"^6.2.1\",\n\"@fortawesome\u002Ffree-brands-svg-icons\": \"^6.2.1\",\n\"@fortawesome\u002Fvue-fontawesome\": \"^3.0.2\"\n}\n","configuración","Configuración","css: [\n'@fortawesome\u002Ffontawesome-svg-core\u002Fstyles.css'\n]\n","subconjuntos-para-mejorar-el-rendimiento","Subconjuntos para mejorar el rendimiento","import { library, config } from '@fortawesome\u002Ffontawesome-svg-core'\nimport { FontAwesomeIcon } from '@fortawesome\u002Fvue-fontawesome'\nimport { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome\u002Ffree-brands-svg-icons'\n\nlibrary.add(faTwitterSquare, faTwitch, faGithubSquare)\n\n\u002F\u002F Esto es importante, vamos a dejar que Nuxt se encargue del CSS\nconfig.autoAddCss = false\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\nnuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})\n})\n","\u002F\u002F ...\n\nimport { fab } from '@fortawesome\u002Ffree-brands-svg-icons'\nlibrary.add(fab)\n\n\u002F\u002F ...\n","usando-los-iconos","Usando los iconos","\u003Cfont-awesome-icon icon=\"fa-brands fa-twitter-square\" \u002F\u003E\n\u003Cfont-awesome-icon icon=\"fa-brands fa-youtube-square\" \u002F\u003E\n\u003Cfont-awesome-icon icon=\"fa-brands fa-github-square\" \u002F\u003E\n","\u003Ctemplate\u003E\n\u003Cdiv id=\"icons\"\u003E\n    \u003Ca v-for=\"link in socialLinks\" :key=\"link.name\" :href=\"link.url\" target=\"blank\"\u003E\n        \u003Cfont-awesome-icon :icon=\"['fab', link.icon]\" \u002F\u003E\n    \u003C\u002Fa\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n\u003Cscript setup\u003E\nconst socialLinks = [\n  {\n    name: 'Twitter',\n    url: 'https:\u002F\u002Ftwitter.com\u002Fceceliacreates',\n    icon: 'twitter-square'\n\n  },\n  {\n    name: 'Youtube',\n    url: 'https:\u002F\u002Fwww.youtube.com\u002F@ceceliacreates',\n    icon: 'youtube-square'\n  },\n  {\n    name: 'GitHub',\n    url: 'https:\u002F\u002Fgithub.com\u002Fceceliacreates',\n    icon: 'github-square'\n  }\n\n]\n\u003C\u002Fscript\u003E\n","recursos","Recursos","li","a","nofollow"))