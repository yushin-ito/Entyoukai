import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overscrollBehavior: "none",
      },
    },
  },
  colors: {
    brand: "#010158",
    info: "#3182ce",
    success: "#38a169",
    error: "#e53e3e",
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
