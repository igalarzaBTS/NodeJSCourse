import { SaveFile } from './save-file.use-case';
import fs, { rmSync } from 'fs';

describe('SaveFileUseCase',()=> {

  const customOptions = {
    fileContent: 'custom content',
    fileDestination: 'custom-outputs/file-destination',
    fileName: 'custom-table-name'
  }
  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    if (fs.existsSync('outputs')) fs.rmSync("outputs", {recursive: true});
    if (fs.existsSync(customFilePath)) fs.rmSync(customFilePath, {recursive: true});
  })

  test('should save file with default values', () => {
    const options = {
      fileContent: 'test content'
    }

    const saveFile = new SaveFile();
    const defaultFilePath = "outputs/table.txt";
    const result = saveFile.execute(options);
    expect(result).toBeTruthy(); // Valida que el proceso finalizo con exito
    
    const fileExists = fs.existsSync(defaultFilePath);
    const fileContent = fs.readFileSync(defaultFilePath, {encoding: 'utf-8'});
    expect(fileExists).toBe(true); // Valida que el archivo exista
    expect(fileContent).toBe(options.fileContent); // Valida el contenido del archivo

  });

  test('should save file with custom values', () => {

    const saveFile = new SaveFile();
    const result = saveFile.execute(customOptions);
    
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, {encoding: 'utf-8'});

    expect(result).toBeTruthy(); // Valida que el proceso finalizo con exito
    expect(fileExists).toBe(true); // Valida que el archivo exista
    expect(fileContent).toBe(customOptions.fileContent); // Valida el contenido del archivo

  });

  test('should return false if directory could not be created', () => {

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing'); }
    );
    const result = saveFile.execute(customOptions);
    expect(result).toBeFalsy(); 

    mkdirSpy.mockRestore();
  });

  test('should return false if file could not be created', () => {

    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('This is a custom writing error message from testing'); }
    );
    const result = saveFile.execute(customOptions);

    expect(result).toBeFalsy();
    writeFileSpy.mockRestore();
  });



});