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
        <button className="contact-link" style={{ marginTop: "50px" }}>
          Adopt Me
        </button>
        <button className="contact-link" style={{ marginTop: "50px" }}>
          Save For Later
        </button>
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
