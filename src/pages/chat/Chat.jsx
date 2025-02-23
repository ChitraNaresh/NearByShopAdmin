import React from "react";
import "./chat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import arrowLeft from "../../assets/arrowLeft.svg";
import searchBlue from "../../assets/searchBlue.svg";
import SingleUserCard from "./components/singleUserCard/SingleUserCard";
import emojiIcon from "../../assets/emojiIcon.svg";
import sendIcon from "../../assets/sendIcon.svg";
import { useNavigate } from "react-router-dom";

const users = [
  {
    userUrl: "",
    userName: "Alice",
    time: "10:30 AM",
    isSee: true,
    messageText: "Let's meet tomorrow at noon.",
  },
  {
    userUrl: "",
    userName: "Bob",
    time: "11:15 AM",
    isSee: false,
    messageText: "Did you complete the project?",
  },
  {
    userUrl: "",
    userName: "Charlie",
    time: "9:45 AM",
    isSee: true,
    messageText: "Happy Birthday! Have a great day!",
  },
  {
    userUrl: "",
    userName: "Diana",
    time: "Yesterday",
    isSee: false,
    messageText: "Are you coming to the party tonight?",
  },
  {
    userUrl: "",
    userName: "Eve",
    time: "7:00 AM",
    isSee: true,
    messageText: "Good morning! How are you?",
  },
  {
    userUrl: "",
    userName: "Frank",
    time: "5:20 PM",
    isSee: false,
    messageText: "Let's catch up over coffee.",
  },
  {
    userUrl: "",
    userName: "Grace",
    time: "10:00 PM",
    isSee: true,
    messageText: "Can you send me the files?",
  },
  {
    userUrl: "",
    userName: "Hank",
    time: "8:15 AM",
    isSee: false,
    messageText: "I'll call you later today.",
  },
  {
    userUrl: "",
    userName: "Ivy",
    time: "3:30 PM",
    isSee: true,
    messageText: "Thanks for the update!",
  },
  {
    userUrl: "",
    userName: "Jake",
    time: "Yesterday",
    isSee: false,
    messageText: "Don't forget the meeting tomorrow.",
  },
  {
    userUrl: "",
    userName: "Karen",
    time: "4:50 PM",
    isSee: true,
    messageText: "Can you share the recipe with me?",
  },
  {
    userUrl: "",
    userName: "Leo",
    time: "6:00 PM",
    isSee: false,
    messageText: "I’ll be there in 10 minutes.",
  },
  {
    userUrl: "",
    userName: "Mona",
    time: "1:45 PM",
    isSee: true,
    messageText: "Great job on the presentation!",
  },
  {
    userUrl: "",
    userName: "Nathan",
    time: "12:30 PM",
    isSee: false,
    messageText: "Where are you right now?",
  },
  {
    userUrl: "",
    userName: "Olivia",
    time: "Yesterday",
    isSee: true,
    messageText: "Call me when you're free.",
  },
  {
    userUrl: "",
    userName: "Peter",
    time: "2:00 PM",
    isSee: false,
    messageText: "Can we reschedule our meeting?",
  },
  {
    userUrl: "",
    userName: "Quinn",
    time: "9:10 AM",
    isSee: true,
    messageText: "Thank you for your help!",
  },
  {
    userUrl: "",
    userName: "Rachel",
    time: "11:50 AM",
    isSee: false,
    messageText: "I'm on my way now.",
  },
  {
    userUrl: "",
    userName: "Steve",
    time: "10:15 PM",
    isSee: true,
    messageText: "Looking forward to our trip!",
  },
  {
    userUrl: "",
    userName: "Tina",
    time: "5:00 PM",
    isSee: false,
    messageText: "Let’s go for a walk this evening.",
  },
];

const SingleSeller = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <Sidebar />
      <div className="chat-page-main">
        <div className="all-users-card">
          <div className="card-header-left">
            <img src={arrowLeft} alt="" onClick={() => navigate(-1)} />
            <h3>Chats</h3>
          </div>
          <div className="search-card">
            <img src={searchBlue} alt="" />
            <input type="input" placeholder="Search users..." />
          </div>
          <div className="all-left-users">
            {users.map((item, index) => (
              <SingleUserCard key={index} data={item} />
            ))}
          </div>
        </div>
        <div className="chat-card">
          <div className="right-user-top">
            <div className="user-profile-card"></div>
            <h3>Virat Kohli</h3>
          </div>
          <div className="chat-complete-details">3</div>
          <div className="text-enter-card">
            <img src={emojiIcon} alt="" />
            <input placeholder="Type a message..."></input>
            <img src={sendIcon} alt="" className="send-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSeller;
