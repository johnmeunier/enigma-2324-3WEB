import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GameOfLife } from "./GameOfLife";
import { Pokemon, PokemonDetails } from "./Pokemon";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1> Error </h1>,
    children: [
      {
        path: "/",
        element: <h2>Home</h2>,
      },
      {
        path: "game-of-life",
        element: <GameOfLife />,
      },
      {
        path: "pokemon",
        element: <Pokemon />,
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetails />,
      },
    ],
  },
]);

export const Router = <RouterProvider router={router} />;
