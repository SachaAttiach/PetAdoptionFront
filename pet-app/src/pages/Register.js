import Harri from "../assets/harri.jpeg";
import "../styles/Register.css";
import React, { useContext } from "react";
import { Context } from "../Context";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Login from "./Login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  number: yup.number().positive().integer().required(),
  password: yup.string().required(),
  confirmpassword: yup.string().oneOf([yup.ref("password"), null]),
});

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
    registerPassword,
    registerConfirmPassword,
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

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
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
                <form onSubmit={handleSubmit(submitForm)} id="contact-form">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    name="firstname"
                    placeholder="Enter first name..."
                    type="text"
                    ref={register}
                    onChange={(event) => {
                      setRegisterFirstName(event.target.value);
                    }}
                  />
                  {/* <p>{errors.firstname?.message}</p> */}
                  <label className="lastnamelabel" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    name="lastname"
                    placeholder="Enter last name..."
                    type="text"
                    ref={register}
                    onChange={(event) => {
                      setRegisterLastName(event.target.value);
                    }}
                  />
                  <p>{errors.lastname?.message}</p>

                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    placeholder="Enter email..."
                    type="email"
                    ref={register}
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}
                  />
                  <p>{errors.email?.message}</p>
                  <label htmlFor="number">Phone Number</label>
                  <input
                    name="number"
                    placeholder="Enter phone number..."
                    type="number"
                    ref={register}
                    onChange={(event) => {
                      setRegisterNumber(event.target.value);
                    }}
                  />
                  <p>{errors.number?.message}</p>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password..."
                    ref={register}
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}
                  />
                  <p>{errors.password?.message}</p>
                  <label htmlFor="confirmpassword">Confirm Password</label>
                  <input
                    name="confirmpassword"
                    type="password"
                    placeholder="Password..."
                    ref={register}
                    onChange={(event) => {
                      setRegisterConfirmPassword(event.target.value);
                    }}
                  />
                  <p>{errors.confirmpassword && "Passwords don't match!"}</p>
                  <button onClick={createUser}>Register</button>
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
