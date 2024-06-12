import React, { useRef } from 'react'

const InputReference = () => {
    const inputRef = useRef();

    

    const handleChange = () => {
        const input = inputRef.current.value;
        // input.style.color = "blue";
        console.log(input);
    }
  return (
    <div>
        <input type="text" placeholder='Enter' ref={inputRef} />
        <button onClick={handleChange}>Click</button>
    </div>
  )
}

export default InputReference