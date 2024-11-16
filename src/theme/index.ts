import { extendTheme } from "@chakra-ui/react";

import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/500.css";
import "@fontsource/noto-sans-jp/600.css";
import "@fontsource/noto-sans-jp/700.css";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overscrollBehavior: "none"
      },
      body: {
        overflowY: "scroll"
      },
      "*, *::before, *::after": {
        WebkitTapHighlightColor: "rgba(1, 1, 88, 0.1)"
      },
      "#nprogress .bar": {
        background: "#010158",
        height: { base: "3px", md: "6px" }
      },
      "#nprogress .peg": {
        display: "none"
      }
    }
  },
  fonts: {
    body: "Inter, Noto Sans JP, sans-serif",
    heading: "Inter, Noto Sans JP, sans-serif"
  },

  colors: {
    brand: {
      50: "#e6e6f2",
      100: "#b3b3d1",
      200: "#8080b0",
      300: "#4d4d8f",
      400: "#1a1a6e",
      500: "#010158",
      600: "#01014d",
      700: "#010142",
      800: "#000037",
      900: "#00002d"
    },
    info: "#3182ce",
    success: "#38a169",
    error: "#e53e3e"
  },
  fontWeights: {
    medium: 500,
    semibold: 600,
    bold: 700
  },
  components: {
    Text: {
      baseStyle: {
        color: "brand.500",
        fontWeight: "500",
        lineHeight: { base: "1.5", md: "1.75" }
      }
    },
    Heading: {
      baseStyle: {
        color: "brand.500",
        fontWeight: "700"
      }
    },
    Button: {
      variants: {
        solid: {
          _active: {
            transform: "scale(0.96)"
          }
        },
        outline: {
          _hover: { bg: "gray.100" },
          _active: {
            bg: "gray.200",
            transform: "scale(0.96)"
          },
          "@media(hover: none)": {
            _hover: { bg: "transparent" }
          }
        },
        ghost: {
          _hover: { bg: "gray.100" },
          _active: {
            bg: "gray.200",
            transform: "scale(0.96)"
          },
          "@media(hover: none)": {
            _hover: { bg: "transparent" }
          }
        }
      },
      defaultProps: {
        colorScheme: "brand"
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            color: "brand.500",
            borderWidth: { base: "1.2px", md: "1.5px" },
            borderColor: "gray.400",
            _hover: { borderColor: "gray.400" },
            _focus: {
              borderColor: "brand.500",
              borderWidth: { base: "1.8px", md: "2px" },
              boxShadow: "none"
            },
            _placeholder: {
              color: "gray.400",
              fontSize: { base: "xs", md: "sm" }
            }
          }
        }
      },
      defaultProps: {
        variant: "outline"
      }
    },
    Textarea: {
      variants: {
        outline: {
          color: "brand.500",
          borderWidth: { base: "1.2px", md: "1.5px" },
          borderColor: "gray.400",
          _hover: { borderColor: "gray.400" },
          _focus: {
            borderColor: "brand.500",
            borderWidth: { base: "1.8px", md: "2px" },
            boxShadow: "none"
          },
          _placeholder: {
            color: "gray.400",
            fontSize: { base: "xs", md: "sm" }
          }
        }
      },
      defaultProps: {
        variant: "outline"
      }
    },
    Image: {
      baseStyle: {
        pointerEvents: "none",
        sx: {
          touchAction: "none"
        }
      }
    }
  }
});

export default theme;
