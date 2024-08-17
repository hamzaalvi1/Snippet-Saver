import { pxToEM, styled, theme } from "@/theme";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { DrawerWidth } from "@/constants";

export interface IStyledAppbarProps {
  drawerWidth: number;
}
export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "drawerWidth",
})<IStyledAppbarProps>`
  &.MuiAppBar-root {
    background-color: ${theme.palette.common.white};
    height: 100%;
    max-height: ${pxToEM(70)};
    color: ${theme.palette.text.primary};
    border-bottom: 1px solid ${theme.palette.whiteVariants.light};
    padding-inline: ${pxToEM(25)};
    margin-left: auto;
    width: 100%;
    max-width: calc(100% - ${(props) => props.drawerWidth}px);
    transition: all 0.5s ease;

    @media (max-width: ${theme.breakpoints.values.md}px) {
       max-width: calc(100% - ${DrawerWidth.MIN}px);
    }
  }
`;

export const StyledToolbar = styled(Toolbar)`
  &.MuiToolbar-root {
    justify-content: space-between;
  }
`;

export const StyledIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    background-color: ${theme.palette.whiteVariants.light};
  }
`;
