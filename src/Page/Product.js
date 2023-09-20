import React, { useState } from "react";
import Leftbar from "../component/Leftbar";
import "./Product.css";
import Rightbar from "./Rightbar";
import Navbar from "./Navbar";
const Product = () => {
  const [data, setData] = useState([]);
  const fetchProduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        console.log(result);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="common">
        <Leftbar />
        <div className="Product">
          <button onClick={fetchProduct}>Get products</button>
          {data.map((item, index) => {
            return (
              <div className="productCategory" key={index}>
                <p className="ProductCategory">{item.category}</p>
                <img className="productImage" src={item.image} />
              </div>
            );
          })}
        </div>
        <Rightbar />
      </div>
    </div>
  );
};

export default Product;
