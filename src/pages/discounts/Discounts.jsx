import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./discounts.scss";
import Navbar from "../../components/navbar/Navbar";
import DiscountTable from "./discountTable/DiscountTable";

const Discounts = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="discounts-page-main">
        <Navbar />
        <div className="discounts-page">
          <div className="table-card">
            <DiscountTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
