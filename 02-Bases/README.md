# Fundamentos

## Scripts

Los "scripts" son comandos que se definene en el package.json y que nos ayudan a crear un alias para simplificar el proceso de ejecucion de los mismos.
Por lo general el script principal es el <b>start</b>, este comando inicia el backend en node y es un comando especial que es ejecutado con un ```npm start```

A diferencia de script <b>start</b>, cualquier otro script, se debe correr con ```npm run <script-name>```

## Patrón adaptador

El patrón adaptador se utiliza cuando tenemos la necesidad de usar una liberia de terceros.
Para implementar este patrón, crearemos un archivo "intermediario" que adapte/implemente la libreria de terceros y despues usar este "adapter" en nuestro código. El objetivo es tener <b>UNA SOLA IMPLEMENTACIÓN</b> de la liberia externa en nuestro código para poder actualizar, reemplazar o purgar a futuro dicha libreria en caso de ser necesario.

Nota: En este curso estos adapters son llamados plugins.

### Creando un index de exportaciones

Existen ocaciones en las cuales deseamos simplificar las exportaciones que usamos en nuestro código, ejemplo: 

```
const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');
```

En este ejemplo, exportamos diferentes funciones desde un mismo directorio, por lo que podemos crear en dicho directorio un archivo llamado "index.js" que contenga las exportaciones deseadas y asi usar una unica linea de codigo para la exportacion y destructuracion del mismo.

######Creación del archivo index.js dentro del directorio "plugins"

```
// index.js

const { getUUID } = require('../plugins/get-id.plugin');
const { getAge } = require('../plugins/get-age.plugin');

module.export = {
  getUUID,
  getAge
}
```
###### Implementación
```
const {getUUID, getAge} = require('../plugins')
```
Nota: No es requerido especificar el archivo "index" dentro del path 

# Fundamentos Typescript

## Node logger - Winston

[Winston](https://www.npmjs.com/package/winston)
