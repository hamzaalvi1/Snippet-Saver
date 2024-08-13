"use client";

import { Box } from "@mui/material";
import { StyledDrawer } from "./Sidebar.style";
import { IStyledDrawerProps } from "./Sidebar.style";
interface ISidebarProps extends IStyledDrawerProps {
  variant?: "permanent" | "persistent" | "temporary";
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { open, variant = "permanent" } = props;

  return (
    <StyledDrawer elevation={1} open={open} variant={variant} anchor="left">
      <Box padding={10}></Box>
    </StyledDrawer>
  );
};

export default Sidebar;
