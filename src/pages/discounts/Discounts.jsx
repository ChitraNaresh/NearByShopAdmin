import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./discounts.scss";
import Navbar from "../../components/navbar/Navbar";
import DiscountTable from "./discountTable/DiscountTable";
import Dropdown from "../../components/global/dropdown/Dropdown";

const tabsList = ["Verified", "Unverified"];

const Discounts = () => {
  const [activeTab, setActiveTab] = useState("Verified");
  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="discounts-page-main">
        <Navbar type="discounts" />
        <div className="discounts-page">
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
            <DiscountTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
