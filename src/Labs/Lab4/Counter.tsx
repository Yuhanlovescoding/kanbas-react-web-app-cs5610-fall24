import React, { useState } from "react";
import "./index.css";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        className="counter-btn up-btn">
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        className="counter-btn down-btn">
        Down
      </button>
<hr/></div>);}