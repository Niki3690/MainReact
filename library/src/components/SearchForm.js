import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  let { setSearchTerm, setResultTitle } = useGlobalContext();
  let searchText = useRef("");
  let navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  let handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      // setSearchTerm("the lost world");
      // setResultTitle("Please Enter Something ...");
    } else {
      // setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <p className="control has-icons-right">
                  <input
                    className="input is-link is-large"
                    type="text"
                    placeholder="The lost world.."
                    ref={searchText}
                    style={{ borderRadius: "50px" }}
                  />
                  <button
                    className="button hover:border-transparent"
                    onClick={handleSubmit}
                    style={{
                      marginLeft: "365px",
                      marginTop: "-55px",
                      fontSize: 22,
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    <span className="icon is-small is-right">
                      <i
                        className="fas fa-search"
                        style={{ color: "#502B5B" }}
                      ></i>
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
