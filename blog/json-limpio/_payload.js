export default (function(a,b,c,d,e,f,g,h,i){return {data:{"content-query-WbrzkM7qES":{_path:"\u002Fblog\u002Fjson-limpio",_dir:"blog",_draft:d,_partial:d,_locale:e,_empty:d,title:"Cómo limpiar un string para JSON con Python",description:f,date:"2023-03-18",author:"Jorge",body:{type:"root",children:[{type:a,tag:c,props:{},children:[{type:b,value:f}]},{type:a,tag:c,props:{},children:[{type:b,value:"Hoy en día, tuve ese problema y pasé varias horas tratando de solucionarlo. Afortunadamente, me puse en contacto con el equipo de chatgpt, y me proporcionaron una función útil que me permitió limpiar el string y asegurarme de que fuera compatible con JSON."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Aquí está la función que me proporcionaron:"}]},{type:a,tag:g,props:{code:h,language:"python",meta:null},children:[{type:a,tag:"pre",props:{},children:[{type:a,tag:g,props:{__ignoreMap:e},children:[{type:b,value:h}]}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Esta función primero elimina caracteres no compatibles con el formato JSON utilizando una expresión regular. Luego, elimina los saltos de línea y los caracteres de retorno de carro. Finalmente, comprueba si el string se puede cargar como JSON. Si el string no se puede cargar como JSON, la función reemplaza los caracteres no compatibles con un espacio."}]},{type:a,tag:c,props:{},children:[{type:b,value:"Con esta función, pude limpiar mis strings problemáticos y asegurarme de que estuvieran en formato JSON compatible. Espero que esta función también te resulte útil en tu trabajo con JSON en Python."}]}],toc:{title:e,searchDepth:i,depth:i,links:[]}},_type:"markdown",_id:"content:blog:json-limpio.md",_source:"content",_file:"blog\u002Fjson-limpio.md",_extension:"md"}},prerenderedAt:1680741766400}}("element","text","p",false,"","Si alguna vez has intentado convertir un string en formato JSON en Python, es posible que te hayas encontrado con errores causados por caracteres no compatibles con el formato. Esto puede ser frustrante, especialmente cuando estás trabajando con una gran cantidad de datos y necesitas que todo esté en formato JSON para poder procesarlo correctamente.","code","\nimport re\nimport json\n\ndef clean_string_for_json(s):\n    # Remove page breaks and other non-ASCII characters\n    s = re.sub(r'[^\\x00-\\x7F]+', '', s)\n    s = s.replace('\\n', '').replace('\\r', '')\n\n    # Load string as JSON to check for compatibility\n    try:\n        json.loads(s)\n    except ValueError:\n        # Replace non-compliant characters with a space\n        s = re.sub(r'[^\\x00-\\x7F]+', ' ', s)\n\n    return s\n",2))