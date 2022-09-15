//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";

// const navigate = useNavigate();
const LoginTextField = styled(TextField)({
  minWidth: "75%",
  margin: "10px",
});

const Login = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    username: "",
    password: "",
  });
  console.log(useContext(UserContext));
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  const handleLoginFormUpdate = (e) => {
    e.target.id === "username"
    ? setUserLoginInfo({ ...userLoginInfo, username: e.target.value })
      : setUserLoginInfo({ ...userLoginInfo, password: e.target.value });
  };

  const handleLoginButton = (e) => {
    fetch("api/user/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLoginInfo),
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.err) {
        setUser(data); //set user id to global context if login is successful
        navigate("/");
        } //navigate to home}
        else {
          console.log("login unsuccessful!");
        }
      });
  };
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
      <h1 style={{ marginTop: "-15%", color: theme.palette.custom.dark }}>
        StatBaby
      </h1>
      <LoginTextField
        id="username"
        label="Username"
        variant="outlined"
        onChange={handleLoginFormUpdate}
        // sx={{ width: "50vh" }}
      />
      <LoginTextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        onChange={handleLoginFormUpdate}
        // sx={{ width: "50vh" }}
      />
      <Button
        variant="contained"
        sx={{
          width: "75%",
          marginTop: "20px",
          color: theme.palette.custom.dark,
        }}
        onClick={handleLoginButton}
      >
        Login
      </Button>

      <Button
        variant="Outlined"
        sx={{
          width: "75%",
          marginTop: "10px",
          color: theme.palette.custom.dark,
        }}
      >
        Create an Account
      </Button>
    </Box>
  );
};

export default Login;
