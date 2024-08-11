"use client";

interface IDashboardProps {
  children: React.ReactNode;
}
const DashboardWrapper: React.FC<IDashboardProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default DashboardWrapper;
