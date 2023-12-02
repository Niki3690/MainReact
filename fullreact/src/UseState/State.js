import React, { useState } from "react";

const State = () => {
  let [color, setColor] = useState("BLACK");

  return (
    <div>
      <h1>My Favourite color is {color} </h1>
      <br />
    </div>
  );
};

export default State;
