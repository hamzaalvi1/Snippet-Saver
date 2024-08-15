"use client";
import { theme } from "@/theme";
import { Box, Typography } from "@mui/material";
import { StyledLogoWrapper } from "./Logo.style";
import { PiBracketsCurlyBold } from "react-icons/pi";

const Logo = () => {
  return (
    <StyledLogoWrapper className="logo-wrapper">
      <Box className="logo-img">
        <PiBracketsCurlyBold />
      </Box>
      <Typography
        display={"inline-flex"}
        alignItems={"baseline"}
        gap={6}
        variant="h3"
        fontWeight={800}
        color={theme.palette.primary.main}
      >
        Snippet{" "}
        <Typography
          fontSize={"inherit"}
          color={theme.palette.border.dark}
          fontWeight={700}
        >
          Saver
        </Typography>
      </Typography>
    </StyledLogoWrapper>
  );
};

export default Logo;
