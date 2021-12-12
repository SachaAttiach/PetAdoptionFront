import React, { useContext } from "react";
import { Context } from "../Context";
import "../styles/Profile.css";


function Profile() {
  const {
    listOfUsers,
  } = useContext(Context);

  return (
    <div className="about">
      {/* <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Labrador})` }}
      ></div> */}
      <h2 className="profileHeader"> Profile Settings</h2>
      <div className="aboutBottom">
        {listOfUsers.map((user) => {
          return (
            <div className="menuItem">
              <h5 className="userdetails">User details:</h5>
              <p>First Name: {user.firstname}</p>
              <p>Last Name: {user.lastname}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.number}</p>
              <p>Password: {user.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
