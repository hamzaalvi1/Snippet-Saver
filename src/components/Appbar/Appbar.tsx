"use client";
import { StyledAppBar } from "./Appbar.style";
import { RiMenu3Line } from "react-icons/ri";
import { IconButton, Toolbar, Typography } from "@mui/material";
const Appbar = () => {
  return (
    <StyledAppBar elevation={0} position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
          <RiMenu3Line size={22} />
        </IconButton>
        {/* <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Application
        </Typography> */}
        <button color="inherit">Login</button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Appbar;
