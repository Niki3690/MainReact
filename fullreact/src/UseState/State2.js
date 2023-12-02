import React, { useState } from "react";

const State2 = () => {
  let [brand, setBrand] = useState("VERNA");
  let [color, setColor] = useState("BLACK");
  let [model, setModel] = useState("LATEST");
  let [year, setYear] = useState("2010");
  return (
    <div>
      <h1>MY car Model is {brand}</h1>

      <p>
        It is a {color} color and that model is {model} from last {year}.
      </p>
    </div>
  );
};

export default State2;
