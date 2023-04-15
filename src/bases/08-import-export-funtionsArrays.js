import heroes from '../data/heroes';

export const getHeroeById = (id) => heroes.find(x => x.id === id);

export const getHeroeByOwner = (owner) => heroes.filter(x => x.owner === owner);