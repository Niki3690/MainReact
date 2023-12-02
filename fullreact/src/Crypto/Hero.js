import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div style={{ display: "grid", gridTemplateColumns: "800px 500px" }}>
          <div className="hero-body">
            <p className="title">Get Crypto Realted Knowledge.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
              id tempora totam quo eos accusantium dolor corporis dolorum ullam
              magni sint labore, ipsum deleniti, beatae tempore ipsa ipsam
              suscipit minima cupiditate a quisquam. Illo consequatur nesciunt
              ab? Quam impedit incidunt doloremque tempore aperiam repellendus
              sequi!
            </p>
            <br /> <br />
            <button
              className="button"
              style={{
                backgroundColor: "#F7931A",
                color: "white",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              Check Post
            </button>
          </div>

          <div className="hero-body" style={{ marginTop: -25 }}>
            <img
              src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=026"
              width="55"
              style={{ height: 200, width: 250 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
