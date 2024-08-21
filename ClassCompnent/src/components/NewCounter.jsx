import React, { useEffect, useState } from 'react'
import styles from "./NewCounter.module.css";
const NewCounter = () => {
    const [count, setCount] = useState(0);

    
        const updateCounter = () => {
            setCount(prevCount => prevCount + 1);
            console.log("UpdateCounter");
        }
        const decrementCounter = () => {
            setCount(prevCount => prevCount - 1);
        }

   
  return (
    <div>
        <h1 className={styles.new_counter_heading}>New Counter</h1>
        <div className={styles.new_counter_container}>
        <button
         onClick={decrementCounter}
          
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={updateCounter}
          >
            +
          </button>
        </div>
    </div>
  )
}

export default NewCounter