import React from "react";
import "./singleUserCard.scss";

const SingleUserCard = ({ data }) => {
  return (
    <div className="single-user-card">
      <div className="user-profile"></div>
      <div className="user-details">
        <div className="user-details-div">
          <p className="name">{data?.userName.length > 18
            ? data?.userName.slice(0, 18) + "..."
            : data?.userName}</p>
          <p className="time">{data?.time}</p>
        </div>
        <p>
          {data?.messageText.length > 25
            ? data?.messageText.slice(0, 25) + "..."
            : data?.messageText}
        </p>
      </div>
    </div>
  );
};

export default SingleUserCard;
