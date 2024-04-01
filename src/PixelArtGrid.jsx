import { useEffect } from "react";
import { useState } from "react";
import GridSquare from "./GridSquare";

export default function PixelArtGrid() {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const emptyGrid = [];

    for (let i = 0; i < 11; i++) {
      emptyGrid[i] = [];

      for (let j = 0; j < 11; j++) {
        emptyGrid[i][j] = "L";
      }
    }

    setGrid(emptyGrid);
  }, []);

  const generateString = () => {
    let output = "";

    console.log({grid});

    grid.forEach(row => {
      row.forEach(col => {
        output += col;
      })
    })

    return output;
  };

  return (
    <>
      {" "}
      <div className="grid">
        {grid.map((row, index) => {
          return (
            <>
              {grid[index].map((col) => {
                return <GridSquare value={col} key={row + col} />;
              })}
            </>
          );
        })}
      </div>
      <div>Generated Output: {generateString()}</div>
    </>
  );
}
