import { getGreeting } from "../../src/bases/02-template-string";

describe('Pruebas en 02-template-string', () => { 
    
    test('getGreeting', () => { 

        const name = 'Juan Camilo';
        const message = getGreeting(name);

        expect(message).toBe(`Hola ${name}`);
     });
 });