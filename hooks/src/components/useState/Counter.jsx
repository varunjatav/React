import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  };
  const decrement = () => {
    setCount((pre) => pre - 1);
    setCount((pre) => pre - 1);
    setCount((pre) => pre - 1);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Counter</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
