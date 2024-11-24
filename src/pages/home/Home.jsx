import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="home-page-main">
        <Navbar />
        <div className="home-page">Home</div>
      </div>
    </div>
  );
};

export default Home;
