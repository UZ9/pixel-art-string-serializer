import { useEffect } from "react";
import { useState } from "react";
import GridSquare from "./GridSquare";

const availableColors = ["red", "green", "blue", "black", "white"];

export default function PixelArtGrid() {
  const [grid, setGrid] = useState([]);
  const [currentColor, setCurrentColor] = useState("blue");

  useEffect(() => {
    console.log("triggered useffect");
    const emptyGrid = [];

    for (let i = 0; i < 11; i++) {
      emptyGrid[i] = [];

      for (let j = 0; j < 11; j++) {
        emptyGrid[i][j] = "red";
      }
    }

    setGrid(emptyGrid);
  }, []);

  const setGridCharacter = (row, col, newValue) => {
    let tempGrid = [...grid];

    tempGrid[row][col] = currentColor;

    setGrid(tempGrid);
  };

  const generateString = () => {
    let output = "";

    console.log({ grid });

    grid.forEach((row) => {
      row.forEach((col) => {
        output += col;
      });
    });

    return output;
  };

  console.log({ availableColors });

  return (
    <>
      <div style={{ margin: "2rem" }}>
        {availableColors.map((color) => (
          <button
            key={color}
            style={{ margin: "0rem 1rem 0rem 0rem", backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          >
            {color}
          </button>
        ))}
      </div>

      <div className="grid">
        {grid.map((row, rowIndex) => {
          return (
            <>
              {grid[rowIndex].map((col, colIndex) => {
                return (
                  <GridSquare
                    setGridCharacter={setGridCharacter}
                    row={rowIndex}
                    col={colIndex}
                    value={grid[rowIndex][colIndex]}
                    key={rowIndex * 1000 + colIndex}
                  />
                );
              })}
            </>
          );
        })}
      </div>
      <div>Generated Output: {generateString()}</div>
    </>
  );
}
