import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./reports.scss";
import Navbar from "../../components/navbar/Navbar";
import ReportsTable from "./reportsTable/ReportsTable";

const Reports = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="reports-page-main">
        <Navbar />
        <div className="reports-page">
          <div className="table-card">
            <ReportsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
