import { useState } from "react";

export default function GridSquare({ value, row, col, setGridCharacter }) {
  const [status, setStatus] = useState('red');
  
  const handleMouseDown = (event) => {
    setStatus(status === "red" ? "blue" : "red");

    setGridCharacter(row, col, '');
  }




  return (
    <div style={{backgroundColor: value, flex: 1}} onMouseDown={handleMouseDown}>
    </div>
  )
}