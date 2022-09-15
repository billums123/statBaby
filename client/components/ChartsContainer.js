//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Switch,
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

const ChartsContainer = () => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [feedingsData, setFeedingsData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  if (!user) {
    return <Navigate replace to="/login" />;
  }
  const handleSwitchChange = (e) => {
    setSwitchChecked(e.target.checked);
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
        <Toolbar>
          <Typography sx={{ marginRight: "10px" }}> Feedings </Typography>
          <Switch
            checked={switchChecked}
            onChange={handleSwitchChange}
            color="secondary"
          />
          <Typography sx={{ marginLeft: "10px" }}> Naps </Typography>
        </Toolbar>
      </AppBar>
          {switchChecked ? <NapChartsContainer/> : <FeedingChartsContainer/>}
      <NavSpeedDial />
    </div>
  );
};

export default ChartsContainer;
