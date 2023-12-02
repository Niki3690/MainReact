import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <ul style={{ display: "flex" }}>
        <li>
          <Link to="/">Header</Link>
        </li>

        <li>
          <Link to="/home">Home</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
