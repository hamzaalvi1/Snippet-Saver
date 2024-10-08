import { Box } from "@mui/material";
import { styled, pxToEM, theme } from "@/theme";

export const StyledSearchBoxWrapper = styled(Box)`
  background-color: ${theme.palette.whiteVariants.light};
  border-radius: 40px;
  flex: 0.5;
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    flex: 0.8;
    .MuiButtonBase-root {
      display: none;
    }
  }
`;
