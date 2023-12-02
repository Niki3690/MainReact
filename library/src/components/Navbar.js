import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Navbar = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-1">
              <Link to="/">HOME</Link>
            </div>

            <div className="column is-1">
              <Link to="/about">ABOUT</Link>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;
