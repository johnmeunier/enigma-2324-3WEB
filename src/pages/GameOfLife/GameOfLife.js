import useGameOfLife from "../../hooks/useGameOfLife";

export const GameOfLife = () => {
  const { grid, setGrid, step } = useGameOfLife({ gridSize: 20 });

  return (
    <>
      <h2>Game of life</h2>
      <button onClick={() => step(grid)}>Next Step</button>
      <table>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>
                <button
                  onClick={() =>
                    setGrid((grid) => {
                      let newGrid = structuredClone(grid);
                      newGrid[i][j] = !newGrid[i][j];
                      return newGrid;
                    })
                  }
                >
                  {" "}
                  {cell ? "❤️" : "💀"}{" "}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};
