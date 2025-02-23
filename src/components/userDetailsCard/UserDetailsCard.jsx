import React from "react";
import "./userDetailsCard.scss";
import usersGroupIcon from "../../assets/usersGroupIcon.svg";
import scannerIcon from "../../assets/scannerIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";

const UserDetailsCard = ({
  isScannerRequired = true,
  isShareProfile = true,
  showMessage = true,
}) => {
  return (
    <div className="user-details-card">
      <div className="user-profile-pic"></div>
      <div className="user-details">
        {showMessage && (
          <p className="main-reason-text">
            Reason : <span>Mis-commination with customers and chat </span>{" "}
            (blocked for 3 months)
          </p>
        )}
        <div className="sub-details">
          <div className="left-details">
            <h3>Mobile Traders</h3>
            <div className="user-basic-details">
              <p>
                Name : <span>Naresh</span>
              </p>
              <p>
                Mobile No : <span>8639215761</span>
              </p>
              <div className="followers-card">
                <img src={usersGroupIcon} alt="" />{" "}
                <p>
                  20K <span>(Followers)</span>
                </p>
              </div>
            </div>
          </div>
          {isScannerRequired && isShareProfile && (
            <div className="right-details">
              <div className="icon-card">
                <p>Website Scanner</p>
                <img src={scannerIcon} alt="" />
              </div>
              <div className="icon-card">
                <p>Share Profile</p>
                <img src={shareIcon} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
