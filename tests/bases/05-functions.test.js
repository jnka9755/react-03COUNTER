import { getActiveUser, getUser } from "../../src/bases/05-functions";

describe('Pruebas en 05-functions', () => { 

    test('getUser', () => { 

        const testUser = {
            uid:'ABC123',
            userName: 'JnKa9755'
        }

        const user = getUser();

        expect( testUser ).toStrictEqual( user );
     });

     test('getActiveUser', () => { 
        
        const name = 'Juan'

        const userActive = getActiveUser(name);

        expect(userActive).toStrictEqual({
            uid: 'ABC123',
            userName: name            
        });
      });
 });