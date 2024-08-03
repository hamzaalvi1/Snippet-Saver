interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default DashboardLayout;
