import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import "../styles/Menu.css";

function Menu() {
  const [searchColor, setSearchColor] = useState("");
  const [searchHeight, setSearchHeight] = useState("");
  const [searchWeight, setSearchWeight] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchAvailable, setSearchAvailable] = useState("");
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const { listOfPets } = useContext(Context);

  const toggleAdvanced = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setSearchAvailable((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
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
            onChange={(event) => {
              setSearchType(event.target.value);
            }}
            name="animaltype"
          >
            <option value="">-- Choose Pet Type --</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
          {/* {console.log(searchType)} */}

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
              onChange={(event) => {
                setSearchWeight(event.target.value);
                console.log(searchWeight);
              }}
              name="animalweight"
            >
              <option value="">-- Choose Weight --</option>
              <option value={5}>0-5kg</option>
              <option value={10}>5-10kg</option>
              <option value={20}>10-20kg</option>
              <option value={21}>20+</option>
            </select>
            <label htmlFor="animaltype">Pet Height</label>
            <br />
            <select
              id="animalheight"
              // value={}
              onChange={(event) => {
                setSearchHeight(event.target.value);
              }}
              name="animalheight"
            >
              <option value="">-- Choose Height --</option>
              <option value={10}>0-10cm-</option>
              <option value={30}>10-30cm</option>
              <option value={60}>30-60cm</option>
              <option value={61}>60+</option>
            </select>

            {/* <div className="availableCheck">
              <label className="availabletext" htmlFor="isAvailable">
                Available
              </label>
              <input
                type="checkbox"
                name="adoptionStatus"
                onChange={handleChange}
                checked={searchAvailable.adoptionStatus}
              />
              {console.log(searchAvailable)}
            </div> */}
            <label htmlFor="animaltype">Availability</label>
            <br />
            <select
              id="animalavailable"
              // value={}
              onChange={(event) => {
                setSearchAvailable(event.target.value);
              }}
              name="animalavailable"
            >
              <option value="">-- Choose Adopted Status --</option>
              <option value="adopted">Adopted</option>
              <option value="available">Not Adopted</option>
              <option value="fostered">Fostered</option>
            </select>
          </div>
        )}
      </div>
      <div className="menuList">
        {listOfPets
          .filter((menuItem) => {
            if (searchType == "") {
              return menuItem;
            } else if (menuItem.type.includes(searchType)) {
              return menuItem;
            }
          })
          .filter((menuItem) => {
            if (searchAvailable == "") {
              return menuItem;
            } else if (menuItem.adoptionStatus.includes(searchAvailable)) {
              return menuItem;
            }
          })
          .filter((menuItem) => {
            if (searchColor == "") {
              return menuItem;
            } else if (
              menuItem.color.toLowerCase().includes(searchColor.toLowerCase())
            ) {
              return menuItem;
            }
          })
          .filter((menuItem) => {
            if (searchWeight == "") {
              return menuItem;
            } else if (searchWeight == 5) {
              return menuItem.weight <= 5;
            } else if (searchWeight == 10) {
              return menuItem.weight > 5 && menuItem.weight <= 10;
            } else if (searchWeight == 20) {
              return menuItem.weight > 10 && menuItem.weight <= 20;
            } else if (searchWeight == 21) {
              return menuItem.weight >= 20;
            }
          })
          .filter((menuItem) => {
            if (searchHeight == "") {
              return menuItem;
            } else if (searchHeight == 10) {
              return menuItem.height <= 10;
            } else if (searchHeight == 30) {
              return menuItem.height > 10 && menuItem.height <= 30;
            } else if (searchHeight == 60) {
              return menuItem.height > 30 && menuItem.height <= 60;
            } else if (searchHeight == 61) {
              return menuItem.height >= 61;
            }
          })
          // .filter((menuItem) => {
          //   if (searchAvailable == "") {
          //     return menuItem;
          //   } else if (searchAvailable == "adopted") {
          //     return menuItem.adoptionStatus;
          //   } else if (searchAvailable == "available") {
          //     return !menuItem.adoptionStatus;
          //   }
          // })
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
                  <p>{`Status: ${menuItem.adoptionStatus}`}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menu;
