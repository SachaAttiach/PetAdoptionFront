import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";

function UserItem() {
  const { userData, setUserData } = useContext(Context);
  const { userID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/getUsers/${userID}`).then((response) => {
      setUserData(response.data.elem);
    });
  }, []);

  //   useEffect(() => {
  //     console.log(userData);
  //   });

  return (
    <div className="usercard-container">
      <div className="usercardbox">
        <div className="snip1336">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            alt="sample87"
          />
          <figcaption>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQEaklITQ1QDzw/profile-displayphoto-shrink_400_400/0/1638450044133?e=1645660800&v=beta&t=P177JHihKBXA9U5SSmqvs70WZuxQ208HDvsJFpSlbEY"
              alt="profile-sample4"
              class="profile"
            />
            <h2>
              {`${userData.firstname}  
        ${userData.lastname}`}
            </h2>
            <p>Email: {userData.email}</p>
            <p>Number: {userData.number}</p>
            <p>{userData.bio}</p>
            <p>Adopted Pets: {userData.adoptedpets}</p>

            <a href="#" className="follow">
              Follow Me
            </a>
            <a href="#" className="info">
              Save for Later
            </a>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
