import { useState, useEffect } from 'react';

export const Pokemon = () => {
  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
      const getAllPokemonsJSON = await promiseGetAllPokemons.json();
      setPokemons(getAllPokemonsJSON);
    }
    fetchData();
  }, []);

  const [pokemons, setPokemons] = useState({});

  return <>
    <h2>Pokemon</h2>
    <h3>Compteur : {pokemons.results?.length}</h3>
    {pokemons.results 
    ? 
      <ul>
        {pokemons.results?.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul> 
    : "Chargement en cours"}
        
  </>
}