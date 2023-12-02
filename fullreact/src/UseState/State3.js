import React, { useState } from "react";

const State3 = () => {
  let [car, setCar] = useState({
    brand: "Verna",
    model: "2005",
    Year: "2020",
    color: "Black",
  });
  return (
    <div>
      <h1>MY car Model is {car.brand}</h1>

      <p>
        It is a {car.color} color and that model is {car.model} from last{" "}
        {car.Year}.
      </p>
    </div>
  );
};

export default State3;
