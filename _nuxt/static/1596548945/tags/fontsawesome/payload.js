__NUXT_JSONP__("/tags/fontsawesome", (function(a,b,c,d,e,f,g,h){return {data:[{posts:[{title:"Fonts Awesome",description:"No salían los íconos",date:"2020-07-28T00:00:00.000Z",image:"\u002Fbanner-982162_1280.jpg",alt:"Equations",tags:["nuxtjs","fontsawesome"],toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Este blog está hecho con Nuxtjs, Bulma y Fonts Awesome. Para instalar los Fonts Awesome seguí las instrucciones de "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.iamkonstantin.eu\u002Fblog\u002Fpost-2018-03-18\u002F"},children:[{type:a,value:"Konstantin"}]},{type:a,value:", pero al exportar el proyecto no se mostraban los íconos de Fonts Awesome.\nEn la página de "},{type:b,tag:e,props:{href:"https:\u002F\u002Fwww.w3schools.com\u002Ficons\u002Ffontawesome_icons_intro.asp"},children:[{type:a,value:"W3Schools"}]},{type:a,value:" encontré la forma de arreglar el problema:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"\n\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css\"\u003E\n"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Y se agrega en el método de head de la página en Nuxtjs:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"\nlink: [\n        { \n          rel: 'stylesheet', \n          href: 'https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css' \n        },\n      ],\n"}]}]}]},dir:"\u002Fposts\u002Ffonts-awesome",path:"\u002Fposts\u002Ffonts-awesome\u002Findex",extension:".md",slug:"index",createdAt:h,updatedAt:h}]}],fetch:[],mutations:void 0}}("text","element","\n","p","a","pre","code","2020-08-04T13:13:26.667Z")));