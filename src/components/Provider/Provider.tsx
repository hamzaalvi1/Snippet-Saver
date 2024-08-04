
interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default Provider;
