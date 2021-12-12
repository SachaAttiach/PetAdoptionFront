import Harri from "../assets/harri.jpeg";
import "../styles/Register.css";
import React, { useContext } from "react";
import { Context } from "../Context";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Login from "./Login";


function Register() {
  const {
    open,
    handleClose,
    openLogin,
    handleOpenLogin,
    setRegisterEmail,
    setRegisterPassword,
    setRegisterConfirmPassword,
    setRegisterFirstName,
    setRegisterLastName,
    setRegisterNumber,
    createUser,
  } = useContext(Context);

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
                <h1 className="registertext"> Register </h1>
                {/* i could have issues from this being a form - check later */}
                <form id="contact-form">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    name="firstname"
                    placeholder="Enter first name..."
                    type="text"
                    onChange={(event) => {
                      setRegisterFirstName(event.target.value);
                    }}
                  />
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    name="lastname"
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
                  <label htmlFor="number">Phone Number</label>
                  <input
                    name="number"
                    placeholder="Enter phone number..."
                    type="number"
                    onChange={(event) => {
                      setRegisterNumber(event.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    name="confirmpassword"
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setRegisterConfirmPassword(event.target.value);
                    }}
                  />
                  <button onClick={createUser}> Register </button>
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
