import { pxToEM, styled, baseFontProperties } from "@/theme";
import { Box } from "@mui/material";

export const StyledLogoWrapper = styled(Box)(({ theme }) => ({
  "&.logo-wrapper": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    gap: pxToEM(8),
    ".logo-img": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: baseFontProperties.fontSize2XL,
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      padding: pxToEM(4),
    },
  },
}));
