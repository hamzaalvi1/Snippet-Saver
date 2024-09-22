import { Suspense } from "react";
import { DashboardWrapper } from "@/features/dashboard";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  return (
    <Suspense fallback={<>Loading.....</>}>
      <DashboardWrapper>{children}</DashboardWrapper>
    </Suspense>
  );
};

export default DashboardLayout;
