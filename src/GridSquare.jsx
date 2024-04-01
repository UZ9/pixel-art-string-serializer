import { useState } from "react";

export default function GridSquare({ value}) {
  const [status, setStatus] = useState('red');
  
  const handleMouseDown = (event) => {
    setStatus(status === "red" ? "blue" : "red");
  }

  return (
    <div style={{backgroundColor: status, flex: 1}} onMouseDown={handleMouseDown}>
      <span >{value}</span>
    </div>
  )
}