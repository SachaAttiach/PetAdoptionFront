import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";
import Axios from "axios";
import heart from "../assets/paw.gif";

function MenuItem() {
  const { petData, setPetData, currentUser, setCurrentUser, listOfPets } =
    useContext(Context);
  const { petID } = useParams();

  useEffect(() => {
    Axios.get(`https://pet-back-end.herokuapp.com/pets/getPets/${petID}`).then(
      (response) => {
        console.log("its refreshing");
        setPetData(response.data.element);
      }
    );
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pet-back-end.herokuapp.com/api/user/users",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const content = await response.json();
      setCurrentUser(content);
    })();
  }, [petData.adoptionStatus, petData.savedStatus]);

  const handleAdoption = () => {
    fetch(`https://pet-back-end.herokuapp.com/pets/adopt/${petID}`, {
      method: "PUT",
      body: JSON.stringify({
        userID: currentUser._id,
        adoptionStatus: "adopted",
      }),
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === "You already own this pet" || "Already adopted") {
          alert(data);
        } else setPetData(data);
      });
  };

  console.log(petData);

  const handleSave = async () => {
    Axios.put(
      `https://pet-back-end.herokuapp.com/pets/save/${petID}`,
      {
        savedStatus: "save",
        userID: currentUser._id,
      },
      { withCredentials: true }
    ).then((response) => {
      const { data } = response;
      setPetData(data);
    });
  };

  const handleReturnSaved = async () => {
    Axios.put(
      `https://pet-back-end.herokuapp.com/pets/returnsaved/${petID}`,
      {
        userID: currentUser._id,
      },
      { withCredentials: true }
    ).then((response) => {
      const { data } = response;
      setPetData(data);
    });
  };

  const handleFoster = async () => {
    fetch(`https://pet-back-end.herokuapp.com/pets/foster/${petID}`, {
      method: "PUT",
      body: JSON.stringify({
        userID: currentUser._id,
        adoptionStatus: "fostered",
      }),
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === "Already Fostered") {
          alert(data);
        } else setPetData(data);
      });
  };

  console.log(petData);
  const handleReturn = async () => {
    fetch(`https://pet-back-end.herokuapp.com/pets/return/${petID}`, {
      method: "PUT",
      body: JSON.stringify({ userID: currentUser._id }),
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data === "You don't own this pet") {
          alert(data);
        } else setPetData(data);
      });
  };

  const tempObj = {};
  listOfPets.forEach((val) => (tempObj[val._id] = val));

  const pets = currentUser.savedpets
    ? currentUser.savedpets.map((val, key) => {
        let usersPets = tempObj[val];
        return usersPets;
      })
    : [];

  const currentSavedPets = pets.map((pet) => {
    return pet._id;
  });
  const isPetSaved = currentSavedPets.includes(petID);

  return (
    <div
      style={{
        backgroundImage: `url(${heart})`,
      }}
      className="usercard-container"
    >
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
            <div className="petname">
              <p>Height: {petData.height}cm </p>
              <p>weight: {petData.weight}kg</p>
              <p>Bio: {petData.bio}</p>
              <p>Is Hypoallergenic? {petData.hypoallergenic ? `Yes` : `No`}</p>
              <p>Diet: {petData.diet}</p>
              <p>Breed: {petData.breed}</p>
              <p>
                Adoption Status:
                {petData.adoptionStatus}
              </p>

              <button onClick={handleAdoption} className="adopt">
                Adopt Me
              </button>
              <button onClick={handleReturn} className="return">
                Return
              </button>
              {isPetSaved && (
                <button onClick={handleReturnSaved} className="save">
                  Return Saved
                </button>
              )}

              {!isPetSaved && (
                <button onClick={handleSave} className="save">
                  Save for Later
                </button>
              )}

              <button onClick={handleFoster} className="foster">
                Foster
              </button>
            </div>
          </figcaption>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
