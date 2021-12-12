import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

import "../styles/Menu.css";

function Menu() {
  const [searchColor, setSearchColor] = useState("");
  const [searchHeight, setSearchHeight] = useState(0);
  const [searchWeight, setSearchWeight] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { listOfPets, petData } = useContext(Context);
  const toggleAdvanced = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };
  // console.log(listOfPets.map((menuItem) => { return menuItem._id}))
  return (
    <div className="menu">
      <h1 className="menuTitle">Search Pets</h1>
      <div className="inputForms">
        <div className="basicSearchForm">
          <h3>Basic Search</h3>
          <label htmlFor="animaltype">Type Of Pet</label>
          <br />
          <select
            id="animaltype"
            // value={}
            // onChange={}
            name="animaltype"
          >
            <option value="">-- Choose Pet Type --</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <button className="SearchButton" onClick={toggleAdvanced}>
            {showAdvancedSearch ? `Basic Search` : `Advanced Search`}
          </button>
        </div>
        {showAdvancedSearch && (
          <div className="SearchForm">
            <h3>Advanced Search</h3>
            <input
              className="searchText"
              type="text"
              placeholder="Enter Color"
              onChange={(event) => {
                setSearchColor(event.target.value);
              }}
            />
            <label htmlFor="animaltype">Pet Weight</label>
            <br />
            <select
              id="animalweight"
              // value={}
              // onChange={}
              name="animalweight"
            >
              <option value="">-- Choose Weight --</option>
              <option value="5">0-5kg</option>
              <option value="5-10">5-10kg</option>
              <option value="10-20">10-20kg</option>
              <option value="20">20+</option>
            </select>
            <label htmlFor="animaltype">Pet Height</label>
            <br />
            <select
              id="animalheight"
              // value={}
              // onChange={}
              name="animalheight"
            >
              <option value="">-- Choose Height --</option>
              <option value="30">0-30cm-</option>
              <option value="30-60">30-60cm</option>
              <option value="60-100">60-100cm</option>
              <option value="100">100+</option>
            </select>
            <div className="availableCheck">
              <label className="availabletext" htmlFor="isAvailable">
                Available
              </label>
              <input
                type="checkbox"
                id="isAvailable"
                // checked={formData.isFriendly}
                // onChange={handleChange}
                name="isAvailable"
              />
            </div>
          </div>
        )}
      </div>
      <div className="menuList">
        {listOfPets
          .filter((menuItem) => {
            if (searchColor == "") {
              return menuItem;
            } else if (menuItem.color.includes(searchColor)) {
              return menuItem;
            }
          })
          .map((menuItem, key) => {
            return (
              <div className="menuItem">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/getPets/${menuItem._id}`}
                >
                  <div
                    style={{ backgroundImage: `url(${menuItem.picture})` }}
                  ></div>
                  <h2> {menuItem.name} </h2>
                  <p>Status: {menuItem.adoptionStatus}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menu;
