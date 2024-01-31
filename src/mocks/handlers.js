import { HttpResponse, http } from 'msw';
 
import data from './fixtures/getPokemonAll.json';

export const handlers = {
    getPokemon : http.get('https://pokeapi.co/api/v2/pokemon', () => HttpResponse.json(data)),
}