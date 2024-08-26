"use client";

import { Appbar, Sidebar } from "@/components";
import {
  StyledDashboardContainer,
  StyledDashboardContentWrapper,
} from "./dashboard.styles";

import { DrawerWidth } from "@/constants";

import { useMeQuery } from "@/queries/user.queries";
import { useUserStore, useSidebarStore } from "@/store";

interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  const { open } = useSidebarStore((state) => state);
  const { setUser, getUser } = useUserStore((state) => state);
  const _ = useMeQuery({ enabled: !getUser(), onSuccess: setUser });
  return (
    <StyledDashboardContainer>
      <Sidebar />
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
