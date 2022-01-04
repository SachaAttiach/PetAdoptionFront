import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";

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
      <div className="usercardbox">
        <div className="snip1336">
          <figcaption>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEaklITQ1QDzw/profile-displayphoto-shrink_400_400/0/1638450044133?e=1645660800&v=beta&t=P177JHihKBXA9U5SSmqvs70WZuxQ208HDvsJFpSlbEY"
              alt="profile-sample4"
              className="profile"
            />
            <h2>
              {`${userData.firstname}  
        ${userData.lastname}`}
            </h2>
            <p>Email: {userData.email}</p>
            <p>Number: {userData.number}</p>
            <p>{userData.bio}</p>
            <p>Adopted Pets:</p>
            {pets.map((pet) => {
              return ` ${pet.name}`;
            })}
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
