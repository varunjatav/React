import React, { useEffect, useRef, useState } from 'react'

const CounterRef = () => {
  const [count,setCount] = useState(0);
  const times = useRef(0);

useEffect(() => {
  times.current = times.current + 1;
})
  console.log(times.current);
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
      This page is rendered {times.current} times
      </h1>
    </div>
  )
}

export default CounterRef