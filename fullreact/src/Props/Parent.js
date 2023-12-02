import React from "react";
import Child from "./Child";

const Parent = () => {
  let color = "Blue";
  return (
    <div>
      <Child name="Niki PAtel" color={color} />
    </div>
  );
};

export default Parent;
