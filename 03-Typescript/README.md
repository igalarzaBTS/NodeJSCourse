# Configurando Node Js con Typescript


1. Crear un proyecto de NodeJs con ```npm init```
2. Instalar TypeScript y tipos de Node, como dependencia de desarrollo. 
```npm i -D typescript @types node```
3. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```npx tsc --init --outDir dist/ --rootDir src```
<b>Nota:</b> Este comando solo observara los archivos dentro de la carpeta "<b>src</b>".

4. Configurar Nodemon y Node-TS
```npm install -D ts-node nodemon```

5. Creamos un archivo en el root del proyecto (al nivel del package.json), llamado <b>"nodemon.json"</b> con la siguiente configuración:
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
6. Instalamos <b>"Rimraf"</b> para poder crear scripts que nos ayuden a crear el build de produccion.

```npm install -D rimraf```

7. Creamos los scripts del proyecto en el <b>"package.json"</b>.
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon",   // Corre nodemon para desarrollo
    "build": "rimraf ./dist && tsc",   // Crear el build en js
    "start": "npm run build && node dist/app.js"  // Corre la app en modo de producción
  },
```