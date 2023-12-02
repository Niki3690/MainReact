import React, { useEffect } from "react";
import { useState } from "react";

const State = () => {
  let [count, setCount] = useState(0);
  let [load, setLoad] = useState(0);

  useEffect(() => {
    alert("HELLLO");
  });
  return (
    <>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>BUTTON</button>
    </>
  );
};

export default State;
