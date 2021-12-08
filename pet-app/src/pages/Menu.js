import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="menu">
      <h1 className="menuTitle">Search Pets</h1>
      <div className="SearchForm">
        <input
          type="text"
          placeholder="enter color"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="menuList">
        {MenuList.filter((menuItem) => {
          if (searchTerm == "") {
            return menuItem;
          } else if (menuItem.color.includes(searchTerm)) {
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
