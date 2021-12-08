import Harri from "../assets/harri.jpeg";
import "../styles/Register.css";
import React, { useState, useContext } from "react";
import { Context } from "../Context";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Login from "./Login";

function Register() {
  const { open, setOpen, handleOpen, handleClose, openLogin, handleOpenLogin } =
    useContext(Context);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="contact">
              <div
                className="leftSide"
                style={{ backgroundImage: `url(${Harri})` }}
              ></div>
              <div className="rightSide">
                <h1> Register </h1>
                {/* i could have issues from this being a form - check later */}
                <form id="contact-form" method="POST">
                  <label htmlFor="name">First Name</label>
                  <input
                    name="fname"
                    placeholder="Enter first name..."
                    type="text"
                    onChange={(event) => {
                      setRegisterFirstName(event.target.value);
                    }}
                  />
                  <label htmlFor="name">Last Name</label>
                  <input
                    name="lname"
                    placeholder="Enter last name..."
                    type="text"
                    onChange={(event) => {
                      setRegisterLastName(event.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="Enter email..."
                    type="email"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setRegisterConfirmPassword(event.target.value);
                    }}
                  />
                  <button type="submit"> Register </button>
                </form>
                <div className="loginFeature">
                  <h3>Already have an account?</h3>
                  <button className="loginButton" onClick={handleOpenLogin}>
                    Login
                  </button>
                </div>
                {openLogin && <Login />}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Register;
