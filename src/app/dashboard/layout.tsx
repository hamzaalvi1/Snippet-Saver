import { Suspense } from "react";
import { DashboardWrapper } from "@/features/dashboard";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
import DashboardSkeleton from "./loading";

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  return (
      <DashboardWrapper>{children}</DashboardWrapper>
  );
};

export default DashboardLayout;
