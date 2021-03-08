import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <nav className="heading">
      <h1>YOUR TV</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/programs">Programs</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/orders">Orders</Link>
      </div>
    </nav>
  );
}

export default Heading;
