import { getPerson } from "../../src/bases/06-destructuring-objects";

describe('Pruebas en 06-destructuring-objects', () => { 

    test('getPerson', () => { 

        const testPerson = {
            name: 'Juan',
            lastName: 'Santana',
            age: 25,
            weight: 62
        }

        const person = getPerson(testPerson);

        expect( person ).toStrictEqual({
            fullName: `${testPerson.name} ${testPerson.lastName}`,
            years: testPerson.age,
            location: {
                lat: 12.12312,
                lng: -12.12312
            }
        });
     });
 });