import React, { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import {
  BarChart,
  Crib,
  Home,
  Restaurant,
  Settings,
} from "@mui/icons-material";
import { styled } from "@mui/system";
import theme from "../theme";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  marginTop: "5px",
});
const actions = [
  {
    icon: (
      <Link to="/">
        <Home />
      </Link>
    ),
    name: "Home",
  },
  {
    icon: (
      <StyledLink to="/charts">
        <BarChart />
      </StyledLink>
    ),
    name: "Charts",
  },
  {
    icon: (
      <StyledLink to="/naps">
        <Crib />
      </StyledLink>
    ),
    name: "Naps",
  },
  {
    icon: (
      <StyledLink to="/feedings">
        <Restaurant />
      </StyledLink>
    ),
    name: "Feedings",
  },
  {
    icon: (
      <StyledLink to="/settings">
        <Settings />
      </StyledLink>
    ),
    name: "Settings",
  },
];

export default function NavSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Stat Baby Menu"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
      {/* <Outlet /> */}
    </div>
  );
}
