const {getAge, getUUID} = require('../plugins');


const buildPerson = ({name, birthdate}) => {
  return {
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
  }
}

const obj = { name: 'john', birthdate: '1985-10-21' };

const john = buildPerson(obj);

console.log(john)