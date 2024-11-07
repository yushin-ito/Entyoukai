import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import Router from "./Router";
import theme from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false
    }
  }
});

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
