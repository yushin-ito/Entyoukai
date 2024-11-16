const components = {
  Text: {
    baseStyle: {
      color: "brand.500",
      fontWeight: "medium",
      lineHeight: { base: "1.5", md: "1.75" }
    }
  },
  Heading: {
    baseStyle: {
      color: "brand.500",
      fontWeight: "bold"
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
            color: "gray.400"
          }
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
};

export default components;
