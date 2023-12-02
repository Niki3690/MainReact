import React, { createContext, useState } from "react";
import camara from "./../Images/camera.webp";
import headphone from "./../Images/headphone.webp";
import iphone from "./../Images/Iphone.jpg";
import microphone from "./../Images/Microphone .jpg";
import perfume from "./../Images/perfumes.jpg";
import ring from "./../Images/Ring.jpg";
import shooes from "./../Images/shooe.webp";
import watch from "./../Images/watchh.jpg";

export let ProductsContext = createContext();

let ProductsContextProvider = (props) => {
  let [products] = useState([
    { id: 1, name: "camara", price: "1888", image: camara, status: "new" },
    {
      id: 2,
      name: "headphone",
      price: "5999",
      image: headphone,
      status: "old",
    },
    { id: 3, name: "iphone", price: "155999", image: iphone, status: "old" },
    {
      id: 4,
      name: "microphone",
      price: "2999",
      image: microphone,
      status: "new",
    },
    { id: 5, name: "perfume", price: "499", image: perfume, status: "new" },
    { id: 6, name: "ring", price: "8999", image: ring, status: "old" },
    { id: 7, name: "shooes", price: "9999", image: shooes, status: "new" },
    { id: 8, name: "watch", price: "16999", image: watch, status: "old" },
  ]);

  return (
    <>
      <ProductsContext.Provider value={{ products: [...products] }}>
        {props.children}
      </ProductsContext.Provider>
    </>
  );
};

export default ProductsContextProvider;
