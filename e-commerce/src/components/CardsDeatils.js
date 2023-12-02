import { green } from "@mui/material/colors";
import React from "react";

const CardsDeatils = () => {
  return (
    <>
      <h3
        className="is-size-3 has-text-centered has-text-weight-bold mt-7,"
        style={{ color: "#000000", marginTop: 30 }}
      >
        Products Deatil Page
      </h3>
      <div
        className="box shadow:xl shadow-2xl"
        style={{ width: 800, marginLeft: 200, marginTop: 70, height: 250 }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
              style={{ height: 200 }}
            ></img>
          </div>

          <div style={{ marginLeft: 18 }}>
            <p style={{ fontWeight: 700, fontSize: 20, color: "#000000" }}>
              Restaurant:
            </p>
            <p
              style={{
                marginLeft: 115,
                marginTop: -25,
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              Massala Theoryy
            </p>

            <p style={{ fontWeight: 700, fontSize: 20, color: "#000000" }}>
              Price:
            </p>
            <p
              style={{
                marginLeft: 60,
                marginTop: -25,
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              {" "}
              ₹ 350
            </p>
            <p style={{ fontWeight: 700, fontSize: 19, color: "#000000" }}>
              Dishes:
            </p>

            <p
              style={{
                marginLeft: 70,
                marginTop: -26,
                fontWeight: 500,
                marginBottom: 10,
              }}
            >
              North,Indian,Dal
            </p>

            <p style={{ fontWeight: 700, fontSize: 19, color: "#000000" }}>
              Total:
            </p>

            <p style={{ marginLeft: 60, marginTop: -23, fontWeight: 500 }}>
              ₹ 350
            </p>
          </div>

          <div style={{ marginLeft: 15 }}>
            <p style={{ fontWeight: 700, fontSize: 19, color: "#000000" }}>
              Rating:
            </p>

            <p
              style={{
                marginLeft: 70,
                marginTop: -23,
                fontWeight: 500,
                backgroundColor: "green",
                width: 50,
                textAlign: "center",
                borderRadius: 8,
                color: "white",
                marginBottom: 30,
              }}
            >
              3.8
              <i
                class="fa-solid fa-star"
                style={{ marginLeft: 5, fontSize: 9 }}
              ></i>
            </p>

            <p style={{ fontWeight: 700, fontSize: 18, color: "#000000" }}>
              Order Review:
            </p>

            <p
              style={{
                marginTop: -23,
                fontWeight: 500,
                marginLeft: 135,
                marginBottom: 15,
              }}
            >
              Lorem, ipsum dolor.
            </p>

            <p style={{ fontWeight: 700, fontSize: 18, color: "#000000" }}>
              Remove:
            </p>

            <p
              style={{
                marginTop: -25,
                fontWeight: 500,
                marginLeft: 83,
                color: "red",
              }}
            >
              <i class="fa fa-trash"></i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsDeatils;
