import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div style={{ backgroundColor: "black", padding: 12, height: 75 }}>
        <ul
          style={{
            display: "flex",
            marginLeft: 120,
            color: "white",
            fontWeight: 700,
          }}
          className="header"
        >
          <Link to="/" style={{ color: "white" }}>
            <li style={{ paddingRight: "55px", paddingTop: 8 }}>Add to Cart</li>
          </Link>

          <Link to="/" style={{ color: "white" }}>
            <li style={{ paddingRight: "700px", paddingTop: 8 }}>Home</li>
          </Link>
          <li
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Link to="/">
              <i
                class="fa-solid fa-cart-shopping"
                style={{ fontSize: 30, marginTop: 15, color: "white" }}
              ></i>
              <div style={{ marginLeft: 10, marginTop: -60 }}>
                <span style={{ fontSize: 16, color: "white" }}>15</span>
              </div>
            </Link>
          </li>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <div>
              <div style={{ marginTop: -12 }}>
                <i
                  class="fa fa-remove"
                  onClick={handleClose}
                  style={{ marginLeft: 158, fontSize: 15, color: "red" }}
                ></i>
              </div>

              <p style={{ marginLeft: 13, width: 165 }}>Your cart is empty</p>
              <div style={{ marginTop: -35 }}>
                <i
                  class="fa-solid fa-cart-shopping"
                  style={{
                    fontSize: 13,
                    marginTop: 17,
                    color: "black",
                    marginLeft: 145,
                  }}
                ></i>
              </div>
            </div>
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem> */}
          </Menu>
        </ul>
      </div>
    </div>
  );
};

export default Header;
