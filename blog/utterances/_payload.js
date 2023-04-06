export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:{"content-query-wNGHrsjhIN":{_path:"\u002Fblog\u002Futterances",_dir:"blog",_draft:e,_partial:e,_locale:f,_empty:e,title:h,description:i,author:"Jorge",date:"2023-02-14T00:00:00.000Z",body:{type:"root",children:[{type:b,tag:"h1",props:{id:"cómo-configuro-utterances"},children:[{type:a,value:h}]},{type:b,tag:g,props:{},children:[{type:a,value:i}]},{type:b,tag:j,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Elija el repositorio: Utterances requiere un repositorio de GitHub para almacenar los comentarios. Puede usar un repositorio existente o crear uno nuevo. El repositorio debe ser público y debe tener acceso de escritura."}]},{type:b,tag:d,props:{},children:[{type:a,value:"Genere un token de acceso: para permitir que Utterances acceda al repositorio, debe generar un token de acceso personal de GitHub. Para generar el token, vaya a la configuración de su cuenta de GitHub, haga clic en \"Configuración de desarrollador\" \u003E \"Tokens de acceso personal\" y luego haga clic en \"Generar nuevo token\". Asigne un nombre al token, seleccione el alcance \"repo\" y luego haga clic en \"Generar token\". Copie el token en un lugar seguro, ya que no podrá volver a verlo."}]},{type:b,tag:d,props:{},children:[{type:a,value:"Instale Utterances: puede instalar Utterances en su aplicación Nuxt.js 3 agregando el script de Utterances a su archivo "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:". Puede hacerlo agregando el siguiente código a su archivo "},{type:b,tag:c,props:{},children:[{type:a,value:k}]},{type:a,value:":"}]}]},{type:b,tag:l,props:{code:m,meta:null},children:[{type:b,tag:"pre",props:{},children:[{type:b,tag:l,props:{__ignoreMap:f},children:[{type:a,value:m}]}]}]},{type:b,tag:g,props:{},children:[{type:a,value:"Reemplace los siguientes marcadores de posición:"}]},{type:b,tag:"ul",props:{},children:[{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003CNOMBRE DE USUARIO\u003E\u002F\u003CREPOSITORIO\u003E"}]},{type:a,value:": el nombre de usuario y el nombre del repositorio de GitHub que creó en el paso 1."}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003CTHEME\u003E"}]},{type:a,value:": El nombre del tema de Utterances que desea utilizar. Puede usar el tema predeterminado configurando esto en "},{type:b,tag:c,props:{},children:[{type:a,value:"github-light"}]},{type:a,value:n},{type:b,tag:c,props:{},children:[{type:a,value:"github-dark"}]},{type:a,value:", o puede crear su propio tema siguiendo las instrucciones en la documentación de Utterances."}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003CETIQUETA\u003E"}]},{type:a,value:": (Opcional) Una etiqueta para agregar a cada problema creado por Utterances. Esto se puede usar para diferenciar entre problemas creados por Expresiones y otros problemas en el repositorio."}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003CISSUE-TERM\u003E"}]},{type:a,value:": (Opcional) El término a utilizar al crear nuevos problemas. Puede usar el valor predeterminado de "},{type:b,tag:c,props:{},children:[{type:a,value:"ruta de acceso"}]},{type:a,value:" para crear un hilo de problema separado para cada página de su sitio web."}]},{type:b,tag:d,props:{},children:[{type:b,tag:c,props:{},children:[{type:a,value:"\u003CCLEANUP\u003E"}]},{type:a,value:": (Opcional) Si cerrar automáticamente los problemas que no han tenido nuevos comentarios en un cierto período de tiempo. Puede establecer esto en "},{type:b,tag:c,props:{},children:[{type:a,value:"verdadero"}]},{type:a,value:n},{type:b,tag:c,props:{},children:[{type:a,value:o}]},{type:a,value:". De forma predeterminada, se establece en "},{type:b,tag:c,props:{},children:[{type:a,value:o}]},{type:a,value:"."}]}]},{type:b,tag:j,props:{start:4},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Habilite la aplicación Utterances: para permitir que Utterances publique comentarios en el repositorio, debe agregar la aplicación Utterances al repositorio. Para hacer esto, vaya a la configuración del repositorio, haga clic en \"Aplicaciones GitHub instaladas\" y luego haga clic en \"Configurar\" junto a la aplicación Utterances. Otorgue a la aplicación acceso al repositorio."}]}]},{type:b,tag:g,props:{},children:[{type:a,value:"Después de completar estos pasos, debería poder ver el cuadro de comentarios Expresiones en su sitio web o aplicación web. Los visitantes pueden publicar comentarios usando su cuenta de GitHub y los comentarios se almacenarán como problemas en el repositorio configurado."}]}],toc:{title:f,searchDepth:p,depth:p,links:[]}},_type:"markdown",_id:"content:blog:utterances.md",_source:"content",_file:"blog\u002Futterances.md",_extension:"md"}},prerenderedAt:1680741766511}}("text","element","code-inline","li",false,"","p","¿Cómo configuro Utterances?","Para configurar Utterances, un sistema de comentarios que utiliza problemas de GitHub para comentarios, para su sitio web o aplicación web, debe seguir estos pasos:","ol","nuxt.config.js","code","export default {\n  head: {\n    script: [\n      {\n        src: \"https:\u002F\u002Futteranc.es\u002Fclient.js\",\n        async: true,\n        \"data-utterances-repo\": \"\u003CUSERNAME\u003E\u002F\u003CREPOSITORY\u003E\",\n        \"data-utterances-theme\": \"\u003CTHEME\u003E\",\n        \"data-utterances-label\": \"\u003CLABEL\u003E\",\n        \"data-utterances-issue-term\": \"\u003CISSUE-TERM\u003E\",\n        \"data-utterances-cleanup\": \"\u003CCLEANUP\u003E\",\n      },\n    ],\n  },\n};\n\n"," o ","falso",2))