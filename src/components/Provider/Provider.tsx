import { theme } from "@/theme";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = (props) => {
  const { children } = props;
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Provider;
