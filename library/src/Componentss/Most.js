import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Most = () => {
  let [search, setSearch] = useState("");
  let searchBook = (evt) => {
    if (evt.key === "Enter") {
      console.log("hello");
    }
  };
  return (
    <div style={{ backgroundColor: "#6E4528", height: "150vh" }}>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <img
                src="https://thumbs.dreamstime.com/b/librarybooksladder-187789396.jpg"
                className="w-[1100vh]"
                style={{
                  borderRadius: "100%",
                  height: "550px",
                  marginLeft: "-50px",
                  marginTop: "-35px",
                  border: "3px solid wheat",
                }}
              />

              <h3
                className="is-size-3 text-white"
                style={{
                  marginTop: "-320px",
                  fontWeight: 700,
                  marginLeft: "",
                }}
              >
                A Room Without books is like <br /> a body without a soul.
              </h3>
            </div>
            <div className="column is-6">
              <h3 className="is-size-3 font-bold text-white text-center ">
                Find Your Book
              </h3>
              <br /> <br />
              <center>
                <input
                  className="input is-large"
                  placeholder="find book here.."
                  style={{ width: "250px" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={searchBook}
                />
                <button className="button is -warning  is-large">Search</button>
              </center>
              <br />
              <br />
              <br />
              <img
                src="https://www.transparentpng.com/thumb/reading/kQzt2U-singing-with-students-songs-teach.png"
                style={{ marginLeft: "55px" }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="grid grid-cols-4 gap-14">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Most;
