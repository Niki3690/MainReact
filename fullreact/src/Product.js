import React from "react";
import { ProductsList } from "./ProductList";
import "./Product.css";

const Product = () => {
  return (
    <div className="class">
      {ProductsList.map((item) => (
        <div className="section" key={item.id}>
          <div className="container">
            <div
              className="box"
              style={{
                height: 400,
                backgroundColor: "black",
                outline: "6px solid lightcoral",
              }}
            >
              {/* <p>{item.id}</p> */}
              <div style={{ display: "flex", gap: 15 }}>
                <div>
                  <span>Title:</span>
                  <p>{item.title}</p>
                  <span>Price:</span>
                  <p>{item.price}</p>
                  {/* <p>{item.description}</p> */}
                  <span>Category:</span>
                  <p>{item.category}</p>
                  <span>Rating:</span>
                  <p>{item.rating.rate}</p>
                  <br />
                </div>

                <div>
                  <p style={{ height: 200, width: 200 }}>
                    <img
                      src={item.image}
                      style={{ height: 200, width: 400, marginTop: 145 }}
                    ></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
