import React from "react";
import { FakeAPi } from "./FakeApi";

const Fake = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          {FakeAPi.map((item) => (
            <div
              style={{ color: "#000000", fontWeight: 700 }}
              className="kkkkk"
            >
              <div style={{ textAlign: "center" }}>
                <span style={{ color: "purple" }}>Id:</span>
                {item.id}
              </div>
              <hr />
              <div>
                <span style={{ color: "purple" }}>Title:</span>
                {item.title}
              </div>
              <div>
                <span style={{ color: "purple" }}>Description:</span>
                {item.description}
              </div>
              <div>
                <span style={{ color: "purple" }}>Price:</span>
                {item.price}
              </div>
              <div>
                <span style={{ color: "purple" }}>Rating:</span>
                {item.rating}
              </div>
              <div>
                <span style={{ color: "purple" }}>Brand:</span>
                {item.brand}
              </div>
              <div>
                <span style={{ color: "purple" }}>Stock:</span>
                {item.stock}
              </div>
              <div>
                <span style={{ color: "purple" }}>Category:</span>
                {item.category}
              </div>
              <br />
              <br />
              <img
                src={item.thumbnail}
                style={{ height: 145, width: 500 }}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fake;
