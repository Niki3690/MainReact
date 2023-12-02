import React, { createContext, useReducer } from "react";
import { CardReducer } from "./CardReducer";

export let CardContext = createContext();

let CardContextProvider = (props) => {
  let [cart, dispatch] = useReducer(CardReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <>
      <CardContext.Provider value={{ ...cart, dispatch }}>
        {props.children}
      </CardContext.Provider>
    </>
  );
};

export default CardContextProvider;
