export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:{"content-query-AYsYKEZnkk":[{_path:"\u002Fblog\u002Ferror-en-about",_dir:j,_draft:d,_partial:d,_locale:b,_empty:d,title:"Error en \"Acerca de\"",description:k,author:l,date:m,body:{type:n,children:[{type:a,tag:f,props:{},children:[{type:c,value:k}]},{type:a,tag:e,props:{code:o,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:e,props:{__ignoreMap:b},children:[{type:c,value:o}]}]}]},{type:a,tag:f,props:{},children:[{type:c,value:"Este fue usando el método fecth, pero no carga."}]},{type:a,tag:e,props:{code:p,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:e,props:{__ignoreMap:b},children:[{type:c,value:p}]}]}]},{type:a,tag:f,props:{},children:[{type:c,value:"Otra opción:"}]},{type:a,tag:e,props:{code:q,meta:h},children:[{type:a,tag:i,props:{},children:[{type:a,tag:e,props:{__ignoreMap:b},children:[{type:c,value:q}]}]}]},{type:a,tag:f,props:{},children:[{type:c,value:"Acá había un problema porque parece ser código para Nuxtjs2\r\nEl actual se supone que despliega los errores, pero se queda en Loading..."}]}],toc:{title:b,searchDepth:g,depth:g,links:[]}},_type:r,_id:"content:blog:error-en-about.md",_source:s,_file:"blog\u002Ferror-en-about.md",_extension:t},{_path:"\u002Fblog\u002Fprueba",_dir:j,_draft:d,_partial:d,_locale:b,_empty:d,title:"Prueba",description:b,author:l,date:m,body:{type:n,children:[{type:a,tag:"h1",props:{id:"esto-es-una-prueba"},children:[{type:c,value:"Esto es una prueba"}]}],toc:{title:b,searchDepth:g,depth:g,links:[]}},_type:r,_id:"content:blog:prueba.md",_source:s,_file:"blog\u002Fprueba.md",_extension:t}]},prerenderedAt:1676521711851}}("element","","text",false,"code","p",2,null,"pre","blog","La página de \"Acerca de\" no despliega a pesar de haber intentado varios métodos:","Jorge","2023-02-14T00:00:00.000Z","root","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData({ $content }) {\r\n      const aboutPage = await $content('about').fetch()\r\n  \r\n      return { aboutPage }\r\n    },\r\n  }\r\n  \u003C\u002Fscript\u003E  \n","\u003Cscript\u003E\r\n  export default {\r\n    async asyncData() {\r\n      const about = await this.$content('about').fetch()\r\n      return { about }\r\n    },\r\n  }\r\n\u003C\u002Fscript\u003E\n","\u003Cscript\u003E\r\nexport default {\r\n  async asyncData() {\r\n    const aboutData = await this.$content('about').fetch()\r\n    console.log(aboutData)\r\n    return { $page: { about: aboutData || {} } }\r\n  },\r\n}\r\n\u003C\u002Fscript\u003E\n","markdown","content","md"))