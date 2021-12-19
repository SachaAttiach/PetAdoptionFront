import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "../styles/Menu.css";
import Dashboard from "./Dashboard";

function AllPets() {
  const { listOfPets } = useContext(Context);
  return (
    <div className="addpet-main-container">
      <Dashboard />
      <div className="menu">
        <h1 className="menuTitle">All Pets</h1>

        <div className="menuList">
          {listOfPets.map((menuItem, key) => {
            return (
              <div className="menuItem">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/getPetsAdmin/${menuItem._id}`}
                >
                  <div
                    style={{ backgroundImage: `url(${menuItem.picture})` }}
                  ></div>
                  <h2> {menuItem.name} </h2>
                  <p>Status: {menuItem.adoptionStatus}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllPets;
