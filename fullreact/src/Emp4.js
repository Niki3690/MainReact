import React, { useContext } from "react";
import { Note } from "./App";

const Emp4 = () => {
  let value = useContext(Note);

  return <div>{value}</div>;
};

export default Emp4;
