import { getPokemonById } from '../../src/js-foundation/06-promises';


describe('s-foundation/06-promises', ()=> {
  test(`getPokemonById should return a pokemon`, async() => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe(`bulbasaur`);
  });

  test(`should return an error if pokemon doesn't exist`, async() => {
    const pokemonId = 100000000000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy(); // Nunca se ejecuta por que esperamos un error para validar el catch
    } catch (error) {
      expect(error).toEqual(`Pokemon not found with id ${pokemonId}`);
    }
  });


});