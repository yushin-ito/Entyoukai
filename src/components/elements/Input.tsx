import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

const Input = (props: ChakraInputProps) => {
  return (
    <ChakraInput
      borderWidth="1.2px"
      borderColor="gray.300"
      focusBorderColor="brand"
      _placeholder={{ color: "gray.400" }}
      {...props}
    />
  );
};

export default Input;
