"use client";
import { styled, pxToEM } from "@/theme";
import { Box } from "@mui/material";

export const StyledAuthBox = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: ${pxToEM(20)};
  padding-left: 0;
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
