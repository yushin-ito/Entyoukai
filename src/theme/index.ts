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
