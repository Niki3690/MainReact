import React from "react";

const Card = () => {
  return (
    <div>
      <div
        className="box border-4 border-black"
        style={{ backgroundColor: "#6E4528", borderRadius: "30px" }}
      >
        <center>
          <img
            src="https://mycustombookcover.com/wp-content/uploads/2018/02/ebook3.png"
            alt="Book"
            style={{ height: "150px", width: "260px", marginBottom: "5px" }}
          />
        </center>

        <h4
          className="is-size-4 font-bold text-center"
          style={{ color: "#000000" }}
        >
          ReactJs
        </h4>
        <p className="text-white text-center font-semibold text-xl border-2 border-white pt-2 pb-2 mt-2">
          ₹ 1290
        </p>
      </div>
    </div>
  );
};

export default Card;
