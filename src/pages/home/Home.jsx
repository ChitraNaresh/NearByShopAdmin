import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Linechart from "../../components/global/charts/linechart/Linechart";
import BarGraph from "../../components/global/charts/barGraph/BarGraph";
import Donutchart from "../../components/global/charts/donutchart/Donutchart";

const Home = () => {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="home-page-main">
        <Navbar type="home" />
        <div className="home-page">
          <div className="graphs-card">
            <div className="each-graph">
              <div className="header-card">
                <h3>No of Users</h3>
              </div>
              <div className="graph-card-div">
                <Linechart />
              </div>
            </div>
            <div className="each-graph">
              <div className="header-card">
                <h3>No of Users Registered</h3>
              </div>
              <div className="graph-card-div">
                <Donutchart />
              </div>
            </div>
            <div className="each-graph">
              <div className="header-card">
                <h3>Users by State</h3>
              </div>
              <div className="graph-card-div">
                <BarGraph />
              </div>
            </div>
            <div className="each-graph">
              <div className="header-card">
                <h3>Total Revenue</h3>
              </div>
              <div className="graph-card-div">
                <Linechart />
              </div>
            </div>
            <div className="each-graph">
              <div className="header-card">
                <h3>Packages</h3>
              </div>
              <div className="graph-card-div">
                <Donutchart />
              </div>
            </div>
            <div className="each-graph">
              <div className="header-card">
                <h3>Discounts</h3>
              </div>
              <div className="graph-card-div">
                <Linechart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
