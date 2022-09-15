//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";

const StartButton = styled(Button)({
  height: "20%",
  marginTop: "15%",
  marginBottom: "15%"
//   margin: "10px",
});

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  const [children, setChildren] = useState({});

  //exit if not logged in
  if (!user) {
    return <Navigate replace to="/login" />;
  }
  useEffect(() => {
    //only run if change in user is not to null
    const fetchChildren = async () => {
      const response = await fetch("api/child", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users_id: user }),
      });
      const newData = await response.json();
      if (newData) setChildren([...newData]);
    };
    if (user) {
        fetchChildren();
    }
  }, [children]);
  
// if(children ){

    console.log(children[0])
// }
return (
    <Box
    display="flex"
      //   margin="auto"
      height="100vh"
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      //   component="form"
      //   backgroundColor="blue"
    >
      <StartButton
        variant="contained"
        label = "Children"
        sx={{
          width: "75%",
          marginTop: "20px",
          color: theme.palette.custom.dark,
        }}
      >
        {"Start Feeding"}
      </StartButton>
      <StartButton
        variant="contained"
        label = "Children"
        sx={{
          width: "75%",
          marginTop: "20px",
          color: theme.palette.custom.dark,
        }}
        >
          {"Start Nap"}
      </StartButton>
    </Box>
  );
};

export default Home;
