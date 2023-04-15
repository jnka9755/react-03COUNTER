import { getHeroeById, getHeroeByOwner } from "../../src/bases/08-import-export-funtionsArrays";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-import-export-funtionsArrays', () => { 

    test('getHeroeById', () => { 

        const testIdHero = 2;

        const hero = getHeroeById( testIdHero );

        expect( hero ).toEqual({ 
            id: 2, 
            name: 'Spiderman', 
            owner: 'Marvel'
        });
     });

     test('getHeroeByIdUndefine', () => { 

        const testIdHero = 100;

        const hero = getHeroeById( testIdHero );

        expect( hero ).toBeFalsy(); //Tambien evalua si es falso
     });

     test('getHeroeByOwnerDC', () => { 
        
        const testOwner = 'DC';

        const heroesTest = getHeroeByOwner(testOwner);

        expect( heroesTest.length ).toBe( 3 );
        expect( heroesTest ).toContainEqual({ id: 1, name: 'Batman', owner: 'DC' });
        expect( heroesTest ).toContainEqual({ id: 3, name: 'Superman', owner: 'DC' });
        expect( heroesTest ).toContainEqual({ id: 4, name: 'Flash', owner: 'DC' });

        expect( heroesTest ).toEqual( heroes.filter(x => x.owner === testOwner) )
      });

      test('getHeroeByOwnerMarvel', () => { 
        
        const testOwner = 'Marvel';

        const heroesTest = getHeroeByOwner(testOwner);

        expect( heroesTest.length ).toBe(2);
        expect( heroesTest ).toContainEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
        expect( heroesTest ).toContainEqual({ id: 5, name: 'Wolverine', owner: 'Marvel' });

        expect( heroesTest ).toEqual( heroes.filter(x => x.owner === testOwner) );
      });
 });