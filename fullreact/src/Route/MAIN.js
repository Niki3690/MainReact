import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HOME from "./HOME";
import ABOUT from "./ABOUT";
import NAV from "./NAV";

const MAIN = () => {
  return (
    <>
      <BrowserRouter>
        <NAV />
        <Routes>
          <Route path="/" element={<HOME />} />
          <Route path="/about" element={<ABOUT />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MAIN;
