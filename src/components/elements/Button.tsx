import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

const Button = (props: ButtonProps) => {
  return (
    <ChakraButton
      color="white"
      bg="brand"
      _hover={{ bg: "brand", opacity: { base: 1, sm: 0.8 } }}
      _active={{
        transform: "scale(0.98)",
        opacity: 0.8
      }}
      sx={{
        WebkitTapHighlightColor: "transparent"
      }}
      {...props}
    />
  );
};

export default Button;
