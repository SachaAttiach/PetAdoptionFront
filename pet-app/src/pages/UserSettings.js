import React, { useContext } from "react";
import { Context } from "../Context";
import Cat from "../assets/bettercat.jpeg";
import "../styles/Home.css";

function UserSettings() {
  const {
    setRegisterEmail,
    setRegisterPassword,
    setRegisterConfirmPassword,
    setRegisterFirstName,
    setRegisterLastName,
    setRegisterNumber,
    createUser,
    userBio,
    setUserBio,
    listOfUsers,
  } = useContext(Context);
  const mockData = listOfUsers[0];
  console.log(mockData);
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Cat})` }}
      ></div>
      <div className="rightSide">
        <h1 className="registertext"> Profile Details </h1>
        {/* i could have issues from this being a form - check later */}
        <form id="contact-form">
          <label htmlFor="firstname">First Name</label>
          <input
            name="firstname"
            placeholder="Enter first name..."
            type="text"
            onChange={(event) => {
              setRegisterFirstName(event.target.value);
            }}
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            name="lastname"
            placeholder="Enter last name..."
            type="text"
            onChange={(event) => {
              setRegisterLastName(event.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <label htmlFor="number">Phone Number</label>
          <input
            name="number"
            placeholder="Enter phone number..."
            type="number"
            onChange={(event) => {
              setRegisterNumber(event.target.value);
            }}
          />
          <label htmlFor="userbio">User Bio</label>
          <input
            name="userbio"
            type="text"
            placeholder="User Bio..."
            onChange={(event) => {
              setUserBio(event.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            placeholder="Password..."
            onChange={(event) => {
              setRegisterConfirmPassword(event.target.value);
            }}
          />
          <button onClick={createUser}> Save Changes </button>
        </form>
        <div className="currentUser">
          <h3>Current User Info</h3>
          <p>First Name: {mockData.firstname}</p>
          <p>Last Name: {mockData.lastname}</p>
          <p>Email: {mockData.email}</p>
          <p>Phone: {mockData.number}</p>
          <p>Password: {mockData.password}</p>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
