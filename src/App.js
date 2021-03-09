import React from "react";
import Heading from "./components/Heading";
import Orders from "./pages/Orders";
import Home from "./components/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <>
        <Heading />
        <Switch>
          <Route component={About} exact path="/about" />
          <Route component={Orders} exact path="/orders" />
          <Route component={Home} path="/" />
        </Switch>
      </>
    </Router>
  );
}
