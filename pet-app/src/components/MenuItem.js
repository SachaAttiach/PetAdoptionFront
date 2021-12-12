import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";

function MenuItem() {
  const { petData, setPetData, listOfPets } = useContext(Context);
  const { petID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/getPets/${petID}`).then((response) => {
      setPetData(response.data.element);
    });
  }, []);

  useEffect(() => {
    console.log(petData);
  });

  return (
    // <div className="menuItemPage">
    //   <div className="menuItemProfile">
    //     <h1>Pet Profile</h1>
    //     <div
    //       className="menuItemImage"
    //       style={{ backgroundImage: `url(${petData.picture})` }}
    //     ></div>
    //     <p> Name: {petData.name} </p>
    //     <p> Height: {petData.height}cm </p>
    //     <p> Weight: {petData.weight}kg </p>
    //     <p> Type: {petData.type} </p>
    //     <p> Adopted: {petData.adoptionStatus} </p>
    //     <p> Color: {petData.color} </p>
    //     <p> Bio: {petData.bio} </p>
    //     <p>Hypoallergenic: {petData.hypoallergenic ? `Yes` : `No`}</p>
    //     <p> Diet: {petData.diet} </p>
    //     <p> Breed: {petData.breed} </p>
    //   </div>
    // </div>
    <div class="parent">
      <div class="box-one">
        <h1>{petData.name}</h1>
        <h1>
          Type: <span className="color-secondary">{petData.type}</span>
          <br />
          Height:
          <span className="color-secondary">{petData.height}cm </span>
          <br />
          Weight: <span className="color-secondary">{petData.weight}kg</span>
          <br />
          Color: <span className="color-secondary">{petData.color}</span>
          <br />
          Bio: <span className="color-secondary">{petData.bio}</span>
          <br />
          Hypoallergenic:{" "}
          <span className="color-secondary">
            {petData.hypoallergenic ? `Yes` : `No`}
          </span>
          <br />
          Diet: <span className="color-secondary">{petData.diet}</span>
          <br />
          Breed: <span className="color-secondary">{petData.breed}</span>
        </h1>
        <div style={{ marginTop: "50px" }}>
          <a
            className="contact-link"
            target="_blank"
            // href="https://www.instagram.com/akhtar_sheraliat/"
          >
            Adopt Me
          </a>
        </div>
      </div>
      <div className="box-two">
        <div className="image">
          <img src={petData.picture} />
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
