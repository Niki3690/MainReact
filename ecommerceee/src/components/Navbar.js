import React from "react";
import { Link } from "react-router-dom";
// import Banner from "./Banner";
import Products from "./Products";

const Navbar = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3">
              <Link
                to="/"
                style={{ color: "#000000", fontWeight: 700, fontSize: 18 }}
              >
                PAKEXPRESS
              </Link>
            </div>

            <div className="column is-3">
              <Link
                to="/card"
                style={{ color: "#000000", fontWeight: 700, fontSize: 18 }}
              >
                CART
              </Link>
            </div>

            <div className="column is-3">
              <i
                className="fa-solid fa-cart-shopping text-4xl"
                style={{ color: "#000000" }}
              ></i>
            </div>
            <span
              style={{
                fontSize: 22,
                marginTop: "-12px",
                marginLeft: -310,
                marginTop: -16,
                color: "#000000",
                fontWeight: 700,
              }}
            >
              {15}
            </span>
          </div>
        </div>
      </div>
      {/* <Banner /> */}
    </div>
  );
};

export default Navbar;
