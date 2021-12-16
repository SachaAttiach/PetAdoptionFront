import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/doggo.jpeg";
import "../styles/Home.css";
import { Context } from "../Context";

function Home() {
  const { handleOpen, currentUser } = useContext(Context);
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome {currentUser} </h1>
        <br />
        <br />
        <br />
        <br />
        <Link exact to="/menu">
          <button> Search For Pets </button>
        </Link>
        <button style={{ marginLeft: "5%" }}> My Pets Page </button>
      </div>
    </div>
  );
}

export default Home;
