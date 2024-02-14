import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

export default () => {
  const [error, setError] = useState(null);
  const { name } = useParams();

  const pokemon = useLoaderData();

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
