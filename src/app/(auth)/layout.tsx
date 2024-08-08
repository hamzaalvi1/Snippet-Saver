import { AuthWrapper } from "@/features/auth";
interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
  const { children } = props;
  return <AuthWrapper>{children}</AuthWrapper>;
};

export default AuthLayout;
