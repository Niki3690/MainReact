import React, { useContext } from "react";
import { ProductsContext } from "./ProductContext";
import Banner from "./Banner";
import { CardContext } from "./CardContext";

const Products = () => {
  let { products } = useContext(ProductsContext);
  let { dispatch } = useContext(CardContext);
  let data = useContext(CardContext);
  console.log(products);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className="is-size-2 text-center font-bold text-[#000000]">
        Products
      </h2>

      <div className="niki">
        <div className="grid grid-cols-3 gap-10 p-3 m-3">
          {products.map((product) => (
            <div className="box">
              <br />
              <div key={product.id}>
                <center>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ height: 220, width: 300 }}
                  />
                </center>
                <h6
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: 12,
                  }}
                >
                  {product.name}
                </h6>
                <p style={{ textAlign: "center" }}>$:{product.price}</p>

                <center>
                  <button
                    className="button is-link mt-3 cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "ADD TO CART",
                        id: product.id,
                        product: product,
                      })
                    }
                    style={{ padding: "15px 100px 15px 100px" }}
                  >
                    Add To Cart
                  </button>
                </center>

                {product.status === "new" ? (
                  <h5
                    className="is-size-5 font-bold"
                    style={{
                      marginTop: -460,
                      backgroundColor: "red",
                      width: "45px",
                      marginLeft: -10,
                      paddingLeft: 12,
                      paddingRight: 55,
                    }}
                  >
                    New
                  </h5>
                ) : (
                  ""
                )}
                {product.status === "old" ? (
                  <h5 className="is-size-5 font-bold">Old</h5>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
