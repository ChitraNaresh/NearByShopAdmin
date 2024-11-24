import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./customers.scss";
import Navbar from "../../../components/navbar/Navbar";
import CustomersTable from "./customersTable/CustomersTable";

const Customers = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="customers-page-main">
        <Navbar />
        <div className="customers-page">
          <div className="table-card">
            <CustomersTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
