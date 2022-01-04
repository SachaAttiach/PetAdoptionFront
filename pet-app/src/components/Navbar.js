import React, { useState, useContext } from "react";
import Register from "../pages/Register";
import Logo from "../assets/petLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { Context } from "../Context";

function Navbar() {
  const { open, handleOpen, currentUser, logout, authenticated } =
    useContext(Context);

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link exact to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <span className="register">
          {authenticated && `Hello ${currentUser.firstname}`}
        </span>
        {authenticated && (
          <Link to="/">
            <span className="register" onClick={logout}>
              Logout
            </span>
          </Link>
        )}
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Search Pets </Link>
          {currentUser.admin && <Link to="/admin"> Admin </Link>}
          <span className="register" onClick={handleOpen}>
            Register/Login
          </span>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Search Pets </Link>
        {currentUser.admin && <Link to="/admin"> Admin </Link>}
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
