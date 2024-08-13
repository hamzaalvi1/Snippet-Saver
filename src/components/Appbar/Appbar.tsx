"use client";
import { theme } from "@/theme";

import { useSidebar } from "@/store";

import { DrawerWidth } from "@/constants";

import { Avatar, Box } from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";
import { StyledAppBar, StyledIconButton, StyledToolbar } from "./Appbar.style";

const Appbar: React.FC<{}> = (props) => {
  const { open, toggleOpen } = useSidebar();
  return (
    <StyledAppBar
      elevation={0}
      position="static"
      drawerWidth={open ? DrawerWidth.DEFAULT : DrawerWidth.MIN}
    >
      <StyledToolbar>
        <StyledIconButton
          color="primary"
          edge="start"
          aria-label="menu"
          onClick={toggleOpen}
        >
          <HiMenuAlt1 size={24} strokeWidth={0.5} />
        </StyledIconButton>
        <Box>My Application</Box>
        <Avatar
          sx={{ bgcolor: theme.palette.primary.main }}
          alt="Hamza Alvi"
          src="/broken-image.jpg"
        />
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Appbar;
