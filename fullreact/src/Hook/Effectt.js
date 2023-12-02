import React, { useEffect, useState } from "react";

const Effectt = () => {
  let [count, setCounter] = useState(0);

  useEffect(() => {
    console.log("i am here");
  }, []);

  function updateCount() {
    setCounter(count + 1);
  }

  return (
    <div>
      <br />
      <h1>Button clicked {count} times.</h1>
      <br />
      <buttton onClick={updateCount} className="button">
        Click
      </buttton>
    </div>
  );
};

export default Effectt;
