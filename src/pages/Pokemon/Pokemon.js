import { useState, useEffect } from 'react';

export const Pokemon = () => {
  const [pokemons, setPokemons] = useState({});
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const getAllPokemonsJSON = await promiseGetAllPokemons.json();
      setPokemons(getAllPokemonsJSON);
    }
    fetchData();
  }, [limit]);


  return <>
    <h2>Pokemon</h2>
    <select name="limit" id="limit" onChange={(e) => setLimit(e.target.value)}>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <h3>Compteur : {pokemons.results?.length}</h3>
    {pokemons.results 
    ? 
      <ol>
        {pokemons.results?.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ol> 
    : "Chargement en cours"}
        
  </>
}