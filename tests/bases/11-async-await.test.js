import { getImagePromise } from "../../src/bases/11-async-await";

describe('Pruebas en 11-async-await', () => { 
    test('getImagePromise', async() => { 

        const url  = await getImagePromise();

        expect(typeof url).toBe('string');
     });
 });