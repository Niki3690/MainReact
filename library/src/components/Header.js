import React from "react";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <>
      <div className="niki">
        <div className="section">
          <div className="container">
           
                <h2
                  className="is-size-2 font-bold text-white text-center "
                  style={{ marginTop: "245px" }}
                >
                  Find your book of choice.
                </h2>

                <br />

                <p className="text-center text-xl text-white font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, obcaecati est tenetur doloremque asperiores
                  eveniet aperiam magnam illum dignissimos officiis voluptas
                  quos ex corrupti ab officia accusamus sint maxime laboriosam
                  placeat? Pariatur vel obcaecati est tenetur doloremque
                  asperiores eveniet aperiam
                </p>

                <SearchForm/>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default Header;
