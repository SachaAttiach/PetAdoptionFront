import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [searchColor, setSearchColor] = useState("");
  const [searchHeight, setSearchHeight] = useState(0);
  const [searchWeight, setSearchWeight] = useState(0);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const toggleAdvanced = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

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
            <option value="">-- Choose --</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="fish">Fish</option>
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
        {MenuList.filter((menuItem) => {
          if (searchColor == "") {
            return menuItem;
          } else if (menuItem.color.includes(searchColor)) {
            return menuItem;
          }
        }).map((menuItem, key) => {
          return (
            // <MenuItem
            //   key={key}
            //   image={menuItem.image}
            //   name={menuItem.name}
            //   height={menuItem.height}
            //   weight={menuItem.weight}
            //   type={menuItem.type}
            //   adopted={menuItem.adopted}
            //   color={menuItem.color}
            //   bio={menuItem.bio}
            //   hypoallergenic={menuItem.hypoallergenic}
            //   diet={menuItem.diet}
            //   breed={menuItem.breed}
            // />
            <div className="menuItem">
              <div style={{ backgroundImage: `url(${menuItem.image})` }}> </div>
              <p> {menuItem.name} </p>
              <p> Height: {menuItem.height}cm </p>
              <p> Weight: {menuItem.weight}kg </p>
              <p> Type: {menuItem.type} </p>
              <p> Adopted: {menuItem.adopted} </p>
              <p> Color: {menuItem.color} </p>
              <p> Bio: {menuItem.bio} </p>
              <p> Hypoallergenic: {menuItem.hypoallergenic} </p>
              <p> Diet: {menuItem.diet} </p>
              <p> Breed: {menuItem.breed} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
