export default (function(a,b,c,d,e,f,g,h,i){return {data:{"content-query-pVGd8p3Bj7":{_path:"\u002Fblog\u002Fconfiguracion-de-modulos",_dir:"blog",_draft:b,_partial:b,_locale:c,_empty:b,title:e,description:f,author:"Jorge",date:"2023-02-15T00:00:00.000Z",body:{type:"root",children:[{type:a,tag:"h1",props:{id:"cómo-configurar-los-módulos"},children:[{type:d,value:e}]},{type:a,tag:"p",props:{},children:[{type:d,value:f}]},{type:a,tag:g,props:{code:h,meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:g,props:{__ignoreMap:c},children:[{type:d,value:h}]}]}]}],toc:{title:c,searchDepth:i,depth:i,links:[]}},_type:"markdown",_id:"content:blog:configuracion-de-modulos.md",_source:"content",_file:"blog\u002Fconfiguracion-de-modulos.md",_extension:"md"}},prerenderedAt:1681072533533}}("element",false,"","text","Cómo configurar los módulos","En Nuxtjs 3, la condiguración de los módulos en nuxt.config.js se pone dentro del mismo listado de los módulos y no, aparte.","code","export default {\n  modules: [\n    \u002F\u002F Simple usage\n    '@nuxtjs\u002Faxios',\n\n    \u002F\u002F With options\n    ['@nuxtjs\u002Faxios', {\n      baseURL: 'https:\u002F\u002Fapi.example.com'\n    }]\n  ]\n}\n\n",2))