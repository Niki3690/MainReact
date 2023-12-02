import React from "react";
import { QuotesData } from "./QuotesData";

const Quotes = () => {
  return (
    <div className="nnnnn">
      {QuotesData.map((item) => (
        <div
          className="box"
          style={{
            backgroundColor: "plum",
            color: "black",
            border: "4px solid black",
            fontSize: 20,
            borderRadius: "60px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          <div style={{ textAlign: "center", fontSize: 25, fontWeight: 800 }}>
            {item.id}
          </div>
          <hr />
          <div>{item.quote}</div>
          <div>{item.author}</div>
        </div>
      ))}
    </div>
  );
};

export default Quotes;
