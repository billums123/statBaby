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

const NapItem = ({ startTime, endTime, nap_id, onDeleteNap }) => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const handleDeleteNap = (nap_id) => {
    const deleteNap = async () => {
      const response = await fetch("api/nap/", {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: nap_id }),
      });
      console.log("first ref");
      onDeleteNap();
      const newData = await response.json();
      //refetch page
    };
    if (user) {
      deleteNap();
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
          <IconButton onClick={() => handleDeleteNap(nap_id)}>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default NapItem;
