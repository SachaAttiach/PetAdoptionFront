import React from "react";
import EditPet from "../pages/EditPet";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";

function MenuItem() {
  const { petData, setPetData } = useContext(Context);
  const { petID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/getPets/${petID}`).then((response) => {
      setPetData(response.data.element);
    });
  }, []);

  return (
    <div className="usercard-container">
      <div className="usercardbox">
        <div className="snip1336">
          <img src={petData.picture} alt="sample87" />
          <figcaption>
            <h2 className="petname">
              {petData.name}
              <span>
                <h2>{petData.type}</h2>
              </span>
            </h2>
            <p>Height: {petData.height}cm </p>
            <p>weight: {petData.weight}kg</p>
            <p>Bio: {petData.bio}</p>
            <p>Is Hypoallergenic? {petData.hypoallergenic ? `Yes` : `No`}</p>
            <p>Diet: {petData.diet}</p>
            <p>Breed: {petData.breed}</p>
            <p>
              Adoption Status:
              {petData.adoptionStatus ? ` Adopted` : ` Not Adopted`}
            </p>
            <a href="#" className="follow">
              {petData.adoptionStatus
                ? ` Return To Adoption Centre`
                : ` Adopt me`}
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

export default MenuItem;
