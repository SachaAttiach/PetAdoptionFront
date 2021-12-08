import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/doggo.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Adopt a Pet </h1>
        <p> Anything is Pawsible.</p>
        <Link to="/menu">
          <button> Click To Become a Pets Hero </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
