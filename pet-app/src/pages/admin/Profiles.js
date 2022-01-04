import React, { useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";
import "../../styles/Profile.css";
import Dashboard from "./Dashboard";

function Profiles() {
  const { listOfUsers } = useContext(Context);

  return (
    <div className="addpet-main-container">
      <Dashboard />
      <div className="about">
        <h2 className="profileHeader"> All Users </h2>
        <div className="aboutBottom">
          {listOfUsers.map((user) => {
            return (
              <div className="menuItem">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/getUsers/${user._id}`}
                >
                  <h5 className="userdetails">User details:</h5>
                  <p>First Name: {user.firstname}</p>
                  <p>Last Name: {user.lastname}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.number}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profiles;
