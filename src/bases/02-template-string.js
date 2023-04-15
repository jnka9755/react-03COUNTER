export function getGreeting (name){
    return 'Hola ' + name ;
}

const name = 'Juan';

console.log(`Este es un saludo: ${ getGreeting(name) }`);