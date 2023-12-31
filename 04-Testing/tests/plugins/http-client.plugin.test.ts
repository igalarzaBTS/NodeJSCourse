import { get } from 'http';
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';


describe(`plugins/http-client.plugin`, () => {
  test('httpClientPlugin.get() should return a string', async() => {
    const data = await httpClientPlugin.get(`https://jsonplaceholder.typicode.com/todos/1`);

    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    });
  });

  test(`httpClientPlugin.get() should have GET, POST, PUT and DELETE methods`, ()=> {

    const getMethod = httpClientPlugin.get
    const postMethod = httpClientPlugin.post
    const putMethod = httpClientPlugin.put
    const deleteMethod = httpClientPlugin.delete

    expect(typeof getMethod).toBe("function")
    expect(typeof postMethod).toBe("function")
    expect(typeof putMethod).toBe("function")
    expect(typeof deleteMethod).toBe("function")

  });

});