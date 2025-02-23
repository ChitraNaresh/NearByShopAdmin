import React from "react";
import "./reportDetails.scss";

const chat=[
  { user: "User One", message: "Hey, how are you?", timestamp: "09:00" },
  { user: "User Two", message: "I’m good! How about you?", timestamp: "09:01" },
  {
    user: "User One",
    message: "I’m doing well. Did you finish the task?",
    timestamp: "09:02",
  },
  {
    user: "User Two",
    message: "Yes, it’s done and submitted.",
    timestamp: "09:03",
  },
  {
    user: "User One",
    message: "Great! Let’s plan the next steps.",
    timestamp: "09:04",
  },
  {
    user: "User Two",
    message: "Sure, let’s discuss in today’s meeting.",
    timestamp: "09:05",
  },
  {
    user: "User One",
    message: "Sounds good. See you there!",
    timestamp: "09:06",
  },
  { user: "User Two", message: "See you!", timestamp: "09:07" },
  {
    user: "User One",
    message: "By the way, check your email for the updated document.",
    timestamp: "09:08",
  },
  { user: "User Two", message: "Got it. Thanks!", timestamp: "09:09" },
];

const ReportDetails = () => {
  return (
    <div className="report-details">
      <div className="user-name-card">
        <div className="user-pic"></div>
        <h3>Vivek Santar</h3>
      </div>
      <div className="chat-details">
        {chat.map((item) => (
          <div className={`single-chat-message ${item.user === "User One" ? "left-align" : "right-align"}`}>
            <p>{item.message}</p>
            <span className="time-stamp">{item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportDetails;
