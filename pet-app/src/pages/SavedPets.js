import React, { useState, useContext } from "react";
import { Context } from "../Context";

function SavedPets() {
  const { handleOpen, currentUser, listOfPets } = useContext(Context);

  const tempObj = {};
  listOfPets.forEach((val) => (tempObj[val._id] = val));
  const pets = currentUser.savedpets
    ? currentUser.savedpets.map((val, key) => {
        let usersPets = tempObj[val];
        return usersPets;
      })
    : [];
  console.log(pets);
  return (
    <div className="petpage-main">
      <h5 style={{ paddingLeft: "2%" }}>
        Adopted Pets:
        {currentUser.savedpets ? <div></div> : `You have no saved pets`}
      </h5>

      {pets.map((pet) => (
        <div className="menuItem">
          <div style={{ backgroundImage: `url(${pet.picture})` }}></div>
          <h2> {pet.type} </h2>
          <p>{pet.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SavedPets;
