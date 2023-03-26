export default (function(a,b,c,d,e,f,g,h,i,j){return {data:{"content-query-cDcKxIUssZ":{_path:"\u002Fblog\u002Fhugo-github-actions",_dir:"blog",_draft:e,_partial:e,_locale:f,_empty:e,title:"Cómo implementar Github Actions en Hugo Blog con S3",description:g,date:"2023-03-14",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:g}]},{type:a,tag:c,props:{},children:[{type:b,value:"Primero, debemos crear un archivo de configuración para la acción de Github. Para hacer esto, crea una carpeta llamada .github\u002Fworkflows\u002F y dentro de ella un archivo llamado main.yml. En este archivo, configuraremos los desencadenadores y los trabajos para nuestra acción."}]},{type:a,tag:c,props:{},children:[{type:b,value:"El siguiente código muestra cómo debes configurar el archivo main.yml:"}]},{type:a,tag:h,props:{code:i,language:"less",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:h,props:{__ignoreMap:f},children:[{type:b,value:i}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"En este archivo de configuración, hemos definido que la acción solo se activará cuando alguien realice un cambio en la rama principal. También se ha especificado que se ejecutará en un contenedor Docker de Ubuntu 18.04 y se realizarán los siguientes pasos:"}]},{type:a,tag:"ul",props:{},children:[{type:a,tag:d,props:{},children:[{type:b,value:"Clonar el repositorio y sus submódulos."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Configurar Hugo."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Configurar las credenciales de AWS."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Construir el sitio web con Hugo."}]},{type:a,tag:d,props:{},children:[{type:b,value:"Desplegar el sitio web en un Bucket de AWS S3."}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Para completar la configuración de las credenciales de AWS, debes crear dos secretos en la sección \"Secretos\" de la configuración de tu repositorio en Github. Uno llamado AWS_ACCESS_KEY_ID con el valor de tu ID de acceso de AWS y otro llamado AWS_SECRET_ACCESS_KEY con el valor de tu clave de acceso secreta de AWS."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Con esto, ya hemos configurado Github Actions para desplegar nuestro sitio web automáticamente cada vez que realizamos un cambio en la rama principal. Ahora, ya no tendrás que preocuparte por el proceso de construcción y despliegue, lo que te permitirá centrarte en la creación de contenido para tu blog."}]}],toc:{title:f,searchDepth:j,depth:j,links:[]}},_type:"markdown",_id:"content:blog:hugo-github-actions.md",_source:"content",_file:"blog\u002Fhugo-github-actions.md",_extension:"md"}},prerenderedAt:1679801781258}}("element","text","p","li",false,"","En este artículo, te mostraré cómo implementar Github Actions en tu blog Hugo para automatizar el proceso de construcción, minimización y despliegue de tu sitio web en AWS S3 Bucket.","code","\nname: Deploy website to S3 bucket\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  deploy:\n    runs-on: ubuntu-18.04\n    steps:\n      - uses: actions\u002Fcheckout@v2\n        with:\n          submodules: true  # Fetch Hugo themes \n          fetch-depth: 0    # Fetch all history for .GitInfo and .Lastmod\n\n      - name: Setup Hugo\n        uses: peaceiris\u002Factions-hugo@v2\n        with:\n          hugo-version: 'latest'\n          extended: true\n\n      - name: Configure AWS Credentials\n        uses: aws-actions\u002Fconfigure-aws-credentials@v1\n        with:\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n          aws-region: \u003CYour-Region\u003E\n\n      - name: Build website\n        run: hugo --minify\n\n      - name: Hugo deploy static site to S3 bucket and invalidate Cloudfront cache\n        run: hugo deploy --maxDeletes -1 --invalidateCDN\n",2))