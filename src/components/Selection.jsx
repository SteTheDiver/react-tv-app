import React from "react";

function Selection({ name, image }) {
  return (
    <div>
      <h3>{name}</h3>
      {image &&
        image.length > 0 &&
        image.map((i) => {
          return <img src={i} />;
        })}
    </div>
  );
}

export default Selection;
