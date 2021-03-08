import React, { useState } from "react";

export const OrdersContext = React.createContext();

export const OrdersProvider = (props) => {
  const [cart, setCart] = useState([]);
  return (
    <OrdersContext.Provider value={[cart, setCart]}>
      {props.children}
    </OrdersContext.Provider>
  );
};
