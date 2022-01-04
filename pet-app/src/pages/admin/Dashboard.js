import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import "../../styles/dashboard.css";

const Dashboard = () => {
  const { logout } = useContext(Context);

  return (
    <div className="sidebar_responsive">
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/admin"> Dashboard </Link>
        </div>
        <h2>PETS</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <Link to="/addpet"> Add Pet </Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <Link to="/allPets"> All Pets </Link>
        </div>

        <h2>USERS</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <Link to="/profiles"> All Users </Link>
        </div>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a onClick={logout}>Log out</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
