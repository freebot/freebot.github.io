export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:{"content-query-TQb7HJ77o5":{_path:"\u002Fblog\u002Ftutorial-github-actions",_dir:"blog",_draft:j,_partial:j,_locale:e,_empty:j,title:"Cómo implementar una aplicación de Nuxt.js en GitHub Pages utilizando GitHub Actions",description:l,date:"2023-03-14",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:l}]},{type:a,tag:c,props:{},children:[{type:b,value:"Antes de comenzar, asegúrate de que tu aplicación de Nuxt.js esté lista para implementar en GitHub Pages. Para hacerlo, sigue los siguientes pasos:"}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Abre el archivo nuxt.config.js y agrega la siguiente línea dentro del objeto module.exports:"}]}]},{type:a,tag:d,props:{code:m,language:"javascript",meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:m}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esta línea asegurará que se genere una página de error personalizada para cualquier URL que no esté en tu aplicación de Nuxt.js."}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Abre el archivo package.json y agrega la siguiente línea dentro del objeto scripts:"}]}]},{type:a,tag:d,props:{code:n,language:"json",meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:n}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esta línea asegurará que, cuando ejecutes el comando npm run deploy, se generen los archivos de construcción de tu aplicación y se publiquen en la rama gh-pages."}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Asegúrate de tener el paquete gh-pages instalado en tu proyecto de Nuxt.js. Para hacerlo, ejecuta el siguiente comando en la terminal:"}]}]},{type:a,tag:d,props:{code:o,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:o}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Ahora, con tu aplicación de Nuxt.js lista para implementar, podemos comenzar a configurar GitHub Actions."}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Abre la pestaña \"Actions\" de tu repositorio en GitHub."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Haz clic en el botón \"Set up a workflow yourself\" para crear un nuevo archivo de configuración de GitHub Actions."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Pega el siguiente código en el archivo main.yml:"}]}]},{type:a,tag:d,props:{code:p,language:k,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:p}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Este archivo de configuración especifica que queremos implementar nuestra aplicación en GitHub Pages cada vez que se realiza un push a la rama main del repositorio. El trabajo deploy se ejecutará en una máquina virtual de Ubuntu, que instalará Node.js, las dependencias de nuestra aplicación, generará los archivos de construcción y los publicará en la rama gh-pages utilizando la clave de implementación de GitHub Pages."}]},{type:a,tag:i,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Para que GitHub Actions pueda acceder a la clave de implementación de GitHub Pages, debemos configurar un secreto en nuestro repositorio. Para hacerlo, ve a la pestaña \"Settings\" de tu repositorio, haz clic en \"Secrets\" y luego en \"New repository secret\". En el campo \"Name\", introduce \"DEPLOY_KEY\" y en el campo \"Value\", pega la clave privada que generaste anteriormente. Luego, haz clic en \"Add secret\" para guardar la configuración."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Después de configurar el secreto, debemos modificar el archivo main.yml para que GitHub Actions pueda utilizarlo en la implementación de nuestra aplicación. En la sección \"env\", agregamos la siguiente variable de entorno:"}]},{type:a,tag:d,props:{code:q,language:k,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:q}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esto le dice a GitHub Actions que la clave de implementación está disponible como la variable de entorno \"DEPLOY_KEY\", y que debe usarla en el paso de implementación."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Por último, en la sección de implementación, agregamos los siguientes pasos:"}]},{type:a,tag:d,props:{code:r,language:k,meta:g},children:[{type:a,tag:h,props:{},children:[{type:a,tag:d,props:{__ignoreMap:e},children:[{type:b,value:r}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En el primer paso, instalamos las dependencias de nuestra aplicación con el comando \"npm ci\". En el segundo paso, generamos los archivos de construcción con el comando \"npm run generate\". Y en el tercer paso, utilizamos la acción \"peaceiris\u002Factions-gh-pages@v3\" para implementar la aplicación en GitHub Pages."}]},{type:a,tag:c,props:{},children:[{type:b,value:"En el paso de implementación, debemos especificar dos variables: \"personal_token\" y \"deploy_key\". La variable \"personal_token\" es el token de acceso personal que generamos anteriormente, y la variable \"deploy_key\" es la clave privada que configuramos como secreto en nuestro repositorio. También debemos especificar la ruta del directorio de implementación con la variable \"publish_dir\"."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Guarda los cambios en el archivo main.yml y haz un commit y un push a tu repositorio para que GitHub Actions comience a implementar tu aplicación en GitHub Pages. Después de unos minutos, podrás ver tu aplicación en línea en la URL que configuraste anteriormente."}]},{type:a,tag:c,props:{},children:[{type:b,value:"¡Felicitaciones! Ahora has implementado tu aplicación de Nuxt.js en GitHub Pages utilizando GitHub Actions. Este es un gran logro que te ayudará a compartir tu trabajo con el mundo. ¡Sigue adelante y sigue construyendo cosas increíbles!"}]}],toc:{title:e,searchDepth:s,depth:s,links:[]}},_type:"markdown",_id:"content:blog:tutorial-github-actions.md",_source:"content",_file:"blog\u002Ftutorial-github-actions.md",_extension:"md"}},prerenderedAt:1680310554518}}("element","text","p","code","","li",null,"pre","ul",false,"yaml","Si estás desarrollando una aplicación de Nuxt.js y deseas publicarla en GitHub Pages, es posible que te hayas preguntado cómo implementarla. En este tutorial, te guiaré a través del proceso de configuración de GitHub Actions para implementar automáticamente tu aplicación de Nuxt.js en GitHub Pages cada vez que realices un push a la rama principal de tu repositorio.","\nmodule.exports = {\n  \u002F\u002F ...\n  generate: {\n    fallback: true\n  }\n  \u002F\u002F ...\n}\n","\n\"deploy\": \"npm run generate && gh-pages -d dist\"\n","\nnpm install gh-pages --save-dev\n","\nname: Deploy to GitHub Pages\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions\u002Fcheckout@v2\n    - name: Set up Node.js\n      uses: actions\u002Fsetup-node@v2.4.4\n      with:\n        node-version: '16.x'\n    - name: Install dependencies\n      run: npm install\n    - name: Build\n      run: npm run generate\n    - name: Deploy\n      uses: peaceiris\u002Factions-gh-pages@v3\n      with:\n        deploy_key: ${{ secrets.GH_PAGES_DEPLOY_KEY }}\n        publish_dir: .\u002Fdist\n","\nenv:\n  DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}\n","\n- name: Install dependencies\n  run: npm ci\n\n- name: Build application\n  run: npm run generate\n\n- name: Deploy to GitHub Pages\n  uses: peaceiris\u002Factions-gh-pages@v3\n  with:\n    personal_token: ${{ secrets.PERSONAL_TOKEN }}\n    deploy_key: ${{ env.DEPLOY_KEY }}\n    publish_dir: .\u002Fdist\u002F\n",2))