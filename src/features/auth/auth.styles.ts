"use client";
import { Box, Typography } from "@mui/material";
import { styled, pxToEM, baseFontProperties, theme } from "@/theme";

export const StyledAuthBox = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: ${pxToEM(20)};
  padding-left: 0;
  
  @media(max-width:1199px){
  padding: ${pxToEM(15)};

`;

export const StyledAuthContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  //  box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
`;

export const StyledBgImagePane = styled(Box)`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/images/bg-auth.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

export const StyledForgotPassword = styled(Typography)`
  font-size: ${baseFontProperties.fontSizeSM};
  color: ${theme.palette.primary.main};
  cursor: pointer;
  text-align: right;
`;

export const StyledAuthText = styled(Typography)`
  color: ${theme.palette.text.secondary};
  font-size: ${pxToEM(15)};
  letter-spacing: ${pxToEM(0.25)};
  margin-block: ${pxToEM(15)};
  text-align: center;
  }
`;

export const StyledHighlightText = styled(Typography)`
  color: ${theme.palette.primary.main};
  cursor: pointer;
  font-weight: ${baseFontProperties.fontWeightSemiBold};
  display: inline; // Ensure it's rendered as an inline element
  &:hover {
    text-decoration: underline;
  }
`;
