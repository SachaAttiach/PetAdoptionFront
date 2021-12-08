import React, { useState, useEffect } from "react";
import Labrador from "../assets/humanDog.jpeg";
import "../styles/About.css";
import Axios from "axios";

function About() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3005/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3005/createUser", {
      firstname: firstName,
      lastname: lastName,
      email: email,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        { firstname: firstName, lastname: lastName, email: email },
      ]);
    });
  };
  return (
    <div className="about">
      {/* <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Labrador})` }}
      ></div> */}
      <div className="aboutBottom">
        <h1> Users</h1>

        {listOfUsers.map((user) => {
          return (
        
            <div>
              <h3>First Name: {user.firstname}</h3>
              <h3>Last Name: {user.lastname}</h3>
              <h3>Email: {user.email}</h3>
            </div>
          );
        })}
        <div>
          <label htmlFor="name">First Name</label>
          <input
            name="fname"
            placeholder="Enter first name..."
            type="text"
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <label htmlFor="name">Last Name</label>
          <input
            name="lname"
            placeholder="Enter last name..."
            type="text"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <button onClick={createUser}>Create User</button>
        </div>
      </div>
    </div>
  );
}

export default About;
