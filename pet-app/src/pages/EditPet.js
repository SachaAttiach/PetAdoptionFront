import React, { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import "../styles/addpet.css";
import Axios from "axios";

function EditPet() {
  const { createPet, uploadImage, setPetData, petData, currentUser } =
    useContext(Context);
  const { petID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/pets/getPets/${petID}`).then(
      (response) => {
        setPetData(response.data.element);
      }
    );
  }, []);

  console.log(petData);

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
  //     Axios.put(`http://localhost:5000/pets/updatePets/${petID}`, {}).then(
  //       (response) => {
  //         setPetData(response.data.element);
  //       }
  //     );
  //   }, []);

  //state for editing the pets
  const [editPetFormData, setEditPetFormData] = useState({
    type: petData.type,
    name: petData.name,
    adoptionStatus: petData.adoptionStatus,
    picture: petData.picture,
    height: petData.height,
    weight: petData.weight,
    color: petData.color,
    bio: petData.bio,
    hypoallergenic: petData.hypoallergenic,
    dietery: petData.dietery,
    breed: petData.breed,
    // adoptedBy: null,
  });

  console.log(editPetFormData);

  const updatePet = () => {
    console.log("updating pet!!!!!");
    const data = {
      userID: currentUser._id,
      type: editPetFormData.type,
      name: editPetFormData.name,
      adoptionStatus: editPetFormData.adoptionStatus,
      picture: editPetFormData.picture,
      height: editPetFormData.height,
      weight: editPetFormData.weight,
      color: editPetFormData.color,
      bio: editPetFormData.bio,
      hypoallergenic: editPetFormData.hypoallergenic,
      dietery: editPetFormData.diet,
      breed: editPetFormData.breed,
    };
    fetch(`http://localhost:5000/pets/update/${petID}`, {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
              value={editPetFormData.type}
              onChange={handleChange}
              name="type"
            />
          </div>
          <div className="input-box">
            <span className="details">Name</span>
            <input
              type="text"
              placeholder="Name"
              value={editPetFormData.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          {/* <div className="input-box">
            <span className="details">Adoption Status</span>
            <input
              type="text"
              placeholder="Adoption Status"
              value={editPetFormData.adoptionStatus}
              onChange={handleChange}
              name="adoptionStatus"
            />
          </div> */}
          {/* <div className="input-box">
            <span className="details">Picture URL</span>
            <input
              type="text"
              placeholder="Picture URL"
              value={editPetFormData.picture}
              onChange={handleChange}
              name="picture"
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
          <div className="input-box">
            <span className="details">Height</span>
            <input
              type="number"
              placeholder="Height"
              value={editPetFormData.height}
              onChange={handleChange}
              name="height"
            />
          </div>
          <div className="input-box">
            <span className="details">Weight</span>
            <input
              type="number"
              placeholder="Weight"
              value={editPetFormData.weight}
              onChange={handleChange}
              name="weight"
            />
          </div>
          <div className="input-box">
            <span className="details">Color</span>
            <input
              type="text"
              placeholder="Color"
              value={editPetFormData.color}
              onChange={handleChange}
              name="color"
            />
          </div>
          <div className="input-box">
            <span className="details">Bio</span>
            <input
              type="text"
              placeholder="Bio"
              value={editPetFormData.bio}
              onChange={handleChange}
              name="bio"
            />
          </div>
          <div className="input-box">
            <span className="details">Dietary requirments</span>
            <input
              type="text"
              placeholder="Dietery requirments"
              value={editPetFormData.diet}
              onChange={handleChange}
              name="dietery"
            />
          </div>
          <div className="input-box">
            <span className="details">Breed</span>
            <input
              type="text"
              placeholder="Breed"
              value={editPetFormData.breed}
              onChange={handleChange}
              name="breed"
            />
          </div>
          <div className="input-box">
            <span className="details">Adoption Status</span>
            <input
              type="text"
              placeholder="Adoption Status"
              value={editPetFormData.adoptionStatus}
              onChange={handleChange}
              name="adoptionStatus"
            />
          </div>
          <div className="input-box">
            <input
              type="checkbox"
              name="hypoallergenic"
              // id="isHypoallergenic"
              id="dot-1"
              onChange={handleChange}
              checked={editPetFormData.hypoallergenic}
            />
            <span>Hypoallergenic?</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span>Yes</span>
              </label>
            </div>
          </div>
          {/* <div className="input-box">
            <input
              type="checkbox"
              name="adoptionStatus"
              // id="isHypoallergenic"
              id="dot-2"
              onChange={handleChange}
              checked={EditPetFormData.adoptionStatus}
            />
            <span className="AdoptionCheckbox">Available for Adoption?</span>
            <div className="adoptioncategory">
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="adoptioncheckbox">Yes</span>
              </label>
            </div>
          </div> */}
          <div className="input-box">
            <button
              onClick={(e) => {
                e.preventDefault();
                updatePet();
              }}
            >
              Update Pet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPet;
