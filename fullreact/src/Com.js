import React from "react";
import { ComData } from "./ComData";

const Com = () => {
  return (
    <div className="ppp">
      {ComData.map((prop) => (
        <div className="mmmm">
          <p className="font-black text-2xl">{prop.id}</p>
          <hr style={{backgroundColor:"purple" }} />
          <p>
            <span className="font-bold text-xl">Name:</span> {prop.name}
          </p>
          <p>
            <span className="font-bold text-xl">Email:</span> {prop.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Com;
