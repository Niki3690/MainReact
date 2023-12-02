import React, { useState } from "react";
import Block from "./Block";

const Tic = () => {
  let [state, setState] = useState(Array(9).fill(null));
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="box" style={{ border: "2px solid black" }}>
                <div className="row">
                  <div style={{ display: "flex" }}>
                    <Block />
                    <Block />
                    <Block />
                  </div>

                  <div className="row">
                    <div style={{ display: "flex" }}>
                      <Block />
                      <Block />
                      <Block />
                    </div>

                    <div className="row">
                      <div style={{ display: "flex" }}>
                        <Block />
                        <Block />
                        <Block />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tic;
