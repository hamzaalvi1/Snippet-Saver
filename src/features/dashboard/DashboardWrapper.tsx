"use client";

import { useSidebar } from "@/store";
import { Appbar, Sidebar } from "@/components";
import {
  StyledDashboardContainer,
  StyledDashboardContentWrapper,
} from "./dashboard.styles";

import { DrawerWidth } from "@/constants";

interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  const { open } = useSidebar();

  return (
    <StyledDashboardContainer>
      <Sidebar open={open} variant={"permanent"} />

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
