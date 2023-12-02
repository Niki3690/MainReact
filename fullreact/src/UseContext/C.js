import React, { useContext } from "react";
import { Data } from "../App";
import { Data1 } from "../App";
import { Data2 } from "../App";

const C = () => {
  let nn = useContext(Data);
  let nnn = useContext(Data1);
  let nnnn = useContext(Data2);
  return (
    <div
      style={{
        color: "red",
        fontWeight: 700,
        fontSize: 45,
        textAlign: "center",
        marginTop: 45,
      }}
    >
      <p>{nn}</p>
      <p style={{ color: "black", fontWeight: 800, fontFamily: "cursive" }}>
        {nnn}
      </p>
      <p>{nnnn}</p>
    </div>
  );
};

export default C;
