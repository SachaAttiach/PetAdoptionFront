import React, { useState, useContext } from "react";
import Register from "../pages/Register";
import Logo from "../assets/petLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { Context } from "../Context";

function Navbar() {
  const { open, handleOpen, currentUser, logout } = useContext(Context);

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <span className="register">
          {currentUser ? `Hello ${currentUser}` : `Nobody is logged in `}
        </span>
        {currentUser && (
          <Link to="/">
            <span className="register" onClick={logout}>
              Logout
            </span>
          </Link>
        )}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Search Pets </Link>
          <Link to="/profile"> Profile </Link>
          <Link to="/addpet"> Add Pet </Link>
          <span className="register" onClick={handleOpen}>
            Register/Login
          </span>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Search Pets </Link>
        <Link to="/profile"> Profile </Link>
        <Link to="/addpet"> Add Pet </Link>
        <span className="register" onClick={handleOpen}>
          Register/Login
        </span>
        {open && <Register />}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
