import React, { useContext } from "react";
import { Link } from "react-router-dom";
import dogLanding from "../assets/landing.gif";
import "../styles/Home.css";
import { Context } from "../Context";

function Landing() {
  const { handleOpen } = useContext(Context);
  return (
    <div className="home" style={{ backgroundImage: `url(${dogLanding})` }}>
      <div className="headerContainer">
        <h1> Adopt a Pet </h1>
        <p> Anything is Pawsible.</p>
        <button onClick={handleOpen}> Click To Become a Pets Hero </button>
      </div>
    </div>
  );
}

export default Landing;
