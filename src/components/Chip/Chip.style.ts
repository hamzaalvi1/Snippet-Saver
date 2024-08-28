import { Chip } from "@mui/material";
import { pxToEM, styled, theme } from "@/theme";

export const StyledChip = styled(Chip)`
  &.MuiChip-root {
    border-radius: ${pxToEM(5)};
    background-color: ${theme.palette.whiteVariants.light};
    font-size: ${pxToEM(14)};
  }
`;
