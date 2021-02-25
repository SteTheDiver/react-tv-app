import React, { useState } from "react";
import Heading from "./components/Heading";
import Selection from "./components/Selection";
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  // add the the elements to the array.
  function addItem(program, bundle) {
    setCart((prevItems) => {
      return [...prevItems, program, bundle];
    });
  }

  const selectionTotal = cart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  return (
    <div className="App">
      <Heading />
      <Form onAdd={addItem} />
      <main>
        <h2>Your selection:</h2>
        <p>Total: {selectionTotal} $</p>
        {/* Map through the array to display the selected package */}
        <div className="program">
          {cart.map((selection) => (
            <Selection
              key={selection.index}
              id={selection.id}
              name={selection.name}
              image={selection.image}
            />
          ))}
        </div>
      </main>
      <ul className="legend">
        <h4>Tarif 3: 2 Comedy, 1 Kids</h4>
        <h4>Tarif 7: 4 Comedy, 2 Sport, 1 Kids</h4>
      </ul>
      <div className="confirmation">
        <Confirmation price={selectionTotal} />
      </div>
    </div>
  );
}
