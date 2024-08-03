// mantine ui core css
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = (props) => {
  const { children } = props;
  return <MantineProvider>{children}</MantineProvider>;
};

export default Provider;
