import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";
import Selection from "./Selection";
import Form from "./Form";

function Home() {
  const [cart, setCart] = useContext(OrdersContext);

  const addToCart = (bundle, program) => {
    setCart([...cart, bundle, program]);
  };

  const newCart = cart.filter((item) => item !== "");

  const selectionTotal = newCart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  return (
    <div>
      <Form onAdd={addToCart} />
      <main>
        <h2>Your selection:</h2>
        {console.log("new cart", newCart)}
        <p>Total: {selectionTotal} $</p>
        {/* Map through the array to display the selected package */}
        <div className="programs__container">
          {newCart &&
            newCart.length > 0 &&
            newCart.map((selection) => (
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
