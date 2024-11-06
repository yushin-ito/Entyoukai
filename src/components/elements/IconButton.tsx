import {
  IconButton as ChakraIconButton,
  IconButtonProps
} from "@chakra-ui/react";

const IconButton = (props: IconButtonProps) => {
  return <ChakraIconButton minW="0" minH="0" h="auto" w="auto" {...props} />;
};

export default IconButton;
