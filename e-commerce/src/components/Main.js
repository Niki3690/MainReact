import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsDeatils from "./CardsDeatils";
import Cards from "./Cards";
import Store from "./Store";
import { Provider } from "react-redux";

const Main = () => {
  return (
    <div>
      <Provider Store={Store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cart" element={<CardsDeatils />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default Main;
