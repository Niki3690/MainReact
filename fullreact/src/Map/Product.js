import React from "react";
import { ProductDatta } from "./ProductDatta";

const Product = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "600px 600px" }}>
      {ProductDatta.map((item) => (
        <>
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 20,
              border: "1px solid black",
              outline: "16px double black",
              paddingTop: 20,
              padding: 20,
              paddingBottom: 20,
              marginTop: 55,
              width: 450,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 35,
              backgroundColor: "palevioletred",
              color:"white"
            }}
          >
            <p style={{ fontSize: 30, fontWeight: 900 }}>{item.id}</p>
            <hr />
            <p style={{ fontWeight: 500, fontSize: 25 }}>{item.title}</p>
            <img
              src={item.thumbnailUrl}
              style={{ marginLeft: 125, marginTop: 25 }}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default Product;
