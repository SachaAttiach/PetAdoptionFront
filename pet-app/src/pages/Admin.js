import React from "react";
import Dashboard from "./Dashboard";
import "../styles/Menu.css";

function Admin() {
  return (
    <div>
      <div className="addpet-main-container">
        <Dashboard />
        <h1>
          Welcome to the admin page, this is where you get super cool priveleges
        </h1>
      </div>
    </div>
  );
}

export default Admin;
