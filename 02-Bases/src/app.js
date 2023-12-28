/*========================
        Template
========================*/
// const {emailTemplate} = require('./js-foundation/01-tamplate');
// console.log(emailTemplate);

/*========================
        Destructiring
========================*/

// require('./js-foundation/02-destructuring');
/*========================
        Callbacks
========================*/

// require('./js-foundation/03-callbacks');

// const { getUserById } = require('./js-foundation/04-arrow');
// const id = 2;
// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);
//   console.log(user);
// });

/*========================
Factory Methods - Definition
========================*/

// require('./js-foundation/05-factory');


/*========================
Factory Methods - Implementation
========================*/

// const { buildMakePerson } = require('./js-foundation/05-factory2');
// const { getAge, getUUID} = require('./plugins');

/*
  "BuildMakePerson" retorna una función que es almacenada en makePerson,
  esta funcion retornada es un "factory method" a la que pasamos los parametros
  de nuestros plugins (adapters getUUID y getAge)
*/

// const makePerson = buildMakePerson({ getUUID, getAge })

// const obj = { name: 'John', birthdate: '1985-10-21' };

/*
Ahora ejecutamos la factory method que teniamos almacenado en makePerson
*/

// const jhon = makePerson(obj);
// console.log(jhon)

/*========================
        Promesa básica
========================*/

// const getPokemonId = require('./js-foundation/06-promises');

// getPokemonId(4, (pokemon) => {
//   console.log({pokemon});
// });

/*========================
      Promesa en cadena
========================*/

// const getPokemonId = require('./js-foundation/06-promises2');
// getPokemonId(4)
//   .then((pokemon) => console.log({pokemon}))
//   .catch((err) => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log('Fin de la promesa'))

/*========================
      Async / Await
========================*/

// const getPokemonId = require('./js-foundation/07-async-await');
// getPokemonId(4)
//   .then((pokemon) => console.log({pokemon}))
//   .catch((err) => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log('Fin de la promesa'))


/*========================
      Fetch Adapter API
========================*/

// const getPokemonId = require('./js-foundation/08-fetch-adapter');

// getPokemonId(4)
//   .then((pokemon) => console.log({pokemon}))
//   .catch((err) => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log('Fin de la promesa'))


/*========================
       Axios
========================*/

// const getPokemonId = require('./js-foundation/09-axios');

// getPokemonId(4)
//   .then((pokemon) => console.log({pokemon}))
//   .catch((err) => console.log('Por favor intente de nuevo'))
//   .finally(() => consol
// e.log('Fin de la promesa'))

/*========================
        Logger winston
========================*/

const { buildLogger } = require(`./plugins`);
const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Ups! hubo un error');


