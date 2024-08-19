import {
  Box,
  Drawer,
  ListItemButton,
} from "@mui/material";
import { DrawerWidth } from "@/constants";
import { pxToEM, styled, theme } from "@/theme";
import { setPadding } from "@/utils/theme.utils";

export interface IStyledDrawerProps {
  open: boolean;
}

export const StyledDrawerWrapper = styled(Box)<{ open: boolean }>`
  padding-inline: ${(props) => (props.open ? pxToEM(15) : pxToEM(0))};
  @media (max-width: ${theme.breakpoints.values.md}px) {
    padding-inline: ${pxToEM(0)};
  }
`;

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "drawerWidth",
})<IStyledDrawerProps>`
  &.MuiDrawer-root {
    box-sizing: border-box;
    transition: all 0.5s ease;
    .MuiDrawer-paper {
      border-right: 2px solid ${theme.palette.whiteVariants.light};
      width: 100%;
      max-width: ${(props) =>
        props.open ? pxToEM(DrawerWidth.DEFAULT) : pxToEM(DrawerWidth.MIN)};
      box-sizing: border-box;
      padding-inline: ${(props) =>
        props.open ? setPadding(5) : setPadding(0)};
      background: ${theme.palette.common.white};
      transition: all 0.5s ease;

        @media(max-width:${theme.breakpoints.values.md}px) {
        width: "100%";
        max-width: ${pxToEM(DrawerWidth.MIN)};
        padding-inline:0   
                               
    
    }
  }
`;

export const StyledListItemButton = styled(ListItemButton)<{ open: boolean }>`
  &.MuiListItemButton-root {
    padding-block: ${setPadding(13)};
    border-bottom: 1px solid ${theme.palette.divider};
    transition: 0.25s;
    margin-bottom: ${pxToEM(2)};

    .MuiTypography-root {
      color: ${theme.palette.text.secondary};
      display: flex;
      align-items: center;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${(props) => (props.open ? pxToEM(14) : pxToEM(0))};
      padding-left: ${pxToEM(10)};
      transition: all 0.5s ease;

      @media (max-width: ${theme.breakpoints.values.md}px) {
        font-size: ${pxToEM(0)};
        padding-left: ${0};
        line-height: 0;
      }
    }

    &:hover {
      background-color: ${theme.palette.primary.main};
      border-radius: 5px;
      color: ${theme.palette.common.white};
      .MuiTypography-root {
        color: ${theme.palette.common.white};
      }
    }
    @media (max-width: ${theme.breakpoints.values.md}px) {
      justify-content: center;
    }
  }
  &.Mui-selected {
    border-radius: 5px;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.common.white};
    .MuiTypography-root {
      color: ${theme.palette.common.white};
    }
  }
`;


