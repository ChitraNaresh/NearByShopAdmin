import React from "react";
import "./blockPopup.scss";
import Dropdown from "../../../../../../components/global/dropdown/Dropdown";
import cancelIcon from "../../../../../../assets/cancelRed.svg";

const BlockPopup = ({ setShowPopup }) => {
  return (
    <div className="block-popup">
      <div className="popup-card">
      <img
        src={cancelIcon}
        alt=""
        onClick={() => setShowPopup((prev) => !prev)}
        className="cancel-image"
      />
        <h3>Do you to want block?</h3>
        <div className="dropdowns-card">
          <div className="dropdown-div">
            <p>Reason</p>
            <Dropdown />
          </div>
          <div className="dropdown-div">
            <p>Duration</p>
            <Dropdown />
          </div>
        </div>
        <div className="btn-card">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlockPopup;
