import { useState, useEffect } from "react";

const usePokemon = (name) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!promiseGetAllPokemons.ok) {
        setError("Pokemon not found");
      } else {
        setError(null);
        const pokemon = await promiseGetAllPokemons.json();
        setPokemon(pokemon);
      }
    }
    fetchData();
  }, [name]);

  return { pokemon, error };
};

export default usePokemon;
