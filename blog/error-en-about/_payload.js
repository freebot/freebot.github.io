export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m){return {data:{"content-query-BrgOUxkbjO":{_path:"\u002Fblog\u002Ferror-en-about",_dir:"blog",_draft:f,_partial:f,_locale:d,_empty:f,title:"Error en \"Acerca de\"",description:i,author:"Jorge",date:"2023-02-14T00:00:00.000Z",body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:i}]},{type:a,tag:c,props:{code:j,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:j}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Este fue usando el método fecth, pero no carga."}]},{type:a,tag:c,props:{code:k,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:k}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Otra opción:"}]},{type:a,tag:c,props:{code:l,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:c,props:{__ignoreMap:d},children:[{type:b,value:l}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:"Acá había un problema porque parece ser código para Nuxtjs2\r\nEl actual se supone que despliega los errores, pero se queda en Loading..."}]}],toc:{title:d,searchDepth:m,depth:m,links:[]}},_type:"markdown",_id:"content:blog:error-en-about.md",_source:"content",_file:"blog\u002Ferror-en-about.md",_extension:"md"}},prerenderedAt:1682000693786}}("element","text","code","","p",false,null,"pre","La página de \"Acerca de\" no despliega a pesar de haber intentado varios métodos:","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData({ $content }) {\r\n      const aboutPage = await $content('about').fetch()\r\n  \r\n      return { aboutPage }\r\n    },\r\n  }\r\n  \u003C\u002Fscript\u003E  \n","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData() {\r\n      const about = await this.$content('about').fetch()\r\n      return { about }\r\n    },\r\n  }\r\n\u003C\u002Fscript\u003E\n","\u003Cscript\u003E\r\nexport default {\r\n  async asyncData() {\r\n    const aboutData = await this.$content('about').fetch()\r\n    console.log(aboutData)\r\n    return { $page: { about: aboutData || {} } }\r\n  },\r\n}\r\n\u003C\u002Fscript\u003E\n",2))