import React from "react";
import { Button, TextField, Box, Stack } from "@mui/material";
import {styled} from '@mui/system';
import theme from "../theme";

const LoginTextField = styled(TextField)({
    minWidth: '75%',
    // backgroundColor: 'blue',
    margin: '10px'
  })

const Login = () => {
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
        <h1 style={{marginTop: '-15%', color: theme.palette.custom.dark}}>StatBaby</h1>
      <LoginTextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        // sx={{ width: "50vh" }}
      />
      <LoginTextField
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        // sx={{ width: "50vh" }}
      />
      <Button
    //   color={theme.palette.custom.dark}
      variant="contained"
      sx={{width: "75%", marginTop: "10px", color: theme.palette.custom.dark}}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
