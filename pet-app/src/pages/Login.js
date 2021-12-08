import Anakin from "../assets/anakin.jpeg";
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

function Login() {
  const { openLogin, setOpenLogin, handleOpenLogin, handleCloseLogin } =
    useContext(Context);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  console.log(loginEmail, loginPassword);

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
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
          <Box sx={style}>
            <div className="contact">
              <div
                className="leftSide"
                style={{ backgroundImage: `url(${Anakin})` }}
              ></div>
              <div className="rightSide">
                <h1> Login </h1>
                {/* i could have issues from this being a form - check later */}
                <form id="contact-form" method="POST">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="Enter email..."
                    type="email"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password..."
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />

                  <button type="submit"> Login </button>
                </form>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Login;
