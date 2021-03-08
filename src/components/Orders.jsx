import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";

function Orders() {
  const [cart, setCart] = useContext(OrdersContext);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const selectionTotal = cart.reduce(
    (total, { price = 0 }) => total + price,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product, i) => (
        <div className="product" key={i}>
          {console.log("Home", cart)}
          <h3>{product.name}</h3>
          <h4>${product.price}</h4>

          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
      {/* {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>} */}
      <div>Total Cost: ${selectionTotal}</div>
    </div>
  );
}

export default Orders;

{
  /* <div className="products">
  
</div> */
}

{
}
