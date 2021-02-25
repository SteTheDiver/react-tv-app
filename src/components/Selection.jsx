import React from "react";

function Selection(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} />
    </div>
  );
}

export default Selection;
