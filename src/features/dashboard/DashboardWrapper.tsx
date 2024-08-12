"use client";
import { Appbar } from "@/components";
import { StyledDashboardContainer } from "./dashboard.styles";

interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  return (
    <StyledDashboardContainer>
      <Appbar />
      {children}
    </StyledDashboardContainer>
  );
};

export default DashboardWrapper;
