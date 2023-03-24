export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {data:{"content-query-ZmSF76yEZG":{_path:"\u002Fblog\u002Fad-sense",_dir:"blog",_draft:h,_partial:h,_locale:e,_empty:h,title:"Cómo agregar Google AdSense a Nuxt.js 3 usando el módulo @nuxtjs\u002Fgoogle-adsense",description:i,date:"2023-03-12",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para agregar Google AdSense a tu proyecto de Nuxt.js 3, primero debes instalar el módulo @nuxtjs\u002Fgoogle-adsense. Puedes hacer esto usando npm o yarn."}]},{type:a,tag:d,props:{code:j,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:j}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"o"}]},{type:a,tag:d,props:{code:k,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:k}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Paso 2: Configurar el módulo @nuxtjs\u002Fgoogle-adsense"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para configurar el módulo @nuxtjs\u002Fgoogle-adsense, agrega lo siguiente a tu archivo nuxt.config.js:"}]},{type:a,tag:d,props:{code:l,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:l}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reemplaza TU_ID_DE_ADSENSE_AQUÍ con tu identificación de AdSense.\nPaso 3: Agregar anuncios a tus páginas"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Una vez que hayas configurado el módulo @nuxtjs\u002Fgoogle-adsense, puedes agregar anuncios a tus páginas utilizando la etiqueta "},{type:a,tag:m,props:{},children:[{type:b,value:"."}]}]},{type:a,tag:d,props:{code:n,meta:f},children:[{type:a,tag:g,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:n}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Reemplaza TU_SLOT_DE_ADSENSE_AQUÍ con el slot de AdSense donde deseas que se muestren los anuncios.\nPaso 4: Verifica que se muestren los anuncios"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Una vez que hayas agregado la etiqueta "},{type:a,tag:m,props:{},children:[{type:b,value:" con el código de AdSense a tus páginas, asegúrate de que los anuncios se muestren correctamente en tu sitio web."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"¡Eso es todo! Ahora deberías tener anuncios de Google AdSense en tu proyecto de Nuxt.js 3 usando el módulo @nuxtjs\u002Fgoogle-adsense."}]}],toc:{title:e,searchDepth:o,depth:o,links:[]}},_type:"markdown",_id:"content:blog:ad-sense.md",_source:"content",_file:"blog\u002Fad-sense.md",_extension:"md"}},prerenderedAt:1679694535880}}("element","text","p","code","",null,"pre",false,"Google AdSense es una plataforma de publicidad en línea que permite a los editores monetizar su contenido a través de anuncios en sus sitios web. En este tutorial, aprenderás cómo agregar Google AdSense a un proyecto de Nuxt.js 3 usando el módulo @nuxtjs\u002Fgoogle-adsense.\nPaso 1: Instalar el módulo @nuxtjs\u002Fgoogle-adsense","npm install @nuxtjs\u002Fgoogle-adsense\n\n","\nyarn add @nuxtjs\u002Fgoogle-adsense\n","\nexport default {\n  modules: [\n    '@nuxtjs\u002Fgoogle-adsense',\n  ],\n  googleAdsense: {\n    id: 'TU_ID_DE_ADSENSE_AQUÍ',\n    pageLevelAds: true,\n  },\n}\n","client-only","\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ch1\u003EMi página de inicio\u003C\u002Fh1\u003E\n    \u003Cclient-only\u003E\n      \u003Cins class=\"adsbygoogle\"\n           style=\"display:block\"\n           data-ad-client=\"TU_ID_DE_ADSENSE_AQUÍ\"\n           data-ad-slot=\"TU_SLOT_DE_ADSENSE_AQUÍ\"\n           data-ad-format=\"auto\"\n           data-full-width-responsive=\"true\"\u003E\u003C\u002Fins\u003E\n    \u003C\u002Fclient-only\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n",2))