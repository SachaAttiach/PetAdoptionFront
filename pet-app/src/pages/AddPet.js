import React, { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import "../styles/addpet.css";

function AddPet() {
  const { createPet, setPetFormData, petFormData } = useContext(Context);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setPetFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="form-container">
      <h1 className="menuTitle">Add Pets</h1>
      <div className="form--form">
        <input
          type="text"
          placeholder="Type of Pet"
          className="form--input"
          value={petFormData.type}
          onChange={handleChange}
          name="type"
        />
        <input
          type="text"
          placeholder="Name"
          className="form--input"
          value={petFormData.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Adoption Status"
          className="form--input"
          value={petFormData.adoptionStatus}
          onChange={handleChange}
          name="adoptionStatus"
        />
        <input
          type="text"
          placeholder="Picture URL"
          className="form--input"
          value={petFormData.picture}
          onChange={handleChange}
          name="picture"
        />
        <input
          type="number"
          placeholder="Height"
          className="form--input"
          value={petFormData.height}
          onChange={handleChange}
          name="height"
        />
        <input
          type="number"
          placeholder="Weight"
          className="form--input"
          value={petFormData.weight}
          onChange={handleChange}
          name="weight"
        />
        <input
          type="text"
          placeholder="Color"
          className="form--input"
          value={petFormData.color}
          onChange={handleChange}
          name="color"
        />
        <input
          type="text"
          placeholder="Bio"
          className="form--input"
          value={petFormData.bio}
          onChange={handleChange}
          name="bio"
        />
        <input
          type="text"
          placeholder="Dietery requirments"
          className="form--input"
          value={petFormData.diet}
          onChange={handleChange}
          name="dietery"
        />
        <input
          type="text"
          placeholder="Breed"
          className="form--input"
          value={petFormData.breed}
          onChange={handleChange}
          name="breed"
        />
        <div className="form--marketing">
          <input
            id="isHypoallergenic"
            type="checkbox"
            checked={petFormData.hypoallergenic}
            name="hypoallergenic"
            onChange={handleChange}
          />
          <label htmlFor="isHypoallergenic">Hypoallergenic?</label>
        </div>
        <button onClick={createPet} className="form--submit">
          Add Pet
        </button>
      </div>
    </div>
  );
}

export default AddPet;
