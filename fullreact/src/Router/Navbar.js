import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nnn flex gap-4 mt-12 text-xl font-bold ml-96">
        <Link
          to=""
          className="hover:underline-offset-8 hover:underline decoration-2 hover:scale-75 "
        >
          Home
        </Link>
        <Link
          to="login"
          className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
        >
          Login
        </Link>
        <Link
          to="profile"
          className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
        >
          Profile
        </Link>
        <Link
          to="vlog"
          className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
        >
          Vlog
        </Link>

        {/* <Link
          to="user/user"
          className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
        >
          User
        </Link>

        <Link
          to="user/customer"
          className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
        >
          Customer
        </Link> */}
      </div>

      <Link
        to="/login"
        className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
      >
        <button
          className="button is-warning"
          style={{
            marginLeft: 955,
            border: "1px solid black",
            marginTop: -25,
            marginRight: 12,
            fontWeight: 700,
            fontSize: 17,
          }}
        >
          Login
        </button>
      </Link>

      <Link
        to="/"
        className="hover:underline-offset-8 hover:underline decoration-2  hover:scale-75"
      >
        <button
          className="button is-warning"
          style={{
            border: "1px solid black",
            marginTop: -25,
            fontWeight: 700,
            fontSize: 17,
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
