import { ChakraProvider } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
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
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchOnMount: true,
      suspense: true
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
          <Global
            styles={css`
              #nprogress .bar {
                background: #010158;
                height: 3px;
              }

              #nprogress .peg {
                display: none;
              }

              @media (min-width: 30em) {
                #nprogress .bar {
                  height: 6px;
                }
              }

              @media (hover: none) {
                .chakra-button:hover,
                .chakra-icon-button:hover
              }
            `}
          />
          <LoadingProvider>
            <RootRouter />
          </LoadingProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
