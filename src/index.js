import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import { GameOfLife } from './pages/GameOfLife';
import { Pokemon } from './pages/Pokemon';
 
import { worker } from './mocks/browser';

import App from './App';
import './index.css';

worker.start();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="game-of-life">Game Of life</Link>
        <Link to="pokemon">Pokemon</Link>
      </div>
    ),
  },
  {
    path: "game-of-life",
    element: <GameOfLife />,
  },
  {
    path: "pokemon",
    element: <Pokemon />,
  },
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
