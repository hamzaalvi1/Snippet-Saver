import { Drawer, ListItemButton, Typography } from "@mui/material";
import { DrawerWidth } from "@/constants";
import { pxToEM, styled, theme, baseFontProperties } from "@/theme";
import { setPadding } from "@/utils/theme.utils";

export interface IStyledDrawerProps {
  open: boolean;
}

export const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) =>
    prop !== "drawerWidth",
})<IStyledDrawerProps>`
  &.MuiDrawer-root {
    width: 100%;
    max-width: ${(props) =>
      props.open ? pxToEM(DrawerWidth.DEFAULT) : pxToEM(DrawerWidth.MIN)};
    box-sizing: border-box;
    transition: all 0.5s ease;
    .MuiDrawer-paper {
      border-right: 2px solid ${theme.palette.whiteVariants.light};
      width: 100%;
      max-width: ${(props) =>
        props.open ? pxToEM(DrawerWidth.DEFAULT) : pxToEM(DrawerWidth.MIN)};
      box-sizing: border-box;
      padding-inline: ${setPadding(5)};
      background: ${theme.palette.common.white};
      transition: all 0.5s ease;
    }
  }
`;

export const StyledListItemButton = styled(ListItemButton)`
  &.MuiListItemButton-root {
    padding-block: ${setPadding(13)};
    padding-inline: 0;
    margin-inline: ${pxToEM(12)};
    border-bottom: 1px solid ${theme.palette.divider};
    transition: 0.25s;
    margin-bottom: ${pxToEM(2)};

    .MuiTypography-root {
      color: ${theme.palette.text.secondary};
      display: flex;
      align-items: center;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${pxToEM(14)};
      gap: ${pxToEM(10)};
      padding-left: ${pxToEM(10)};
    }

    &:hover {
      background-color: ${theme.palette.primary.main};
      border-radius: 5px;
      color: ${theme.palette.common.white};
      .MuiTypography-root {
        color: ${theme.palette.common.white};
      }
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

export const StyledMenuTitle = styled(Typography)`
  &.MuiTypography-root {
    font-size: ${baseFontProperties.fontSizeBase};
    font-weight: 800;
    color: ${theme.palette.primary.main};
    padding-inline: ${setPadding(9)};
    padding-top: ${setPadding(15)};
  }
`;
