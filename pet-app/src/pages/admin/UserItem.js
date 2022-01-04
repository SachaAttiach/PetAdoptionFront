import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";
import heart from "../../assets/wilderrrr.jpeg";
import background from "../../assets/catness.jpeg";

function UserItem() {
  const { userData, setUserData, listOfPets } = useContext(Context);
  const { userID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/users/getUsers/${userID}`).then(
      (response) => {
        setUserData(response.data.elem);
      }
    );
  }, []);

  const tempObj = {};
  listOfPets.forEach((val) => (tempObj[val._id] = val));
  const pets = userData.adoptedPets
    ? userData.adoptedPets.map((val, key) => {
        let usersPets = tempObj[val];
        return usersPets;
      })
    : [];

  return (
    <div className="usercard-container">
      <div
        style={{
          backgroundImage: `url(${heart})`,
        }}
        className="usercard-container"
      >
        <div className="usercardbox">
          <div
            className="snip1336"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <div className="textfield">
              <h2>
                {`${userData.firstname}  
        ${userData.lastname}`}
              </h2>
              <p>Email: {userData.email}</p>
              <p>Number: {userData.number}</p>
              <p>{userData.bio}</p>
              <p>Adopted Pets:</p>
              {pets.map((pet) => {
                return ` ${pet.name},`;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
