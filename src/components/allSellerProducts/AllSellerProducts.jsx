import React from "react";
import "./allSellerProducts.scss";
import SingleProduct from "../global/singleProduct/SingleProduct";
import filterIcon from "../../assets/filterIcon.svg";
import searchIcon from "../../assets/searchBlue.svg";

const AllSellerProducts = () => {
  return (
    <div className="all-seller-products">
      <h3 className="card-heading">Products</h3>
      <div className="filter-card">
        <img src={searchIcon} alt="" height={20}/>
        <input type="text" placeholder="Search products..."/>
        <img src={filterIcon} alt="" className="filter"/>
      </div>
      <div className="all-products">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23,
        ].map((item) => (
          <SingleProduct />
        ))}
      </div>
    </div>
  );
};

export default AllSellerProducts;
