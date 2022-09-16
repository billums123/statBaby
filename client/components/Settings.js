//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  CircularProgress,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";
import { ChildIdContext } from "../App";
import NavSpeedDial from "./NavSpeedDial";
import FeedingChartsContainer from "./FeedingChartsContainer";
import NapChartsContainer from "./NapChartsContainer";

// const StartButton = styled(Button)({
//   height: "20%",
//   marginTop: "15%",
//   marginBottom: "15%",
//   //   borderRadius: "10%"
//   //   margin: "10px",
// });
//exit if not logged in

const Settings = () => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [feedingsData, setFeedingsData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  if (!user) {
    return <Navigate replace to="/login" />;
  }
  const handleLogout = () => {
    setUser(null); //erase logout info
    setChildId(null); //erase logout info
    return <Navigate replace to="/login" />;
  };

  // }
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // width: "100%",
          // height: "15%",
        }}
      >
        {/* <Toolbar> */}
        {/* <Typography variant="h2" style={{  color: theme.palette.custom.dark }}> */}
        <div>
          <h2 style={{ color: theme.palette.custom.dark }}>StatBaby</h2>
        </div>

        {/* </Typography> */}
        {/* </Toolbar> */}
      </AppBar>
      {/* <div style={{display: 'flex', height: '100%', justifyContent:'center', alignItems:'center'}}> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Button
          xs={{ marginTop: "-20px" }}
          variant="contained"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      {/* </div> */}
      {/* {switchChecked ? <NapChartsContainer/> : <FeedingChartsContainer/>} */}
      <NavSpeedDial />
    </div>
  );
};

export default Settings;
