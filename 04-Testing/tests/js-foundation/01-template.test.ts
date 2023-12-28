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
