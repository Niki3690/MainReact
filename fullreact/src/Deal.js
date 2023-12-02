import React from "react";
import "./Deal.css";
import { DealData } from "./DealData";

const Deal = () => {
  return (
    <div className="ll">
      {DealData.map((prop) => (
        <div className="kkk">
          <div className="fff">
            <div>
              <img src={prop.img} style={{ height: 100 }}></img>
            </div>

            <div>
              <div style={{marginTop:15}}>{prop.title}</div>

              <div className="price">
                <div className="new" style={{ color: "red" }}>
                  ${prop.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deal;
