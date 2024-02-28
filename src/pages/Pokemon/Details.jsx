import { useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";

const Pokemon = () => {
  const { name } = useParams();
  const { pokemon, error } = usePokemon(name);

  return error ? (
    error
  ) : pokemon ? (
    <>
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
    </>
  ) : (
    "Chargement en cours"
  );
};

export default Pokemon;
