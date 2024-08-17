"use client";
import { theme } from "@/theme";
import { Box, SxProps, Typography } from "@mui/material";
import { StyledLogoWrapper } from "./Logo.style";
import { PiBracketsCurlyBold } from "react-icons/pi";

interface ILogoProps {
  wrapperSx?: SxProps;
  showOnlyLogo?: boolean;
}
const Logo: React.FC<ILogoProps> = (props) => {
  const { wrapperSx, showOnlyLogo = false } = props;
  return (
    <StyledLogoWrapper className="logo-wrapper" sx={wrapperSx}>
      <Box className="logo-img">
        <PiBracketsCurlyBold />
      </Box>
      {!showOnlyLogo && (
        <Typography
          display={"inline-flex"}
          alignItems={"baseline"}
          gap={6}
          variant="h3"
          fontWeight={800}
          color={theme.palette.primary.main}
          sx={{
            "@media(max-width:767px)": { fontSize: 0 },
          }}
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
      )}
    </StyledLogoWrapper>
  );
};

export default Logo;
