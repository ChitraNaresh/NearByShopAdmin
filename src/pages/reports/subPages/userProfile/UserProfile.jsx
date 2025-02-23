import { useState } from "react";
import Navbar from "../../../../components/navbar/Navbar";
import Sidebar from "../../../../components/sidebar/Sidebar";
import UserDetailsCard from "../../../../components/userDetailsCard/UserDetailsCard";
import "./userProfile.scss";
import ReportDetails from "./components/reportDetails/ReportDetails";
import BlockPopup from "./components/blockPopup/BlockPopup";

const Reports = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <BlockPopup setShowPopup={setShowPopup} />}
      <div className="main-page">
        <Sidebar />
        <div className="report-user-page-main">
          <Navbar type="reports" isSearch={false} />
          <div className="report-user-page">
            <div className="first-action-card">
              <h3>Seller Account</h3>
              <div className="action-btns-card">
                <button>Ignore</button>
                <button onClick={() => setShowPopup((prev) => !prev)}>
                  Block
                </button>
              </div>
            </div>
            <UserDetailsCard
              isScannerRequired={false}
              isShareProfile={false}
              showMessage={false}
            />
            <div className="reported-users-list">
              <div className="tabs-card">
                {[1, 2, 3, 4, 5].map((item) => (
                  <button
                    onClick={() => setActiveTab(item)}
                    className={item === activeTab ? "active-tab" : ""}
                  >
                    {"Reported " + item}
                  </button>
                ))}
              </div>
              <ReportDetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
