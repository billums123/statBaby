//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
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
import { TotalFeedTimeChart } from "./feedingCharts/TotalFeedTimeChart";

// const StartButton = styled(Button)({
//   height: "20%",
//   marginTop: "15%",
//   marginBottom: "15%",
//   //   borderRadius: "10%"
//   //   margin: "10px",
// });

const FeedingChartsContainer = () => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [feedingsData, setFeedingsData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  //exit if not logged in
  if (!user) {
    return <Navigate replace to="/login" />;
  }

  // }
  return (
    <div>
      <TotalFeedTimeChart/>
    </div>
  );
};

export default FeedingChartsContainer;
