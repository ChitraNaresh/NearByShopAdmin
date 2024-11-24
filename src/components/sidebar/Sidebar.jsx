import React from "react";
import "./sidebar.scss";
import logo from "../../assets/logo.svg";
import home from "../../assets/dashboard.svg";
import sellers from "../../assets/user.svg";
import customers from "../../assets/user.svg";
import subAdmin from "../../assets/user.svg";
import payments from "../../assets/payment.svg";
import discounts from "../../assets/discount.svg";
import requests from "../../assets/request.svg";
import reports from "../../assets/report.svg";
import blockLists from "../../assets/blockList.svg";
import logout from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const allTabs = [
  {
    name: "Home",
    pathName: "/",
    icon: home,
  },
  {
    name: "Sellers",
    pathName: "/sellers",
    icon: sellers,
  },
  {
    name: "Customers",
    pathName: "/customers",
    icon: customers,
  },
  {
    name: "Sub Admin",
    pathName: "/sub-admin",
    icon: subAdmin,
  },
  {
    name: "Discounts",
    pathName: "/discounts",
    icon: discounts,
  },
  {
    name: "Payments",
    pathName: "/payments",
    icon: payments,
  },
  {
    name: "Reports",
    pathName: "/reports",
    icon: reports,
  },
  {
    name: "Request",
    pathName: "/requests",
    icon: requests,
  },
  {
    name: "Blocked List",
    pathName: "/block-lists",
    icon: blockLists,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const handleTab = (pathName) => {
    navigate(pathName);
  };
  return (
    <div className="side-bar">
      <div className="logo-card">
        <img src={logo} alt="Logo" />
        <h3>Near By Shop</h3>
      </div>
      <nav className="side-navbar">
        {allTabs.map((tab) => (
          <div
            className="each-tab-card"
            onClick={() => handleTab(tab.pathName)}
          >
            <img src={tab.icon} alt="" />
            <p className="tab-name">{tab.name}</p>
          </div>
        ))}
        <div className="logout-card">
          <img src={logout} alt="" />
          <p>Logout</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
