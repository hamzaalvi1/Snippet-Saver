import { DashboardWrapper } from "@/features/dashboard";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <main style={{ backgroundColor: "#f8f8f8" }}>
      <DashboardWrapper>{children}</DashboardWrapper>
    </main>
  );
};

export default DashboardLayout;
