import HomePage from "../pages/Homepage";
import PokemonList from "../pages/Pokemon/List";
import PokemonDetails from "../pages/Pokemon/Details";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {} from "react-router-dom";

export default () =>
  createBrowserRouter(
    createRoutesFromElements(
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pokemon/" element={<PokemonList />} />
        <Route path="pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    )
  );
