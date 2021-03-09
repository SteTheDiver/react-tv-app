import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";
import Confirmation from "../components/Confirmation";
import Button from "@material-ui/core/button";
import IconButton from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";

function Orders() {
  const [cart, setCart] = useContext(OrdersContext);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  let totalCost = cart.reduce((total, { price = 0 }) => total + price, 0);

  return (
    <div className="cart__container">
      <h1>Cart</h1>
      <div className="cart">
        {cart.map((product, i) => (
          <div className="orders" key={i}>
            {console.log("Home", cart)}
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <IconButton onClick={() => removeFromCart(product)}>
              <DeleteIcon fontSize="medium" />
            </IconButton>
          </div>
        ))}
        <h3 style={{ color: "black" }}>
          {totalCost == 0 ? null : "Total: $" + totalCost}
        </h3>
        <div className="btn__delete">
          {cart.length > 0 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={clearCart}
              startIcon={<DeleteIcon />}
            >
              Clear cart
            </Button>
          )}
        </div>
      </div>

      {cart.length > 0 ? <Confirmation /> : null}
    </div>
  );
}

export default Orders;
