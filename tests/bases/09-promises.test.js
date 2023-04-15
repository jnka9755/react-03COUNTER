import { getHeroeByIdAsync } from "../../src/bases/09-promises";

describe('Pruebas en 09-promises', () => { 
    test('getHeroeByIdAsync_Success', (done) => { 

        const testHeroId = 1;
        getHeroeByIdAsync( testHeroId )
        .then( heroe => {

            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
     });

     test('getHeroeByIdAsync_Undefinide', (done) => { 

        const testHeroId = 100;
        getHeroeByIdAsync( testHeroId )
        .catch (error => {

            expect( error ).toBe( `No se pudo encontrar el héroe ${testHeroId}` )
            done();
        });
     });
 });