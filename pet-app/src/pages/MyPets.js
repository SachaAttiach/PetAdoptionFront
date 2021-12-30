import React, { useState, useContext } from "react";
import { Context } from "../Context";
import AdoptedPets from "./AdoptedPets";
import SavedPets from "./SavedPets";

function MyPets() {
  const { handleOpen, currentUser, listOfPets } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="petpage-container">
      <h1 className="pet-title">My pets page</h1>
      <div className="divbutton">
        <button className="petpage-button" onClick={toggler}>
          {toggle ? `Switch to: Adopted Pets` : `Switch to: Saved Pets`}
        </button>
      </div>
      {toggle ? (
        <div className="petpage-main">
          <SavedPets />
        </div>
      ) : (
        <div className="petpage-main">
          <AdoptedPets />
        </div>
      )}
    </div>
  );
}

export default MyPets;
