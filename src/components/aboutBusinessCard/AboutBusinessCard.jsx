import React from "react";
import "./aboutBusinessCard.scss";
import BusinessVideo from "../global/businessVideo/BusinessVideo";
import youtubeIcon from "../../assets/youtubeIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";

const AboutBusinessCard = () => {
  return (
    <div className="about-business-card">
      <h3 className="card-heading">About Business</h3>
      <div className="details-card">
        <BusinessVideo />
        <div className="social-media-links">
          <div>
            <img src={locationIcon} alt="" />
            <p>14-1-140, Madhapur, Ayappa socity, Hyderabad.</p>
          </div>
          <div>
            <img src={youtubeIcon} alt="" />
            <p>YouTube Channel</p>
          </div>
          <div>
            <img src={youtubeIcon} alt="" />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBusinessCard;
