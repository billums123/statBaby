//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Button,
  TableRow,
  TableCell,
  CircularProgress,
  TextField,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";
import { ChildIdContext } from "../App";
import { Delete } from "@mui/icons-material";

const FeedingItem = ({ startTime, endTime, feeding_id }) => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [dataLoaded, setDataLoaded] = useState(false);

const handleDeleteFeeding = (feeding_id) => {
  const deleteFeeding = async () => {
    const response = await fetch("api/feeding/", {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: feeding_id}),
    });
    const newData = await response.json();
    console.log("yayyy", newData);
    // if (newData) {
    //   setFeedingsData([...newData]);
    //   setTimeout(() => setDataLoaded(true), 1000);
    }
    if (user) {
      console.log("user logged in", user);
      deleteFeeding();
    }
  };


console.log("startTime", startTime, "endTime", endTime)
  return (
      <>
        <TableRow>
          <TableCell align="left">
            <TextField
              // select
              defaultValue={startTime}
              // onChange={handleChange}
            />
          </TableCell>
          <TableCell align="center">
            <TextField
              defaultValue={endTime}
              // onChange={handleChange}
            />
          </TableCell>
          <TableCell align="right">
            {/* <IconButton> */}
              <IconButton onClick={() => handleDeleteFeeding(feeding_id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      </>
  );
};

export default FeedingItem;
