import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import Vlog from "./Vlog";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";
import User from "./User";

const Main = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-4 font-bold tracking-wider">
        Router Pages
      </h1>
      <hr></hr>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/user/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
