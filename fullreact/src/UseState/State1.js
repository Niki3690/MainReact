import React, { useState } from "react";

const State1 = () => {
  // let click = () => {
  //   alert("niki");
  // };
  let [color, setColor] = useState("BLACK");

  return (
    <div>
      <h1>My Favourite color is {color} </h1>
      <br />
      <button
        className="button is-link"
        onClick={() => setColor("BLUEEEEEEEE")}
      >
        Click
      </button>
    </div>
  );
};

export default State1;
