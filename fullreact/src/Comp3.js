import React, { useContext } from "react";
import {data,data1} from "./App"

const Comp3 = () => {

    let name=useContext(data);
    let gender=useContext(data1);
    

  return (
    <>
    {name}
    {gender}
    </>
  )
};

export default Comp3;
