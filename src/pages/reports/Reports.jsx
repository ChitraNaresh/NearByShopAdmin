import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./reports.scss";
import Navbar from "../../components/navbar/Navbar";
import ReportsTable from "./reportsTable/ReportsTable";

const tabsList = ["Customer", "Seller", "Solved"];

const Reports = () => {
  const [activeTab, setActiveTab] = useState("Customer");
  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="reports-page-main">
        <Navbar type="reports" />
        <div className="reports-page">
          <div className="tabs-buttons">
            {tabsList.map((item) => (
              <button
                onClick={() => handleTabs(item)}
                className={activeTab === item ? "active-tab" : ""}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="table-card">
            <ReportsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
