import React, { useContext } from "react";
import { OrdersContext } from "../OrdersContext";
import { Link } from "react-router-dom";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";

function Heading() {
  const [cart, setCart] = useContext(OrdersContext);

  return (
    <nav className="heading">
      <h1>YOUR TV</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/orders">
          <ShoppingCartSharpIcon fontSize="small" />
          Orders ( {cart.length == 0 ? 0 : cart.length} )
        </Link>
      </div>
    </nav>
  );
}

export default Heading;
