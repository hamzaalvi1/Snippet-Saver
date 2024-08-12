import { pxToEM, styled, theme } from "@/theme";
import { AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  &.MuiAppBar-root {
    background-color: ${theme.palette.common.white};
    height: ${pxToEM(65)};
    max-height: ${pxToEM(65)};
    color: ${theme.palette.text.primary};
    border-bottom: 1px solid ${theme.palette.border.contrast};
  }
`;
