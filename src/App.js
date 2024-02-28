import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import PokemonList from "./pages/Pokemon/List";
import PokemonDetails from "./pages/Pokemon/Details";
import { GameOfLife } from "./pages/GameOfLife";
import Root from "./pages/Root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<HomePage />} />
      <Route path="pokemon/" element={<PokemonList />} loader={() => ["toto", "tata"]} />
      <Route path="pokemon/:name" element={<PokemonDetails />} errorElement={<h2>Errror</h2>} />
      <Route path="game-of-life" element={<GameOfLife />} errorElement={<h2>Errror</h2>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
