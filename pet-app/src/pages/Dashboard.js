import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../Context";

const Dashboard = () => {
  const { currentUser } = useContext(Context);

  return (
    <>
      <h1>Welcome to your pets dashboard {currentUser}</h1>
    </>
  );
};

export default Dashboard;
