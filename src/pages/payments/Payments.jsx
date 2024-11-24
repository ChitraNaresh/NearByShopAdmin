import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./payments.scss";
import Navbar from "../../components/navbar/Navbar";
import PaymentsTable from "./paymentsTable/PaymentsTable";

const Payments = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="payments-page-main">
        <Navbar />
        <div className="payments-page">
          <div className="table-card">
            <PaymentsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
