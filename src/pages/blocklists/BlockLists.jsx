import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blockLists.scss";
import Navbar from "../../components/navbar/Navbar";
import BlocklistTable from "./blocklistTable/BlocklistTable";

const tabsList = ["Customer", "Seller"];

const BlockLists = () => {
  const [activeTab, setActiveTab] = useState("Customer");
  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="block-lists-page-main">
        <Navbar type="block-lists"/>
        <div className="block-lists-page">
          <div className="tabs-buttons">
            {tabsList.map((item) => (
              <button  onClick={() => handleTabs(item)}
              className={activeTab === item ? "active-tab" : ""}>{item}</button>
            ))}
          </div>
          <div className="table-card">
            <BlocklistTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLists;
