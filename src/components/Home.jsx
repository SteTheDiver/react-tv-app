import React, { useContext, useState } from "react";
import { OrdersContext } from "../OrdersContext";
import Selection from "./Selection";
import Form from "./Form";
// import Confirmation from "./components/Confirmation";

function Home() {
  const [cart, setCart] = useContext(OrdersContext);

  const addToCart = (bundle, program) => {
    setCart([...cart, bundle, program]);
  };

  const selectionTotal = cart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  return (
    <div>
      <Form onAdd={addToCart} />
      <main>
        <h2>Your selection:</h2>
        {console.log("cart", cart)}
        <p>Total: {selectionTotal} $</p>
        {/* Map through the array to display the selected package */}
        <div className="program">
          {cart &&
            cart.length > 0 &&
            cart.map((selection) => (
              <Selection
                key={selection.index}
                id={selection.id}
                name={selection.name}
                image={selection.image}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
