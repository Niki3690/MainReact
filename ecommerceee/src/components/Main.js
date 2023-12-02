import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PakExpress from "./PakExpress";
// import Banner from "./Banner";
import ProductsContextProvider from "./ProductContext";
import Products from "./Products";
import Card from "./Card";
import NotFound from "./NotFound";
import CardContextProvider from "./CardContext";
const Main = () => {
  return (
    <div>
      <CardContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<PakExpress />} />
            {/* <Route path="/" element={<Banner />} /> */}
            <Route path="/" element={<Products />} />
            <Route path="/card" element={<Card />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
      </CardContextProvider>
    </div>
  );
};

export default Main;
