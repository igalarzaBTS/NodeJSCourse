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
  .options('s', {
    alias: 'show',
    type: `boolean`,
    default: false,
    describe: `Show multiplication table`
  })
  .options('n', {
    alias: 'name',
    type: `string`,
    default: 'multiplication-table',
    describe: `File name`
  })
  .options('d', {
    alias: 'destination',
    type: `string`,
    default: 'outputs',
    describe: `File destination`
  })
  .check((argv, options) => {
    if (argv.b < 1 ) throw 'Error: base must be greater than 0';
    return true
  })
  .parseSync()