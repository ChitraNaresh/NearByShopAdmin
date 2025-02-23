import React from "react";
import "./userProfile.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import UserDetailsCard from "../../../../components/userDetailsCard/UserDetailsCard";

const BlockLists = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="blocked-user-page-main">
        <Navbar type="seller-account" isSearch={false}>
          <div className="button-card">
            <button>Active</button>
          </div>
        </Navbar>
        <div className="blocked-user-page">
          <UserDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default BlockLists;
