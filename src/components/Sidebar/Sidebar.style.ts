import { Drawer } from "@mui/material";
import { DrawerWidth } from "@/constants";
import { pxToEM, styled } from "@/theme";

export interface IStyledDrawerProps {
  open: boolean;
}

export const StyledDrawer = styled(Drawer)<IStyledDrawerProps>`
  &.MuiDrawer-root {
    border-right-width: 0;
    width: 100%;
    max-width: ${(props) =>
      props.open ? pxToEM(DrawerWidth.DEFAULT) : pxToEM(DrawerWidth.MIN)};
    box-sizing: border-box;
    transition: all 0.5s ease;

    .MuiDrawer-paper {
      border-right-width: 0;
      width: 100%;
      max-width: ${(props) =>
        props.open ? pxToEM(DrawerWidth.DEFAULT) : pxToEM(DrawerWidth.MIN)};
      box-sizing: border-box;
      transition: all 0.5s ease;
    }
  }
`;
