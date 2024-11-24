import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blockLists.scss";
import Navbar from "../../components/navbar/Navbar";
import BlocklistTable from "./blocklistTable/BlocklistTable";

const BlockLists = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="block-lists-page-main">
        <Navbar />
        <div className="block-lists-page">
          <div className="table-card">
            <BlocklistTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockLists;
