import { pxToEM, styled, theme } from "@/theme";
import { Box, Tabs, Tab } from "@mui/material";

export const StyledTagWrapper = styled(Box)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: ${pxToEM(55)};
  background-color: ${theme.palette.common.white};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${pxToEM(5)} ${pxToEM(10)};
  flex-wrap: nowrap;
`;

export const StyledTabs = styled(Tabs)`
  &.MuiTabs-root {
    align-items: center;
    flex: 0.9;
    .MuiTabs-scrollButtons {
      .MuiSvgIcon-root {
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.common.white};
        border-radius: 50%;
        cursor: pointer;
      }
      &.Mui-disabled {
        opacity: 0.5;
      }
    }
    .MuiTabs-indicator {
      display: none;
    }
  }
`;
export const StyledTab = styled(Tab)`
  &.MuiTab-root {
    text-transform: unset;
    font-size: ${pxToEM(14)};
    letter-spacing: 0.5px;
    font-weight: ${theme.typography.fontWeightMedium};
    color: ${theme.palette.text.secondary};
    padding-block: ${pxToEM(0)};
    margin-inline: ${pxToEM(2)};
    min-height: 40px;
    height: 40px;

    &:hover {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
      border-radius: 7px;
    }
    &.Mui-selected {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.common.white};
      border-bottom: none;
      border-radius: 7px;
    }
  }
`;
