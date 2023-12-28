# Aplicación de consola

## Función anonima auto-invocada
En el archivo principal (app.ts), no es posble ejecutar una promesa. Para solucionar este problema, podmeo susar una función auto-invocada.

```
(async ()=> {
  await main();
  console.log("Finished process");
})();

async function main() {
  console.log("Main executed")
}

// Main executed
// Finished process
```

## ARGV
ARGV - > Arguments Vector. Es un array de argumentos que podemos acceder mediante: ```process.argv```. El array almacena los argumentos de la liena de comandos pasados al programa. Ej:
```node miScript.js arg1 arg2 arg3```

### YARGS
Es una libreria que nos ayuda a administrar los argumentos.
```npm i yargs```

<b>Creando un plugin para yargs</b>

```
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'; // oculta el path de node modules


export const yarg = yargs(hideBin(process.argv))
  .parseSync(); // Definimos que nuestro proceso será sincrono
```
#### Configuraciones YARGS

Podemos realizar configuraciones de los argumentos que esperamos usando <b>option(`<arg-name>`, `{<config>}`)</b>de la siguiente forma: 

```
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'; // oculta el path de node modules

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: `number`,
    demandOption: true, // Define que este argumento es requerido. Caso contrario retorna un error
    describe: `Multiplication table base`
  })
  .options('l', {
    alias: 'limit',
    type: `number`,
    default: 10, // Valor por defecto de este argumento
    describe: `Multiplication table limit`
  })
  .parseSync();
```

<b>Nota:</b> Cualquier argumento boolean es true si se llama en la linea de comando. Ej: ```npx ts-node src/app --base 10 -s```. Al hacer referencia a "-s" definimos que su valor sea true.

#### Validaciones de las configuraciones YARG

Si deseamos validar algún argumento, podemos realizarlo usando <b>check</b> de la siguiente forma: 

```
...
.check((argv, options)=> {
  // Validations 
  return true
})
...

```

<b>Ej: Validar que la "base" sea un número mayor a 0</b>

```
export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: `number`,
    demandOption: true, // Define que este argumento es requerido. Caso contrario retorna un error
    describe: `Multiplication table base`
  })
  .options('l', {
    alias: 'limit',
    type: `number`,
    default: 10, // Valor por defecto de este argumento
    describe: `Multiplication table limit`
  })
  .options('s', {
    alias: 'show',
    type: `boolean`,
    default: false, // Valor por defecto de este argumento
    describe: `Show multiplication table`
  })
  .check((argv, options) => {
    if (argv.b < 1 ) throw 'Error: base must be greater than 0';

    return true
  })
  .parseSync();

```

#### Usando los argumentos con YARGS en el código


