import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./sellers.scss";
import Navbar from "../../../components/navbar/Navbar";
import SellersTable from "./sellersTable/SellersTable";
import Dropdown from "../../../components/global/dropdown/Dropdown";
import Loader from "../../../components/global/loader/Loader";

const tabsList = ["Verified", "Unverified"];

const Customers = () => {
  const [activeTab, setActiveTab] = useState("Verified");
  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="sellers-page-main">
        <Navbar type="seller" />
        <div className="sellers-page">
          <div className="top-header">
            <div className="tabs-buttons">
              {tabsList.map((item) => {
                return (
                  <button
                    onClick={()=>handleTabs(item)}
                    className={activeTab === item ? "active-tab" : ""}
                  >
                    {item}
                  </button>
                );
              })}
              {/* <Loader/> */}
            </div>
            <div className="filter-dropdowns">
              <Dropdown />
              <Dropdown />
              <Dropdown />
              <Dropdown />
            </div>
          </div>
          <div className="table-card">
            <SellersTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
