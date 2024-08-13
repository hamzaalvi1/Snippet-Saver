"use client";
import { useSidebar } from "@/store";
import { Appbar, Sidebar } from "@/components";
import {
  StyledDashboardContainer,
  StyledDashboardContentWrapper,
} from "./dashboard.styles";
import { DrawerWidth } from "@/constants";

import { useMediaQuery } from "@mui/material";
interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { open } = useSidebar();
  const mobileScreen = useMediaQuery("(max-width:767px)");
  const { children } = props;
  return (
    <StyledDashboardContainer>
      <Sidebar
        open={open}
        variant={"permanent"}
      />

      <Appbar />
      <StyledDashboardContentWrapper
        width={open ? DrawerWidth.DEFAULT : DrawerWidth.MIN}
      >
        {children}
      </StyledDashboardContentWrapper>
    </StyledDashboardContainer>
  );
};

export default DashboardWrapper;
