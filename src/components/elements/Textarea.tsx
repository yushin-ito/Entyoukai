import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

const Textarea = (props: ChakraTextareaProps) => {
  return (
    <ChakraTextarea
      borderWidth="1.2px"
      borderColor="gray.300"
      focusBorderColor="brand"
      _placeholder={{ color: "gray.400" }}
      {...props}
    />
  );
};

export default Textarea;
