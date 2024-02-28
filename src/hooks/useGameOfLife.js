import { useEffect, useState } from "react";

const generateGrid = (size) =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => Math.random() > 0.5));

const getNextState = (isAlive, numberOfAliveNeighbours) =>
  !isAlive ? numberOfAliveNeighbours === 3 : numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3;

const isOutOfBound = ({ length }, { x, y }) => x < 0 || y < 0 || x >= length || y >= length;

const countAliveNeighbours = (grid, { x, y }) =>
  [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
    [x + 1, y],
    [x + 1, y - 1],
    [x, y - 1],
  ].filter(([i, j]) => !isOutOfBound(grid, { x: i, y: j }) && grid[i][j]).length;

const useGameOfLife = ({ gridSize }) => {
  const [newGrid, setGrid] = useState(generateGrid(gridSize));

  const step = (grid) => {
    let newGrid = structuredClone(grid);
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        newGrid[i][j] = getNextState(grid[i][j], countAliveNeighbours(grid, { x: i, y: j }));
      }
    }
    setGrid(newGrid);
  };

  return { grid: newGrid, setGrid, step };
};

export default useGameOfLife;
