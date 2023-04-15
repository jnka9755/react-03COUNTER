import { getArray } from "../../src/bases/07-destructuring-arrays";

describe('Pruebas en 07-destructuring-arrays', () => { 

    test('getArray', () => { 

        const [ letters, numbers ] = getArray();

        expect( letters ).toBe ( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
     });
 });