import React from "react";
import { Link } from "react-router-dom";
import { product } from "../product.js";

const Products = () => {
  return (
    <div>
      <h2>Products</h2>

      {product.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>

          <img
            src={item.image}
            alt={item.title}
            width="200"
          />

          <p>{item.desc}</p>

          <Link to={`/product/${item.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
