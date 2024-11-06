import {
  IconButton as ChakraIconButton,
  IconButtonProps
} from "@chakra-ui/react";

const IconButton = (props: IconButtonProps) => {
  return (
    <ChakraIconButton
      minW="0"
      minH="0"
      h="auto"
      w="auto"
      color="white"
      bg="brand"
      _hover={{
        bg: "brand",
        opacity: { base: 1, sm: 0.8 }
      }}
      _active={{ transform: "scale(0.98)", opacity: 0.8 }}
      sx={{
        WebkitTapHighlightColor: "transparent"
      }}
      {...props}
    />
  );
};

export default IconButton;
