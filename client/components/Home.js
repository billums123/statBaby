//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Button, TextField, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";
import { ChildIdContext } from "../App";
import NavSpeedDial from "./NavSpeedDial";

const StartButton = styled(Button)({
  height: "20%",
  marginTop: "15%",
  marginBottom: "15%",
  //   borderRadius: "10%"
  //   margin: "10px",
});

function toIsoString(date) {
  var tzo = -date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
          return (num < 10 ? '0' : '') + num;
      };

  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(Math.floor(Math.abs(tzo) / 60)) +
      ':' + pad(Math.abs(tzo) % 60);
}

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [children, setChildren] = useState({});
  const [timerStartStatus, setTimerStartStatus] = useState({
    feedingTimer: false,
    napTimer: false,
  });
  const [feedingStatus, setFeedingStatus] = useState({
    feedingStart: null,
    feedingEnd: null,
  });
  const [napStatus, setNapStatus] = useState({
    napStart: null,
    napEnd: null,
  });

  //make fetch request once timerStartStatus end times don't equal 0.
  useEffect(() => {
    if (feedingStatus.feedingEnd) {
      handleEndOfActivity("feeding");
    }
    if (napStatus.napEnd) {
      handleEndOfActivity("nap");
    }
  }, [feedingStatus.feedingEnd, napStatus.napEnd]);

  //make post request to db with data on latest feeding or nap
  const handleEndOfActivity = (typeOfActivity) => {
    let body;
    if (typeOfActivity === "feeding")
      body = {
        feeding_start: feedingStatus.feedingStart,
        feeding_end: feedingStatus.feedingEnd,
        child_info_id: children[0].id,
      };
    if (typeOfActivity === "nap")
      body = {
        nap_start: napStatus.napStart,
        nap_end: feedingStatus.feedingEnd,
        child_info_id: children[0].id,
      };
    console.log("body", body);
    fetch(`api/${typeOfActivity}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data added successfully!", data);
        //reset states
        type === "feeding"
          ? setFeedingStatus({ feedingStart: null, feedingEnd: null })
          : setNapStatus({ napStart: null, napEnd: null });
      });
  };

  const handleTimers = (e) => {
    let currentTime = new Date();
    if (e.target.id === "feeding") {
      if (timerStartStatus.feedingTimer === false) {
        setTimerStartStatus({ ...timerStartStatus, feedingTimer: true });
        setFeedingStatus({
          ...feedingStatus,
          feedingStart: toIsoString(currentTime),
        });
      } else {
        setTimerStartStatus({ ...timerStartStatus, feedingTimer: false });
        setFeedingStatus({
          ...feedingStatus,
          feedingEnd: toIsoString(currentTime),
        });
      }
    }
    if (e.target.id === "nap") {
      if (timerStartStatus.napTimer === false) {
        setTimerStartStatus({ ...timerStartStatus, napTimer: true });
        setNapStatus({ ...napStatus, napStart: currentDate.toString() });
      } else {
        setTimerStartStatus({ ...timerStartStatus, napTimer: false });
        setNapStatus({ ...napStatus, napEnd: currentDate.toString() });
      }
    }
  };
  //   console.log(feedingStatus, napStatus);

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
      if (newData) {
        //store first child id in childIdContext
        setChildId(newData[0].id)
        setChildren([...newData])
      };
    };
    if (user) {
      fetchChildren();
    }
  }, []);

  // if(children ){

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
        id="feeding"
        variant="contained"
        label="Children"
        onClick={handleTimers}
        sx={{
          width: "75%",
          marginTop: "20px",
          color: timerStartStatus.feedingTimer
            ? theme.palette.secondary.light
            : theme.palette.custom.dark,
          backgroundColor: timerStartStatus.feedingTimer
            ? theme.palette.custom.dark
            : theme.palette.primary.main,
        }}
      >
        {timerStartStatus.feedingTimer ? "End Feeding" : "Start Feeding"}
      </StartButton>
      <StartButton
        id="nap"
        variant="contained"
        label="Children"
        onClick={handleTimers}
        sx={{
          width: "75%",
          marginTop: "20px",
          color: timerStartStatus.napTimer
            ? theme.palette.secondary.light
            : theme.palette.custom.dark,
          backgroundColor: timerStartStatus.napTimer
            ? theme.palette.custom.dark
            : theme.palette.primary.main,
        }}
      >
        {timerStartStatus.napTimer ? "End Nap" : "Start Nap"}
      </StartButton>
      <NavSpeedDial/>
    </Box>
  );
};

export default Home;
