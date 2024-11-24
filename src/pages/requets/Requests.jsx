import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./requets.scss";
import Navbar from "../../components/navbar/Navbar";
import RequestsTable from "./requestsTable/RequestsTable";

const Requests = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="requests-page-main">
        <Navbar />
        <div className="requests-page">
          <div className="table-card">
            <RequestsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
