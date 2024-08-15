"use client";

import Logo from "../Logo/Logo";
import MenuItem from "./MenuItem";
import { sideBarConfig } from "./SidebarConfig";
import { StyledDrawer } from "./Sidebar.style";
import { Box, List, Toolbar, Typography } from "@mui/material";
import { IStyledDrawerProps, StyledMenuTitle } from "./Sidebar.style";
interface ISidebarProps extends IStyledDrawerProps {
  variant?: "permanent" | "persistent" | "temporary";
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { open, variant = "permanent" } = props;

  return (
    <StyledDrawer elevation={2} open={open} variant={variant} anchor="left">
      <Box paddingBlock={10}>
        <Toolbar>
          <Logo />
          
        </Toolbar>
        {/* <StyledMenuTitle>Quick Links</StyledMenuTitle> */}
        <List disablePadding={true}>
          {sideBarConfig.map((item, idx) => {
            return <MenuItem {...item} key={idx} />;
          })}
        </List>
      </Box>
      {/* <StyledMenuTitle>Languages</StyledMenuTitle> */}
    </StyledDrawer>
  );
};

export default Sidebar;
