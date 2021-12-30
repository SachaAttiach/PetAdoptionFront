import React from "react";
import Dashboard from "./Dashboard";
import "../styles/Menu.css";
import dogLanding from "../assets/landing.gif";
import german from "../assets/german.gif";
import bamba from "../assets/bamba.gif";
import bullie from "../assets/bullie.gif";
import labrador from "../assets/labrador.gif";

function Admin() {
  return (
    <>
      <div className="admin-message">
        <h1>Welcome to the Admin Page!</h1>
      </div>
      <div className="addpet-main-container">
        <Dashboard />
        <div className="petvid-container">
          <div
            style={{ backgroundImage: `url(${bamba})` }}
            className="petvid1"
          ></div>
          <div
            style={{ backgroundImage: `url(${german})` }}
            className="petvid2"
          ></div>
        </div>
        <div className="petvid-container2">
          <div
            style={{ backgroundImage: `url(${bullie})` }}
            className="petvid3"
          ></div>
          <div
            style={{ backgroundImage: `url(${labrador})` }}
            className="petvid4"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Admin;
