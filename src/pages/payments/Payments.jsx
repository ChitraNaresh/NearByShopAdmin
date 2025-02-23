import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./payments.scss";
import Navbar from "../../components/navbar/Navbar";
import PaymentsTable from "./paymentsTable/PaymentsTable";
import Dropdown from "../../components/global/dropdown/Dropdown";

const tabsList = ["Verified", "Unverified"];

const Payments = () => {
  const [activeTab, setActiveTab] = useState("Verified");
  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="payments-page-main">
        <Navbar type="payments" />
        <div className="payments-page">
          <div className="top-header">
            <div className="tabs-buttons">
              {tabsList.map((item) => {
                return (
                  <button
                    onClick={() => handleTabs(item)}
                    className={activeTab === item ? "active-tab" : ""}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="filter-dropdowns">
              <Dropdown />
              <Dropdown />
              <Dropdown />
              <Dropdown />
            </div>
          </div>
          <div className="table-card">
            <PaymentsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
