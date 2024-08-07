"use client";
import { styled, pxToEM, theme } from "@/theme";
import { Box } from "@mui/material";

export const StyledAuthCard = styled(Box)`
  width: ${pxToEM(900)};
  height: ${pxToEM(600)};
  border-radius: 20px;
  background-color: ${theme.palette.common.white};
  box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
`;

export const StyledAuthContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;
