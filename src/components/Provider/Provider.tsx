"use client";
import { theme } from "@/theme";
import { Toaster } from "react-hot-toast";
import { getQueryClient } from "@/queries";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
interface IProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<IProviderProps> = (props) => {
  const { children } = props;
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <Toaster />
        {process.env.NODE_ENV !== "production" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
};

export default Provider;
