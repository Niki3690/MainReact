import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./../Comp/Home";
import Detail from "./../Comp/Detail";
import Cart from "./../Comp/Cart";

const Main = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Detail />} />
        <Route path="/" element={<Cart />} />
      </Router>
    </BrowserRouter>
  );
};

export default Main;
