__NUXT_JSONP__("/tags/S3", (function(a,b,c,d,e,f,g,h){return {data:[{posts:[{title:"CloudFront + S3 Website \"The specified key does not exist\"",description:"Error al cargar las páginas de hugo blog en S3",date:"2021-02-04T00:00:00.000Z",image:"\u002Fnature-2746726_1280.jpg",alt:null,tags:["hugo","S3"],toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\nAl querer cargar algunas páginas del blog "},{type:b,tag:f,props:{href:"jorgeikeda.com"},children:[{type:a,value:"De die in diem"}]},{type:a,value:" desplegaba XML y el siguiente mensaje de error: \n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"The specified key does not exist."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\nEl problema radica en el "},{type:b,tag:"i",props:{},children:[{type:a,value:"endpoit"}]},{type:a,value:", si no se configura el correcto AWS piensa que debe hacer una petición REST y por eso despliega XML. El correcto endpoint se debe configurar de la siguiente forma:\n"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"http:\u002F\u002Fbucket-name.s3-website.Region.amazonaws.com\u002Fobject-name"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:a,value:"\nVer "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdocs.aws.amazon.com\u002FAmazonS3\u002Flatest\u002Fdev\u002FWebsiteEndpoints.html#WebsiteRestEndpointDiff"},children:[{type:a,value:"Website endpoints"}]}]},dir:"\u002Fposts\u002FThe_specified_key_does_not_exist",path:"\u002Fposts\u002FThe_specified_key_does_not_exist\u002Findex",extension:".md",slug:"index",createdAt:"2021-02-06T14:53:58.000Z",updatedAt:"2021-02-06T15:27:58.000Z"}]}],fetch:[],mutations:void 0}}("text","element","\n","br","p","a","pre","code")));