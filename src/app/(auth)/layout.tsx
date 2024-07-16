interface IAuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main className="h-screen w-full flex justify-center items-center bg-primary-bg-color">
      {children}
    </main>
  );
};

export default AuthLayout;
