import React, { useEffect, useState } from "react";

const Effect = () => {
  let [state, setState] = useState(0);

  useEffect(() => {
    alert("I AM");
  }, []);
  return (
    <>
      {state}
      <button
        className="button"
        onClick={() => {
          setState(state + 1);
        }}
      >
        CLick
      </button>
    </>
  );
};

export default Effect;
