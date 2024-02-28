import { useContext } from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../../hooks/usePokemon";
import { ThemeContext } from "../../context/themeContext";

const Pokemon = () => {
  const { name } = useParams();
  const { pokemon, error } = usePokemon(name);
  const [theme, setTheme] = useContext(ThemeContext);

  return error ? (
    error
  ) : pokemon ? (
    <>
      <h2>{name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
      {theme}
    </>
  ) : (
    "Chargement en cours"
  );
};

export default Pokemon;
