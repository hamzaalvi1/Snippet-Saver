"use client";

import Image from "next/image";
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
          <Image
            alt="logo"
            width={55}
            height={55}
            src={"/assets/images/logo.png"}
          />
          <Typography>Snippet Saver</Typography>
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
