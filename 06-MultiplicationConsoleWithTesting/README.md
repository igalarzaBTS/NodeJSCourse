# Testing

## Ciclo de vida del testing
Los test tienen un ciclo de vida que pueden ser controlados desde el <b>describe</b>. Algunos de estos metodos son: 

- ```afterEach(() => { // Code })```
- ```beforeEach(() => { // Code })```

## SpyOn
Este metodo nos permite mockear respuestas para realizar test. 

```
  test('should return false if directory could not be created', () => {

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing'); }
    );
    const result = saveFile.execute(customOptions);
    expect(result).toBeFalsy(); 

    mkdirSpy.mockRestore();
  });
```