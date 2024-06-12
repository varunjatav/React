import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [count,setCount] = useState(0);
  const [times, setTimes] = useState(0);

useEffect(() => {
  setTimes((pre) => pre+1)
},[count]);
const increment = () => {
  setCount((pre) => pre + 1);
};
const decrement = () => {
  setCount((pre) => pre - 1);
};
  return (
    <div>
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
      <h1>
        This page rendered {times} times
      </h1>
    </div>
  )
}

export default CounterEffect