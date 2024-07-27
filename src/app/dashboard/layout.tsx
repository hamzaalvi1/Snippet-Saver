import { Sidebar } from "@/components/Sidebar";
interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <main className="w-full flex">
      <Sidebar />
      <div className="w-[85%]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
