import React from "react";
import "./navbar.scss";
import searchIcon from "../../assets/searchIcon.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ type = "Nill", isSearch = true, children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let navBarHeaderName;
  switch (type) {
    case "home":
      navBarHeaderName = "Home";
      break;
    case "seller":
      navBarHeaderName = "Seller";
      break;
    case "customer":
      navBarHeaderName = "Customer";
      break;
    case "sub-admin":
      navBarHeaderName = "Sub Admin";
      break;
    case "sub-admin-profile":
      navBarHeaderName = "Sub Admin Profile";
      break;
    case "discounts":
      navBarHeaderName = "Discounts";
      break;
    case "payments":
      navBarHeaderName = "Payments";
      break;
    case "reports":
      navBarHeaderName = "Reports";
      break;
    case "requests":
      navBarHeaderName = "Requests";
      break;
    case "block-lists":
      navBarHeaderName = "Block List";
      break;
    case "packages":
      navBarHeaderName = "Packages";
      break;
    case "seller-account":
      navBarHeaderName = "Seller Account";
      break;
    case "seller-account":
      navBarHeaderName = "Seller Account";
      break;
      case "categories":
      navBarHeaderName = "Categories";
      break;
    default:
      navBarHeaderName = null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  const allTabsPaths = [
    "/",
    "/sellers",
    "/customers",
    "/sub-admin",
    "/discounts",
    "/payments",
    "/reports",
    "/requests",
    "/block-lists",
  ];

  const noBackIcon = () => {
    return !allTabsPaths.includes(pathname);
  };

  return (
    <div className="navbar">
      <div className="nav-header-text">
        {noBackIcon() && <img src={arrowLeft} alt="" onClick={handleBack} />}
        <h3>{navBarHeaderName}</h3>
      </div>

      {isSearch && (
        <div className="search-card">
          <input className="search" placeholder="Search here..." />
          <img src={searchIcon} alt="" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Navbar;
