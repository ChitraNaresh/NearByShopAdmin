import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./sellers.scss";
import Navbar from "../../../components/navbar/Navbar";
import SellersTable from "./sellersTable/SellersTable";

const Customers = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="sellers-page-main">
        <Navbar />
        <div className="sellers-page">
          <div className="table-card">
            <SellersTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
