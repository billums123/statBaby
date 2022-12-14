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

const StyledTextField = styled(TextField)({
  // height: "20%",
  // marginTop: "15%",
  marginBottom: "15%",
  fontSize: "sm",
  //   borderRadius: "10%"
  //   margin: "10px",
});

const DateFormat = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('en-US', { hour12: true});
};

const FeedingItem = ({ startTime, endTime, feeding_id, onDeleteFeeding }) => {
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
        body: JSON.stringify({ id: feeding_id }),
      });
      console.log("first ref");
      onDeleteFeeding();
      const newData = await response.json();
      //refetch page
    };
    if (user) {
      deleteFeeding();
    }
  };

  return (
    <>
      <TableRow>
        <TableCell align="left">
          <StyledTextField
            // select
            multiline
            defaultValue={DateFormat(startTime)}
            // onChange={handleChange}
          />
        </TableCell>
        <TableCell align="center">
          <StyledTextField
            multiline
            defaultValue={DateFormat(endTime)}
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
