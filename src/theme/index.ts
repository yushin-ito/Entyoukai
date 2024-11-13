import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        overscrollBehavior: "none"
      },
      body: {
        overflowY: "scroll"
      },
      "*, *::before, &::after": {
        WebkitTapHighlightColor: "transparent"
      },
      img: {
        WebkitUserDrag: "none",
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
      variants: {
        fill: {
          bg: "brand",
          color: "white",
          _hover: {
            bg: "brand",
            opacity: 0.8
          },
          _active: {
            transform: "scale(0.98)",
            opacity: 0.8
          }
        },
        outline: {
          bg: "white",
          color: "brand",
          borderWidth: "1px",
          borderColor: "brand",
          _hover: {
            opacity: 0.8
          },
          _active: {
            transform: "scale(0.98)",
            opacity: 0.8
          }
        }
      },
      defaultProps: {
        variant: "fill"
      }
    },
    Input: {
      variants: {
        outline: {
          field: {
            color: "brand",
            borderWidth: { base: "1.2px", md: "1.5px" },
            borderColor: "gray.400",
            _focus: {
              borderColor: "brand",
              borderWidth: { base: "1.8px", md: "2px" },
              boxShadow: "none"
            },
            _placeholder: { color: "gray.400" }
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
          color: "brand",
          borderWidth: { base: "1.2px", md: "1.5px" },
          borderColor: "gray.400",
          _focus: {
            borderColor: "brand",
            borderWidth: { base: "1.8px", md: "2px" },
            boxShadow: "none"
          },
          _placeholder: { color: "gray.400" }
        }
      },
      defaultProps: {
        variant: "outline"
      }
    }
  }
});

export default theme;
