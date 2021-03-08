import React from "react";
import Heading from "./components/Heading";
import Orders from "./components/Orders";
import Home from "./components/Home";
import Packages from "./pages/Packages";
import Programs from "./pages/Programs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default function App() {
  // const [cart, setCart] = useState([]);
  // const [page, setPage] = useState(PAGE_HOME);

  // const navigateTo = (nextPage) => {
  //   setPage(nextPage);
  // };

  // add the the elements to the array.
  // function addItem(program, bundle) {
  //   setCart((prevItems) => {
  //     return [...prevItems, program, bundle];
  //   });
  // }

  return (
    <Router>
      <>
        <Heading />
        <Switch>
          <Route component={Packages} exact path="/packages" />
          <Route component={Programs} exact path="/programs" />
          <Route component={Orders} exact path="/orders" />
          <Route component={Home} path="/" />
        </Switch>
      </>
    </Router>
  );
}

{
  /* <Cart cart={cart} setCart={setCart} />
{page === PAGE_HOME && <Home cart={cart} setCart={setCart} />}
<div className="confirmation">
  <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart</button>
  {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
</div> */
}
