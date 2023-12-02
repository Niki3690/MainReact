import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="section">
        <div className="continer" style={{ marginTop: -25 }}>
          <nav
            className="navbar shadow-xl rounded-2xl"
            role="navigation"
            aria-label="main navigation"
            style={{ padding: "12px 25px 12px 25px" }}
          >
            <div className="navbar-brand">
              <img
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026"
                width="55"
                style={{ height: 45 }}
              />

              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a
                  className="navbar-item"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  Home
                </a>
              </div>

              <div className="navbar-end">
                <a
                  className="navbar-item"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  Post
                </a>
                <a
                  className="navbar-item"
                  style={{ fontWeight: 600, fontSize: 20 }}
                >
                  Treading
                </a>
                <div>
                  <div
                    className="field"
                    style={{ width: 150, marginTop: 5, marginRight: 15 }}
                  >
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        placeholder="Search.."
                        style={{ borderRadius: 50 }}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
