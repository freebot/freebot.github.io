export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:{"content-query-JxRcKZI4DB":{_path:"\u002Fblog\u002Fgithub-actions",_dir:"blog",_draft:h,_partial:h,_locale:e,_empty:h,title:"Cómo implementar Github Actions en un proyecto Nuxtjs 3",description:i,date:"2023-03-14",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:i}]},{type:a,tag:f,props:{id:j},children:[{type:b,value:k}]},{type:a,tag:c,props:{},children:[{type:b,value:"GitHub Actions es una plataforma de CI\u002FCD integrada en GitHub. Te permite automatizar tareas en tu repositorio, como la construcción y prueba de tu código, y la implementación de tu aplicación. Con GitHub Actions, puedes crear flujos de trabajo que se activan por eventos como la creación de solicitudes de extracción, la creación de etiquetas, o simplemente al realizar un commit en una rama determinada."}]},{type:a,tag:f,props:{id:l},children:[{type:b,value:m}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para usar GitHub Actions en tu proyecto de Nuxt.js 3, debes tener una cuenta de GitHub y un repositorio en GitHub. Si no tienes una cuenta, puedes registrarte gratuitamente en el sitio web de GitHub. Si aún no has creado un repositorio, puedes hacerlo desde la página de inicio de GitHub."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Además, debes tener Node.js y NPM instalados en tu computadora para poder ejecutar los comandos necesarios. Si aún no los tienes instalados, puedes descargar Node.js y NPM desde el sitio web oficial de Node.js."}]},{type:a,tag:f,props:{id:n},children:[{type:b,value:o}]},{type:a,tag:c,props:{},children:[{type:b,value:"El primer paso para configurar GitHub Actions es crear un archivo de flujo de trabajo (workflow file) en tu repositorio. Para hacer esto, crea un archivo con el nombre main.yml en la carpeta .github\u002Fworkflows\u002F en la raíz de tu repositorio."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Este archivo de flujo de trabajo define cómo GitHub Actions debe construir, probar y desplegar tu aplicación de Nuxt.js 3. Aquí hay un ejemplo de cómo se puede configurar un flujo de trabajo básico:"}]},{type:a,tag:g,props:{code:p,meta:q},children:[{type:a,tag:r,props:{},children:[{type:a,tag:g,props:{__ignoreMap:e},children:[{type:b,value:p}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En este ejemplo, el flujo de trabajo se activa cuando se realiza un push en la rama main. El flujo de trabajo se ejecuta en una máquina virtual de Ubuntu, donde se realizan las siguientes acciones:"}]},{type:a,tag:g,props:{code:s,meta:q},children:[{type:a,tag:r,props:{},children:[{type:a,tag:g,props:{__ignoreMap:e},children:[{type:b,value:s}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Es importante tener en cuenta que debes reemplazar la ACCESS_TOKEN con tu propia clave de acceso personal de GitHub. Puedes crear una clave de acceso personal en la sección \"Settings\" de tu cuenta de GitHub. Luego, debes agregar esta clave como un secreto en tu repositorio, utilizando la sección \"Settings\" y la opción \"Secrets\".\nDespliegue de la aplicación"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Una vez que hayas configurado GitHub Actions en tu repositorio, la aplicación se construirá y se desplegará automáticamente cada vez que se realice un push en la rama main."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para acceder a la aplicación desplegada, ve a la página de GitHub Pages de tu repositorio. Si has configurado todo correctamente, deberías ver tu aplicación en línea."}]},{type:a,tag:f,props:{id:t},children:[{type:b,value:u}]},{type:a,tag:c,props:{},children:[{type:b,value:"GitHub Actions es una plataforma poderosa y fácil de usar para la integración continua y la implementación continua. En este artículo, hemos visto cómo configurar GitHub Actions para un proyecto de Nuxt.js 3 y cómo desplegar automáticamente la aplicación en GitHub Pages. Si aún no has utilizado GitHub Actions en tus proyectos, te recomiendo que lo pruebes y veas cómo puede automatizar tus flujos de trabajo y mejorar la calidad de tu código. ¡Buena suerte!"}]}],toc:{title:e,searchDepth:d,depth:d,links:[{id:j,depth:d,text:k},{id:l,depth:d,text:m},{id:n,depth:d,text:o},{id:t,depth:d,text:u}]}},_type:"markdown",_id:"content:blog:github-actions.md",_source:"content",_file:"blog\u002Fgithub-actions.md",_extension:"md"}},prerenderedAt:1679697442863}}("element","text","p",2,"","h2","code",false,"¡Bienvenidos! En este artículo vamos a explorar cómo usar GitHub Actions para la integración continua y la implementación continua (CI\u002FCD) en un proyecto de Nuxt.js 3.","qué-son-las-github-actions","¿Qué son las GitHub Actions?","preparación-del-entorno","Preparación del entorno","configuración-de-github-actions","Configuración de GitHub Actions","name: CI\u002FCD\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions\u002Fcheckout@v2\n      - name: Install dependencies\n        run: npm install\n      - name: Build\n        run: npm run build\n      - name: Deploy\n        uses: peaceiris\u002Factions-gh-pages@v3.7.0\n        with:\n          deploy_key: ${{ secrets.ACCESS_TOKEN }}\n          publish_dir: .\u002Fdist\n",null,"pre","Se clona el repositorio en la máquina virtual.\nSe instalan las dependencias de NPM.\nSe construye el proyecto con el comando npm run build.\nSe despliega la aplicación en GitHub Pages utilizando la acción peaceiris\u002Factions-gh-pages.\n","conclusión","Conclusión"))