import React from 'react'
import { useState } from "react";
const CarState = () => {
    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Roma",
        color: "red",
        year: "2013",
      });
    
      const handleChange = () => {
        setCar((prevSate) => {
          return { ...prevSate, color: "black" };
        });
      };
    
      return (
        <div style={{ textAlign: "center" }}>
          <h1>My favourite car is {car.brand}</h1>
          <h2>
            It is a {car.color} {car.model} from {car.year}
          </h2>
          <button onClick={handleChange}>black</button>
        </div>
      );
}

export default CarState