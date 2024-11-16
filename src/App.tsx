import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <Global
              styles={`
                @font-face {
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 500;
                  src: url('/fonts/inter/medium.woff2') format('woff2');
                  display: swap;
                }
                @font-face {
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 600;
                  src: url('/fonts/inter/semibold.woff2') format('woff2');
                  display: swap;
                }
                @font-face {
                  font-family: 'Noto Sans JP';
                  font-style: normal;
                  font-weight: 500;
                  src: url('/fonts/noto-sans-jp/medium.woff2') format('woff2');
                  display: swap;
                }
                @font-face {
                  font-family: 'Noto Sans JP';
                  font-style: normal;
                  font-weight: 600;
                  src: url('/fonts/noto-sans-jp/semibold.woff2') format('woff2');
                  display: swap;
                }
              `}
            />
            <RootRouter />
          </LoadingProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
