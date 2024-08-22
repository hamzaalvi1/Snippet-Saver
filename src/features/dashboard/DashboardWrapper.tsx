"use client";

import { useSidebar } from "@/store";
import { Appbar, Sidebar } from "@/components";
import {
  StyledDashboardContainer,
  StyledDashboardContentWrapper,
} from "./dashboard.styles";

import { DrawerWidth } from "@/constants";

import { useUserStore } from "@/store";
import { useMeQuery } from "@/queries/user.queries";

interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  const { open } = useSidebar();
  const setUser = useUserStore((state) => state.setUser);
  const _ = useMeQuery({ onSuccess: setUser });
  
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
