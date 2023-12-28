# Testing

## Teoria

- <b>Pruebas unitarias -> </b> Enfocadas en pequeñas funcionalidades

- <b>Pruebas de integración  -> </b> Enfocadas en cómo reaccionan varias piezas en conjunto

## Caracteristicas indispensables de las pruebas

1. Fáciles de escribir.
2. Fáciles de leer.
3. Confiables.
4. Rápidas.
5. Principalmente unitarias.

## Estados de las pruebas (AAA)

<b>AAA</b> -> Arrange - Act - Assert

### Estado inicial (Arrange)

- Inicializamos variables.
- Importaciones necesarias.

### Acciones (Act)

- Lllamar métodos.
- Simular clicks.
- Realizar acciones sobre el paso anterior.

### Observar el comporatamiento resultante (Assert)

- Validar los resultados

## Instalacion de Jest

1. Instalaciones de desarrollo (supertest es para probar Express)
```npm install -D jest @types/jest ts-jest supertest```

2. Crear archivo de configuración de Jest
```npx jest --init```

3. Configuraciones del archivo <b>Jest.config.ts</b>
```
preset: 'ts-jest',
testEnvironment: "jest-environment-node",

// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

4. Creación de scripts en el package.json:
```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

"include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts","**/*.test.ts"],



## Práctica

### Describe

<b>"describe"</b> nos permite agrupar tests y definir un detalle de todos los tests que agrupa. Este detalle nos ayudará en la organización y control de los tests a largo plazo.
Por lo general, el detalle del <b>describe</b> es el nombre de la clase o el path.

```
// El describe nos ayuda a agrupar los test y leerlos en la consola
describe("js-foundation/01-template.ts", () => {
  test('<Test 1detail>', ()=> {
    ...
  });

  test('<Test 2 detail>', ()=> {
    ...
  });
});
```
### Test
<b>"test"</b> nos permite definir el test deseado. Se compone de dos partes: la primera es el detalle, donde se define el comportamiento deseado, y la segunda es el cuerpo del test, donde se realizará la validación correspondiente.

```
import { emailTemplate } from '../../src/js-foundation/01-template';


// El describe nos ayuda a agrupar los test y leerlos en la consola

describe("js-foundation/01-template.ts", () => {
  test('emailTemplate should contain a greeting', ()=> {
    expect(emailTemplate).toContain('Hi, ');
  });

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  })
});

```

#### Validaciones de tests

La validación de los tests se basa en el uso del "expect(<-Some Value->)" validado por algún método de aserción:


| Metodo       | Detalle      |
| ------------ | ------------ |
| .toMatch(<-Valor esperado->) | Valida coincidencias parciales, por ejemplo, si una cadena contiene como subcadena el valor esperado.    |
| .toBe(<-Valor esperado->) | Valida la coincidencia de forma estricta; debe ser igual sin ningún tipo de variación.  |
| .toBeUndefined() | No existe valor definido, en otras palabras, es null. |
| .toStrictEqual(<-Valor esperado>) | Se utiliza para comparar si dos objetos son estrictamente iguales en términos de tipo y contenido. Esto significa que ambos objetos deben tener la misma estructura y valores, y deben ser del mismo tipo. |
| .toEqual(<-Objeto esperado->) | Verifica la igualdad de valores y también verifica que los objetos tengan las mismas propiedades y en el mismo orden. |


#### Testing callbacks

Usualmente, los tests para los callbacks son especiales. Los callbacks NO se ejecutan de forma sincrona, por lo tanto, las funciones que implementan callbacks se deben realizar con el parametro "done" que se encarga de esperar la respuesta del callback antes de finalizar el test. De no ser implementado el "done", todo test de un callback pasará sin problemas sin los metodos de assert del test no contemplan la respuesta del callback.

##### Callback - Error

```
describe('js-foundation/03-callbacks', ()=> {

  test('getUserById should return an error if user does not exist', (done) => {

    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();
    });
    
  });

});
```

##### Callback - Success

```
  test('getUserById should return John Doe', (done) => {

    const id = 1;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: id,
        name: `John Doe`
      });
      done();
    });
    
  });
```

##### Promise - Success

```
  test(`getPokemonById should return a pokemon`, async() => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe(`bulbasaur`);
  });
```

##### Promise - Error

```
  test(`should return an error if pokemon doesn't exist`, async() => {
    const pokemonId = 100000000000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy(); // Nunca se ejecuta por que esperamos un error para validar el catch
    } catch (error) {
      expect(error).toEqual(`Pokemon not found with id ${pokemonId}`);
    }
  });
```

#### SpyOn

El SpyOn nos permite mockear data para hacer pruebas especificas. En el siguiente ejemplo la libreria getAge hace uso de "getFullYear" para obtener el año actual, en este test mockeamos un año especifico para validar su funcionamiento.

```
  test(`getAge() should return 0 years`, () => {

    // spyOn nos permite mockear data
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthday = `1985-10-21`;
    const age = getAge(birthday);
    expect(age).toBe(0); // 0 por que estamos comparano entre 1985 y 1995
    expect(spy).toHaveBeenCalled(); // Valida que el spy fue llamado.
    console.log(spy)
  });
```



