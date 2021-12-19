import React, { useContext, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import "../styles/addpet.css";
import Axios from "axios";

function EditPet() {
  const { createPet, EditPetFormData, setEditPetFormData } =
    useContext(Context);
  const { petID } = useParams();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setEditPetFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  //   useEffect(() => {
  //     Axios.put(`http://localhost:5000/updatePets/${petID}`, {}).then(
  //       (response) => {
  //         setPetData(response.data.element);
  //       }
  //     );
  //   }, []);

  //Updating pet:
  const updatePet = (id) => {
    Axios.put("http://localhost:5000/updatePets", {
      id: petID,
      type: EditPetFormData.type,
      name: EditPetFormData.name,
      adoptionStatus: EditPetFormData.adoptionStatus,
      picture: EditPetFormData.picture,
      height: EditPetFormData.height,
      weight: EditPetFormData.weight,
      color: EditPetFormData.color,
      bio: EditPetFormData.bio,
      hypoallergenic: EditPetFormData.hypoallergenic,
      dietery: EditPetFormData.diet,
      breed: EditPetFormData.breed,
    });
  };

  return (
    <div className="addpet-content">
      <form id="addpetform">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Type Of Pet</span>
            <input
              type="text"
              placeholder="Type of Pet"
              value={EditPetFormData.type}
              onChange={handleChange}
              name="type"
            />
          </div>
          <div className="input-box">
            <span className="details">Name</span>
            <input
              type="text"
              placeholder="Name"
              value={EditPetFormData.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="input-box">
            <span className="details">Adoption Status</span>
            <input
              type="text"
              placeholder="Adoption Status"
              value={EditPetFormData.adoptionStatus}
              onChange={handleChange}
              name="adoptionStatus"
            />
          </div>
          <div className="input-box">
            <span className="details">Picture URL</span>
            <input
              type="text"
              placeholder="Picture URL"
              value={EditPetFormData.picture}
              onChange={handleChange}
              name="picture"
            />
          </div>
          <div className="input-box">
            <span className="details">Height</span>
            <input
              type="number"
              placeholder="Height"
              value={EditPetFormData.height}
              onChange={handleChange}
              name="height"
            />
          </div>
          <div className="input-box">
            <span className="details">Weight</span>
            <input
              type="number"
              placeholder="Weight"
              value={EditPetFormData.weight}
              onChange={handleChange}
              name="weight"
            />
          </div>
          <div className="input-box">
            <span className="details">Color</span>
            <input
              type="text"
              placeholder="Color"
              value={EditPetFormData.color}
              onChange={handleChange}
              name="color"
            />
          </div>
          <div className="input-box">
            <span className="details">Bio</span>
            <input
              type="text"
              placeholder="Bio"
              value={EditPetFormData.bio}
              onChange={handleChange}
              name="bio"
            />
          </div>
          <div className="input-box">
            <span className="details">Dietary requirments</span>
            <input
              type="text"
              placeholder="Dietery requirments"
              value={EditPetFormData.diet}
              onChange={handleChange}
              name="dietery"
            />
          </div>
          <div className="input-box">
            <span className="details">Breed</span>
            <input
              type="text"
              placeholder="Breed"
              value={EditPetFormData.breed}
              onChange={handleChange}
              name="breed"
            />
          </div>
        </div>
        <div className="gender-details">
          <input
            type="checkbox"
            name="hypoallergenic"
            // id="isHypoallergenic"
            id="dot-1"
            onChange={handleChange}
            checked={EditPetFormData.hypoallergenic}
          />
          <span className="gender-title">Hypoallergenic?</span>
          <div className="category">
            <label for="dot-1">
              <span className="dot one"></span>
              <span className="gender">Yes</span>
            </label>
          </div>
        </div>
        <div className="button">
          <button className="editpetButton" onClick={() => updatePet(petID)}>
            Update Pet
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPet;
