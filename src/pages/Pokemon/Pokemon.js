import { useState, useEffect } from 'react';
import { modifySearchParam } from './Pokemon.pure';


export const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [limit, setLimit] = useState(10);
  const [urlToFetch, setUrlToFetch] = useState(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit}`);

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(urlToFetch);
      const getAllPokemonsJSON = await promiseGetAllPokemons.json();
      setPreviousUrl(getAllPokemonsJSON.previous);
      setNextUrl(getAllPokemonsJSON.next);
      setPokemons(getAllPokemonsJSON.results);
    }
    fetchData();
  }, [urlToFetch]);

  useEffect(() => {
    setUrlToFetch(url => modifySearchParam(url, "limit", limit))
  }, [limit]);

  return <>
    <h2>Pokemon</h2>
    <select name="limit" id="limit" onChange={(e) => setLimit(e.target.value)}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <h3>Compteur : {pokemons.length}</h3>
    {pokemons.length > 0
    ? 
      <>
      <ol>
        {pokemons.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ol>
      {
        previousUrl && <button onClick={() => setUrlToFetch(previousUrl)}>Précédent</button>
      }
      {
        nextUrl && <button onClick={() => setUrlToFetch(nextUrl)}>Suivant</button>
      }
      </>
    : "Chargement en cours"}
    
  </>
}