//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";
import NavSpeedDial from "./NavSpeedDial";

const StartButton = styled(Button)({
  height: "20%",
  marginTop: "15%",
  marginBottom: "15%",
  //   borderRadius: "10%"
  //   margin: "10px",
});

const Naps = () => {
  const [user, setUser] = useContext(UserContext);
  const [children, setChildren] = useState({});

  //exit if not logged in
  if (!user) {
    return <Navigate replace to="/login" />;
  }
  useEffect(() => {
    //only run if change in user is not to null
    // const fetchChildren = async () => {
    //   const response = await fetch("api/child", {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ users_id: user }),
    //   });
    //   const newData = await response.json();
    //   if (newData) setChildren([...newData]);
    // };
    // if (user) {
    //   fetchChildren();
    // }
  }, []);

  // if(children ){

  // }
  return <Box>
    Naps Page
    <NavSpeedDial/>
  </Box>;
};

export default Naps;
