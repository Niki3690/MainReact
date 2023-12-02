import React from "react";
import shopping from "./../Images/shopping.jpg";

const Banner = () => {
  return (
    <div>
      <div className="image">
        <img
          src={shopping}
          style={{ width: "290vh", height: "500px", marginTop: -40 }}
        />

        <div className="" style={{ marginLeft: 800, marginTop: -355 }}>
          <h2 className="is-size-2" style={{ fontWeight: 700 }}>
            Welcome for Shopping
          </h2>
          <h5 className="is-size-5" style={{ fontWeight: 400 }}>
            Enjoy online shopping with PakExpress.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
