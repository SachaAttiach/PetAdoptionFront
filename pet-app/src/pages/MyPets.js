import React, { useState, useContext } from "react";
import { Context } from "../Context";

function MyPets() {
  const { handleOpen, currentUser } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div>
      <h1>This is my pets page</h1>
      <button onClick={toggler}>{toggle ? `My Pets` : `Saved Pets`}</button>
      {toggle ? (
        <div>
          <h5>
            Saved Pets:
            {currentUser.savedpets ? (
              `You have no saved pets`
            ) : (
              <div>Here are your saved pets: {currentUser.savedpets}</div>
            )}
          </h5>
        </div>
      ) : (
        <div>
          <h5>
            Adopted Pets:
            {currentUser.adoptedpets ? (
              `You have no adopted pets`
            ) : (
              <div>Here are your adopted pets: {currentUser.adoptedpets}</div>
            )}
          </h5>
        </div>
      )}
    </div>
  );
}

export default MyPets;
