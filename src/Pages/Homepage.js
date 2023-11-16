import React from "react";
import Products from "../Components/Products";

const Homepage = () => {
  return (
    <div>
      <h2 className="heading">Welcome to the RTK store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Homepage;
