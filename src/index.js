import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GameOfLife } from "./pages/GameOfLife";
import { Pokemon, PokemonDetails } from "./pages/Pokemon";

import { worker } from "./mocks/browser";

import App from "./App";
import "./index.css";

worker.start();

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
