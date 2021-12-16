import React, { useEffect, useState, useContext } from "react";
import AddPet from "./AddPet";
import UserSettings from "./UserSettings";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Context } from "../Context";
import "../styles/dashboard.css";

const Dashboard = () => {
  const { currentUser } = useContext(Context);

  return (
    <div className="sidebar-container">
      <div className="sidebar_responsive" id="sidebar">
        <div className="sidebar__menu">
          <div className="sidebar__link active_menu_link">
            <i className="fa fa-home"></i>
            <a href="#">Dashboard</a>
          </div>
          <h2>PETS</h2>
          <div className="sidebar__link">
            <i className="fa fa-user-secret" aria-hidden="true"></i>
            <a href="#">Add Pet</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-building-o"></i>
            <a href="#">Company Management</a>
          </div>

          <h2>USERS</h2>
          <div className="sidebar__link">
            <i className="fa fa-question"></i>
            <a href="#">All Users</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-sign-out"></i>
            <a href="#">Leave Policy</a>
          </div>

          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
