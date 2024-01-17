import { useState, useEffect } from 'react';

import './App.css';

const generateGrid = (size) => Array.from({ length: size }, () => Array.from({ length: size }, () => Math.random() > 0.5))

const getNextState = (isAlive, numberOfAliveNeighbours) => !isAlive 
  ? numberOfAliveNeighbours === 3
  : numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3

const isOutOfBound = ({length}, {x, y}) => x < 0 || y < 0 || x >= length || y >= length;

const countAliveNeighbours = (grid, {x, y}) => [
  [x - 1, y - 1],
  [x - 1, y],
  [x - 1, y + 1],
  [x, y + 1],
  [x + 1, y + 1],
  [x + 1, y],
  [x + 1, y - 1],
  [x, y - 1]
].filter(([i, j]) => !isOutOfBound(grid, {x : i, y: j}) && grid[i][j]).length;

const step = grid => { 
  let newGrid = structuredClone(grid);
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid.length; j++){
      newGrid[i][j] = getNextState(grid[i][j], countAliveNeighbours(grid, {x : i, y: j}))
    }
  }
  return newGrid;
};

function App() {
  const initialGridSize = 20
  const [gridSize, setGridSize] = useState(initialGridSize);
  const [pokemons, setPokemons] = useState({});
  const [grid, setGrid] = useState(generateGrid(initialGridSize));
  const [play, setPlay] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const promiseGetAllPokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
      const getAllPokemonsJSON = await promiseGetAllPokemons.json();
      setPokemons(getAllPokemonsJSON);
    }
    fetchData();
  }, []);

  useEffect(() => {    
    setGrid(generateGrid(gridSize))
  }, [gridSize]);

  const playHandler = () => {
    if(!play){
      const idInt = setInterval(() => {
        setGrid(grid => step(grid))
      }, 100);
      setPlay(idInt);
    } else {
      clearInterval(play);
      setPlay(null);
    }
  }

  return (
    <div className="App">
      <h2>Game of life</h2>
      <h3>Grid size : {gridSize}</h3>
      <input type="number" name="gridSize" value={gridSize} id="" onChange={(e) => setGridSize(e.target.value)}/>
      <button onClick={() => setGrid(grid => step(grid))}>Next Step</button>
      <button onClick={playHandler}>{play ? "Pause": "Play"}</button>
      <table>
        {grid.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}><button onClick={() => setGrid(grid => {
            let newGrid = structuredClone(grid);
            newGrid[i][j] = !newGrid[i][j]
            return newGrid;
          })}
        > {cell ? "❤️" : "💀"} </button></td>)}</tr>)}
      </table>
      <h2>Pokemon</h2>
      <h3>Compteur : {pokemons.results?.length}</h3>
    </div>
  );
}

export default App;
