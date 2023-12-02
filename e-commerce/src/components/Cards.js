import React, { useState } from "react";
import Cardsdata from "./CardsData";

const Cards = () => {
  let [data, setData] = useState(Cardsdata);
  console.log(data);

  return data.map((element, id) => {
    return (
      <>
        <br />
        <h3 className="is-size-3 has-text-centered has-text-weight-bold">
          Add To Cart Products
        </h3>
        <br />
        <div className="grid grid-cols-3 ml-14">
          {data.map((element, id) => (
            <div key={id} className="box" style={{ width: 345 }}>
              <div>
                <img
                  src={element.imgdata}
                  alt=""
                  style={{ width: 345, height: 200 }}
                />
              </div>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                Name:
                <p
                  style={{
                    fontWeight: 400,
                    marginLeft: 70,
                    marginTop: -24,
                    fontSize: 15,
                  }}
                >
                  {element.rname}
                </p>
              </p>

              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginTop: 0,
                  marginLeft: 5,
                }}
              >
                Price:{" "}
                <p
                  style={{
                    fontWeight: 400,
                    marginLeft: 70,
                    marginTop: -24,
                    fontSize: 15,
                  }}
                >
                  ₹ {element.price}
                </p>
              </p>
              <div>
                <button className="button is-link mt-4 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  });
};
export default Cards;
