import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import { Context } from "../Context";
import "../styles/addpet.css";
import axios from "axios";

function AddPet() {
  const {
    createPet,
    setPetFormData,
    petFormData,
    setPictureUrl,
    pictureUrl,
    uploadImage,
  } = useContext(Context);

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
    <div className="addpet-main-container">
      <Dashboard />
      <div className="addpet-container">
        <div className="addpet-title">Add Pet</div>
        <div className="addpet-content">
          <form id="addpetform">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Type Of Pet</span>
                <input
                  type="text"
                  placeholder="Type of Pet"
                  value={petFormData.type}
                  onChange={handleChange}
                  name="type"
                />
              </div>
              <div className="input-box">
                <span className="details">Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  value={petFormData.name}
                  onChange={handleChange}
                  name="name"
                />
              </div>
              {/* <div className="input-box">
                <span className="details">Adoption Status</span>
                <input
                  type="text"
                  placeholder="Adoption Status"
                  value={petFormData.adoptionStatus}
                  onChange={handleChange}
                  name="adoptionStatus"
                />
              </div> */}
              <div className="input-box">
                <span className="details">Upload Picture</span>
                <label className="chosefile">Choose file</label>
                <input
                  type="file"
                  // value={petFormData.picture}
                  onChange={uploadImage}
                  name="picture"
                  className="uploadpicturebutton"
                  placeholder="Choose File"
                />
              </div>

              {/* <div className="input-box">
                <span className="details">Picture URL</span>
                <input
                  type="text"
                  placeholder="Picture URL"
                  value={petFormData.picture}
                  onChange={handleChange}
                  name="picture"
                />
              </div> */}
              <div className="input-box">
                <span className="details">Height</span>
                <input
                  type="text"
                  placeholder="Height"
                  value={petFormData.height}
                  onChange={handleChange}
                  name="height"
                />
              </div>
              <div className="input-box">
                <span className="details">Weight</span>
                <input
                  type="text"
                  placeholder="Weight"
                  value={petFormData.weight}
                  onChange={handleChange}
                  name="weight"
                />
              </div>
              <div className="input-box">
                <span className="details">Color</span>
                <input
                  type="text"
                  placeholder="Color"
                  value={petFormData.color}
                  onChange={handleChange}
                  name="color"
                />
              </div>
              <div className="input-box">
                <span className="details">Bio</span>
                <input
                  type="text"
                  placeholder="Bio"
                  value={petFormData.bio}
                  onChange={handleChange}
                  name="bio"
                />
              </div>
              <div className="input-box">
                <span className="details">Dietary requirments</span>
                <input
                  type="text"
                  placeholder="Dietery requirments"
                  value={petFormData.diet}
                  onChange={handleChange}
                  name="dietery"
                />
              </div>
              <div className="input-box">
                <span className="details">Breed</span>
                <input
                  type="text"
                  placeholder="Breed"
                  value={petFormData.breed}
                  onChange={handleChange}
                  name="breed"
                />
              </div>
              <div className="input-box">
                <span className="details">Adoption Status</span>
                <input
                  type="text"
                  placeholder="Adoption Status"
                  value={petFormData.adoptionStatus}
                  onChange={handleChange}
                  name="adoptionStatus"
                />
              </div>
              <div className="input-box">
                <input
                  type="checkbox"
                  name="hypoallergenic"
                  id="dot-1"
                  onChange={handleChange}
                  checked={petFormData.hypoallergenic}
                />
                <span>Hypoallergenic?</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one"></span>
                    <span className="yesbox">Yes</span>
                  </label>
                </div>
              </div>
              {/* <div className="input-box">
                <input
                  type="checkbox"
                  name="adoptionStatus"
                  id="dot-2"
                  onChange={handleChange}
                  checked={petFormData.adoptionStatus}
                />
                <span className="AdoptionCheckbox">
                  Available for Adoption?
                </span>
                <div className="adoptioncategory">
                  <label htmlFor="dot-2">
                    <span className="dot two"></span>
                    <span className="yesbox">Yes</span>
                  </label>
                </div>
              </div> */}
              <div className="input-box">
                <button className="addpetbutton" onClick={createPet}>
                  Add Pet
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPet;
