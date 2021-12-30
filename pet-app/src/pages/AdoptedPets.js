import React, { useState, useContext } from "react";
import { Context } from "../Context";

function AdoptedPets() {
  const { handleOpen, currentUser, listOfPets } = useContext(Context);

  const tempObj = {};
  listOfPets.forEach((val) => (tempObj[val._id] = val));
  const pets = currentUser.adoptedPets
    ? currentUser.adoptedPets.map((val, key) => {
        let usersPets = tempObj[val];
        return usersPets;
      })
    : [];
  console.log(pets);
  return (
    <div className="petpage-main">
      <h5 style={{ paddingLeft: "2%" }}>
        Adopted Pets:
        {currentUser.adoptedPets ? <div></div> : `You have no adopted pets`}
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

export default AdoptedPets;
