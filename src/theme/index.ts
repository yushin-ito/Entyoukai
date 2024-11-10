import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overscrollBehavior: "none"
      },
      "*, *::before, &::after": {
        WebkitTapHighlightColor: "transparent"
      },
      img: {
        "-webkit-user-drag": "none",
        userDrag: "none",
        pointerEvents: "none",
        touchAction: "none"
      }
    }
  },
  colors: {
    brand: "#010158",
    info: "#3182ce",
    success: "#38a169",
    error: "#e53e3e"
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand",
        lineHeight: { base: "1.5", sm: "1.8" }
      }
    },
    Heading: {
      baseStyle: {
        color: "brand"
      }
    },
    Button: {
      baseStyle: {
        color: "brand"
      }
    },
    Input: {
      baseStyle: {
        color: "brand"
      }
    }
  }
});

export default theme;
