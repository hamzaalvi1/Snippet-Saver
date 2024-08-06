
import { StyledAuthContainer } from "./features/authLayout.style";
interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
  const { children } = props;
  return <StyledAuthContainer>{children}</StyledAuthContainer>;
};

export default AuthLayout;
