import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      if (promiseGetAllPokemons.status === 404) {
        return;
      } else {
        const pokemonJSON = await promiseGetAllPokemons.json();
        setPokemon(pokemonJSON);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h2>Pokemon details</h2>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
    </>
  );
};
