import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./subAdmin.scss";
import Navbar from "../../../components/navbar/Navbar";
import SubAdminTable from "./subAdminTable/SubAdminTable";

const Customers = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="sub-admin-page-main">
        <Navbar />
        <div className="sub-admin-page">
          <div className="table-card">
            <SubAdminTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
