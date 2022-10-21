import React from 'react'
import { useState } from 'react'

export default function UseStae() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      console.log(previousState)
      return { ...previousState, color: "blue" }
    });
    // setCar(car.color==='blue' )
  }
  const updateRed = () => {
    setCar(previousState => {
      return { ...previousState, color: "red" }
    });
  }
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      {car.color === "red" ?(
        <button
        type="button"
        onClick={updateColor}
      >Blue</button>
      ):(
        <button
        type="button"
        onClick={updateRed}
        >red</button>
      )}

    </div>
  )
}
