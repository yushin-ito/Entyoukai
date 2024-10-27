import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overscrollBehavior: "none",
      },
    },
  },
  fonts: {
    heading: "Inter, sans-serif;",
    body: "Inter, sans-serif;",
  },
  colors: {
    brand: "#010158",
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand",
      },
    },
    Heading: {
      baseStyle: {
        color: "brand",
      },
    },
    Button: {
      baseStyle: {
        color: "brand",
      },
    },
    Input: {
      baseStyle: {
        color: "brand",
      },
    },
  },
});

export default theme;
