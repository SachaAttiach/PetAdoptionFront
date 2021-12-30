import React from "react";
import EditPet from "../pages/EditPet";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";
import EditIcon from "@mui/icons-material/Edit";

function AdminMenuItem() {
  const { petData, setPetData, handleAdoption, currentUser } =
    useContext(Context);
  const { petID } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:5000/pets/getPets/${petID}`).then(
      (response) => {
        setPetData(response.data.element);
      }
    );
  }, []);

  const [editPetDetails, setEditPetDetails] = useState(false);
  const toggleEdit = () => {
    editPetDetails ? setEditPetDetails(false) : setEditPetDetails(true);
  };

  function handleChange() {}
  return (
    <div className="usercard-container">
      <div className="usercardbox">
        <div className="snip1336">
          <img src={petData.picture} alt="sample87" />
          <figcaption>
            <div className="editPet" onClick={toggleEdit}></div>
            <h2 className="petname">
              {petData.name}
              <span>
                <h2>{petData.type}</h2>
              </span>
            </h2>
            <div className="petname">
              <div className="editIcon" onClick={toggleEdit}>
                <EditIcon />
              </div>
              <p>Height: {petData.height}</p>
              <p>weight: {petData.weight}</p>
              <p>Bio: {petData.bio}</p>
              <p>Is Hypoallergenic? {petData.hypoallergenic ? `Yes` : `No`}</p>
              <p>Diet: {petData.diet}</p>
              <p>Breed:{petData.breed}</p>
              <p>
                Adoption Status:
                {petData.adoptionStatus ? ` Adopted` : ` Not Adopted`}
              </p>
              <button className="adopt">
                {petData.adoptedBy
                  ? petData.adoptedBy === currentUser._id
                    ? "Unadopt"
                    : ` Return To Adoption Centre`
                  : ` Adopt me`}
              </button>
              <button className="save">Save for Later</button>
              <button className="foster">Foster</button>
            </div>
          </figcaption>
        </div>
        {editPetDetails && (
          <div className="petedit-container">
            <EditPet />
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMenuItem;
