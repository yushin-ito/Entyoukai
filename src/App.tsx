import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NProgress from "nprogress";
import { HelmetProvider } from "react-helmet-async";

import { LoadingProvider } from "./contexts";
import RootRouter from "./Router";
import theme from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      suspense: true,
      useErrorBoundary: true
    }
  }
});

NProgress.configure({
  showSpinner: false
});

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <RootRouter />
          </LoadingProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
