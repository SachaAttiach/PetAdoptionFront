import React, { useContext } from "react";
import { Context } from "../Context";
import Cat from "../assets/bettercat.jpeg";
import "../styles/Home.css";
import Dashboard from "./Dashboard";

function UserSettings() {
  const {
    setUpdateEmail,
    setUpdatePassword,
    setUpdateConfirmPassword,
    setUpdateFirstName,
    setUpdateLastName,
    setUpdateNumber,
    setUpdateUserBio,
    updateUser,
    currentUser,
  } = useContext(Context);

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Cat})` }}
      ></div>
      <div className="rightSide">
        <h1 className="registertext"> Profile Details/Update </h1>
        {/* i could have issues from this being a form - check later */}
        <form id="contact-form">
          <span>Current First Name: {currentUser.firstname}</span>
          <input
            name="firstname"
            placeholder="Update first name..."
            type="text"
            onChange={(event) => {
              setUpdateFirstName(event.target.value);
            }}
          />
          <span>Current lastname: {currentUser.lastname}</span>
          <input
            name="lastname"
            placeholder="Update last name..."
            type="text"
            onChange={(event) => {
              setUpdateLastName(event.target.value);
            }}
          />
          <span>Current email: {currentUser.email}</span>
          <input
            name="email"
            placeholder="Update email..."
            type="email"
            onChange={(event) => {
              setUpdateEmail(event.target.value);
            }}
          />
          <span>Current number: {currentUser.number}</span>
          <input
            name="number"
            placeholder="Update phone number..."
            type="number"
            onChange={(event) => {
              setUpdateNumber(event.target.value);
            }}
          />
          {/* <span>Add a Bio</span>
            <input
              name="userbio"
              type="text"
              placeholder="User Bio..."
              onChange={(event) => {
                setUpdateUserBio(event.target.value);
              }}
            /> */}
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setUpdatePassword(event.target.value);
            }}
          />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setUpdateConfirmPassword(event.target.value);
            }}
          />
          <button onClick={updateUser}> Save Changes </button>
        </form>
      </div>
    </div>
  );
}

export default UserSettings;
