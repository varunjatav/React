import React, { useState , useMemo} from 'react'

const Input = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const qubeRoot = (num) => {
    console.log("Calculation done !");
    return Math.pow(num,3);
  }
  let result = useMemo(() => qubeRoot(number), [number]);
  return (
    <div>
        <h1>Input Memo</h1>
        <input type="number" placeholder='Enater a number'value={number} onChange={(e) => setNumber(e.target.value)}/>
        <h1>Qube root of this number is {result}</h1>
        <button onClick={() => setCount(count+1 )}>Count ++</button>
        <h1>Counter: {count}</h1>
    </div>
  )
}

export default Input