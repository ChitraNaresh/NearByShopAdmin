import React from "react";
import "./allDiscountProducts.scss";
import DiscountProduct from "../discountProduct/DiscountProduct";

const AllDiscountProducts = () => {
  return (
    <div className="all-discount-products">
      <h3 className="card-heading">Discount Products</h3>
      <div className="discount-products-container">
        {[1, 2, 3, 4, 5].map((item) => (
          <DiscountProduct />
        ))}
      </div>
    </div>
  );
};

export default AllDiscountProducts;
