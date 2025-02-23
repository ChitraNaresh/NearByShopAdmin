import React from "react";
import "./singleProduct.scss";
import location from "../../../assets/locationIcon.svg";

const SingleProduct = () => {
  return (
    <div className="single-product">
      <div className="product-image"></div>
      <div className="product-details">
        <h3 className="product-name">iPhone</h3>
        <div className="prices-card">
          <p className="discount-price">₹90,999</p>
          <p className="actual-price">₹97,999</p>
          <p className="offer-percentage">10% OFF</p>
        </div>
        <div className="location-card">
          <img src={location} alt="" />
          <p>Ayyappa colony, Madhapur</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
