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

  const fetchFeedings = async () => {
    const response = await fetch("api/feeding/list", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ child_info_id: childId }),
    });
    const newData = await response.json();
    if (newData) {
      setFeedingsData([...newData]);
      setTimeout(() => setDataLoaded(true), 500);
    }
  };

  useEffect(() => {
    //only run if change in user is not to null
    // console.log("childID", childId);
    if (user) {
      // console.log("user logged in", user);
      fetchFeedings();
    }
  }, []);

console.log('dataFeed', feedingsData)
  // }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!dataLoaded ? (
        <CircularProgress sx={{ position: "fixed", top: "45%", left: "45%" }} />
      ) : (
        <Grid container spacing={4} columns={4} sx={{ width: "90%" }}>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
          <Grid item xs={4}>
            <TotalFeedTimeChart feedingsData={feedingsData} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default FeedingChartsContainer;
