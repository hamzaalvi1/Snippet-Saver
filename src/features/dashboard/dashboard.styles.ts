import { styled, theme } from "@/theme";
import { setPadding } from "@/utils/theme.utils";

import { Box } from "@mui/material";

import { DrawerWidth } from "@/constants";
export const StyledDashboardContainer = styled(Box)`
  width: 100%;
  height: 100vh;
  background-color: #f1f6ff;
`;

export const StyledDashboardContentWrapper = styled(Box)<{ width: number }>`
  width: 100%;
  max-width: calc(100% - ${(props) => props.width}px);
  padding: ${setPadding(20)};
  margin-left: auto;
  height: 100%;
  max-height: calc(100% - 70px);
  transition: all 0.5s ease;

  @media (max-width: ${theme.breakpoints.values.md}px) {
    max-width: calc(100% - ${DrawerWidth.MIN}px);
  }
`;
