import React, {  useContext } from "react";
import { Context } from "../../Context";
import { Link } from "react-router-dom";

function SavedPets() {
  const { currentUser, listOfPets } = useContext(Context);

  const tempObj = {};
  listOfPets.forEach((val) => (tempObj[val._id] = val));
  const pets = currentUser.savedpets
    ? currentUser.savedpets.map((val, key) => {
        let usersPets = tempObj[val];
        return usersPets;
      })
    : [];

  return (
    <div className="petpage-main">
      <h5 style={{ paddingLeft: "2%" }}>
        Saved Pets:
        {currentUser.savedpets ? <div></div> : `You have no saved pets`}
      </h5>

      {pets.map((pet) => (
        <div className="menuItem">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/getPets/${pet._id}`}
          >
            <div style={{ backgroundImage: `url(${pet.picture})` }}></div>
            <h2> {pet.type} </h2>
            <p>{pet.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SavedPets;
