import React from "react";
import { Link } from "react-router-dom";

const NAV = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 25 }}>
        <Link to="/" style={{ paddingRight: 25 }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
};

export default NAV;
