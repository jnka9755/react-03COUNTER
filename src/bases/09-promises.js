import { getHeroeById } from "./08-import-export-funtionsArrays";

export const getHeroeByIdAsync = ( id ) => {
    
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

            const heroe = getHeroeById( id );
            if(heroe)
                resolve(heroe);
            else
                reject( `No se pudo encontrar el héroe ${id}` );

        }, 1000);
    });
}