import { DashboardWrapper } from "@/features/dashboard";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
