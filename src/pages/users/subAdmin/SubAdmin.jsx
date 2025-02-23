import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./subAdmin.scss";
import Navbar from "../../../components/navbar/Navbar";
import SubAdminTable from "./subAdminTable/SubAdminTable";
import SubAdminCreate from "./subAdminCreate/subAdminCreate";

const Customers = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };
  return (
    <>
      {showPopup && <SubAdminCreate handlePopup={handlePopup} />}
      <div className="main-page">
        <Sidebar />
        <div className="sub-admin-page-main">
          <Navbar type="sub-admin" />
          <div className="sub-admin-page">
            <div className="create-sub-admin-btn-card">
              <button onClick={handlePopup}>Create Sub Admin+</button>
            </div>
            <div className="table-card">
              <SubAdminTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
