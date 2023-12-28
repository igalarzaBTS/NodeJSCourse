import { getAge } from '../../src/plugins/get-age.plugin';

describe(`plugins/get-age.plugin`, () => {

  test(`getAge() should return the age of a person`, () => {

    const birthday = `1985-10-21`;
    const age = getAge(birthday);

    expect(typeof age).toBe(`number`);

  });

  test(`getAge() should return current age`, () => {

    const birthday = `1985-10-21`;
    const age = getAge(birthday);
    const calculatedAge = new Date().getFullYear() - new Date(birthday).getFullYear();

    expect(age).toBe(calculatedAge);

  });

  test(`getAge() should return 0 years`, () => {

    // spyOn nos permite mockear data
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

    const birthday = `1985-10-21`;
    const age = getAge(birthday);
    expect(age).toBe(0); // 0 por que estamos comparano entre 1985 y 1995
    expect(spy).toHaveBeenCalled(); // Valida que el spy fue llamado.
  });

});
