export default (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:{"content-query-BrgOUxkbjO":{_path:"\u002Fblog\u002Ferror-en-about",_dir:"blog",_draft:e,_partial:e,_locale:c,_empty:e,title:"Error en \"Acerca de\"",description:g,author:"Jorge",date:"2023-02-14T00:00:00.000Z",body:{type:"root",children:[{type:a,tag:f,props:{},children:[{type:b,value:g}]},{type:a,tag:d,props:{code:h,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:d,props:{__ignoreMap:c},children:[{type:b,value:h}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Este fue usando el método fecth, pero no carga."}]},{type:a,tag:d,props:{code:k,meta:i},children:[{type:a,tag:j,props:{},children:[{type:a,tag:d,props:{__ignoreMap:c},children:[{type:b,value:k}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Acá había un problema porque parece ser código para Nuxtjs2\r\nEl actual se supone que despliega los errores, pero se queda en Loading..."}]}],toc:{title:c,searchDepth:l,depth:l,links:[]}},_type:"markdown",_id:"content:blog:error-en-about.md",_source:"content",_file:"blog\u002Ferror-en-about.md",_extension:"md"}},prerenderedAt:1676399786921}}("element","text","","code",false,"p","La página de \"Acerca de\" no despliega a pesar de haber intentado varios métodos:","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData({ $content }) {\r\n      const aboutPage = await $content('about').fetch()\r\n  \r\n      return { aboutPage }\r\n    },\r\n  }\r\n  \u003C\u002Fscript\u003E  \n",null,"pre","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData() {\r\n      const about = await this.$content('about').fetch()\r\n      return { about }\r\n    },\r\n  }\r\n\u003C\u002Fscript\u003E\r\n\r\n\u003Cscript\u003E\r\nexport default {\r\n  async asyncData() {\r\n    const aboutData = await this.$content('about').fetch()\r\n    console.log(aboutData)\r\n    return { $page: { about: aboutData || {} } }\r\n  },\r\n}\r\n\u003C\u002Fscript\u003E\n",2))