"use client";

import { pxToEM } from "@/theme";

import { sideBarConfig } from "./SidebarConfig";

import Logo from "../Logo/Logo";
import MenuItem from "./MenuItem";
import { List, Toolbar } from "@mui/material";
import {
  StyledDrawer,
  StyledDrawerWrapper,
  IStyledDrawerProps,
} from "./Sidebar.style";

interface ISidebarProps extends IStyledDrawerProps {
  variant?: "permanent" | "persistent" | "temporary";
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  const { open, variant = "permanent" } = props;

  return (
    <StyledDrawer elevation={2} open={open} variant={variant} anchor="left">
      <StyledDrawerWrapper open={open}>
        <Toolbar
          sx={{
            justifyContent: open ? "flex-start" : "center",
            "@media(max-width:767px)": { justifyContent: "center" },
          }}
        >
          <Logo
            wrapperSx={{ margin: `${pxToEM(10)} 0 ${pxToEM(20)}` }}
            showOnlyLogo={open ? false : true}
          />
        </Toolbar>

        <List disablePadding={true}>
          {sideBarConfig.map((item, idx) => {
            return <MenuItem {...item} key={idx} />;
          })}
        </List>
      </StyledDrawerWrapper>
    </StyledDrawer>
  );
};

export default Sidebar;
