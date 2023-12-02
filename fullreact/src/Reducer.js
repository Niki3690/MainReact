import React, { useReducer } from "react";
import { useEffect, useState } from "react";

let reducer = (State, action) => {
  switch (action.type) {
  }
};
const Reducer = () => {
  let [count, setCount] = useState(0);
  let [hidden, setHidden] = useState(false);

  let [state, dispatch] = useReducer(() => {}, { count: 0, hidden: false });
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45,
      }}
    >
      <h1></h1>

      <button
        className="button is-warning"
        onClick={() => setCount(count + 1)}
        style={{ marginRight: 45, fontWeight: 700, color: "white" }}
      >
        INCREMENT
      </button>
      <button
        className="button is-primary"
        onClick={() => setCount(count - 1)}
        style={{ marginRight: 45, fontWeight: 700 }}
      >
        DECREMENT
      </button>

      <button
        className="button is-link"
        onClick={() => setHidden(!hidden)}
        style={{ fontWeight: 700 }}
      >
        Hide
      </button>
      <br />
      <br />
      <br />

      {hidden ? (
        <h1 style={{ fontSize: 25, fontWeight: 700 }}>Hidden</h1>
      ) : (
        <h1 style={{ fontSize: 25, fontWeight: 700 }}>Not Hidden</h1>
      )}
    </div>
  );
};

export default Reducer;
