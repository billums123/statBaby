//NEED TO INDCLUDE SHOW PASSWORD OPTION
import React, { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Button,
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";
import { UserContext } from "../App";
import { ChildIdContext } from "../App";
import NapItem from "./NapItem";
import NavSpeedDial from "./NavSpeedDial";

const StartButton = styled(Button)({
  height: "20%",
  marginTop: "15%",
  marginBottom: "15%",
  //   borderRadius: "10%"
  //   margin: "10px",
});

const Naps = () => {
  const [user, setUser] = useContext(UserContext);
  const [childId, setChildId] = useContext(ChildIdContext);
  const [napsData, setNapsData] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  //exit if not logged in
  if (!user) {
    return <Navigate replace to="/login" />;
  }

  const fetchNaps = async () => {
    const response = await fetch("api/nap/list", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ child_info_id: childId }),
    });
    const newData = await response.json();
    if (newData) {
      setNapsData([...newData]);
      setTimeout(() => setDataLoaded(true), 1000);
    }
  };
  
  useEffect(() => {
    //only run if change in user is not to null
    // console.log("childID", childId);
    if (user) {
      // console.log("user logged in", user);
      fetchNaps();
    }
  }, []);
  console.log("data", napsData);

  // if(children ){

  // }
  return (
    <div>
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Start Time</TableCell>
                <TableCell align="center">End Time</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            {!dataLoaded ? (
              <CircularProgress
                sx={{ position: "fixed", top: "45%", left: "45%" }}
              />
            ) : (
              <TableBody>
                {/* T */}
                {napsData.map((nap) => (
                  <NapItem
                    startTime={nap.nap_start}
                    endTime={nap.nap_end}
                    nap_id={nap.id}
                    // onUpdateTag={fetchFeedings}
                    onDeleteNap={fetchNaps}
                    key={(nap.id + nap.nap_start).toString()}
                  />
                ))}
              </TableBody>
            )}
          </Table>
      <NavSpeedDial />
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Naps;
