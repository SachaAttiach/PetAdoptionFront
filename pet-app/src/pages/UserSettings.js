import React, { useContext } from "react";
import { Context } from "../Context";
import Cat from "../assets/bettercat.jpeg";
import "../styles/Home.css";
import Dashboard from "./admin/Dashboard";

function UserSettings() {
  const {
    setUpdateEmail,
    updateEmail,
    setUpdatePassword,
    updatePassword,
    setUpdateConfirmPassword,
    updateConfirmedPassword,
    setUpdateFirstName,
    updateFirstName,
    setUpdateLastName,
    updateLastName,
    setUpdateNumber,
    updateNumber,
    setUpdateUserBio,
    updateUserBio,
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
        <form id="contact-form">
          <input
            name="firstname"
            placeholder="Update first name..."
            type="text"
            value={updateFirstName}
            onChange={(event) => {
              setUpdateFirstName(event.target.value);
            }}
          />
          <input
            value={updateLastName}
            name="lastname"
            placeholder="Update last name..."
            type="text"
            onChange={(event) => {
              setUpdateLastName(event.target.value);
            }}
          />

          <input
            value={updateEmail}
            name="email"
            placeholder="Update email..."
            type="email"
            onChange={(event) => {
              setUpdateEmail(event.target.value);
            }}
          />
          <input
            value={updateNumber}
            name="number"
            placeholder="Update phone number..."
            onChange={(event) => {
              setUpdateNumber(event.target.value);
            }}
          />
          <input
            value={updateUserBio}
            name="userbio"
            type="text"
            placeholder="User Bio..."
            onChange={(event) => {
              setUpdateUserBio(event.target.value);
            }}
          />
          <input
            value={updatePassword}
            name="password"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setUpdatePassword(event.target.value);
            }}
          />
          <input
            value={updateConfirmedPassword}
            name="confirmpassword"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setUpdateConfirmPassword(event.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              updateUser();
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserSettings;
