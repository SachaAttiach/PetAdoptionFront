import React, { useState, useContext } from "react";
import Register from "../pages/Register";
import Logo from "../assets/petLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";
import { Context } from "../Context";

function Navbar() {
  const { open, setOpen, handleOpen, handleClose } = useContext(Context);

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Search Pets </Link>
          <Link to="/about"> About </Link>
          <span className="register" onClick={handleOpen}>
            Register/Login
          </span>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Search Pets </Link>
        <Link to="/about"> About </Link>
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
