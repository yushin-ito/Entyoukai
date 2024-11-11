import {
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";

const Input = memo(
  forwardRef<HTMLInputElement, ChakraInputProps>((props, ref) => {
    return (
      <ChakraInput
        ref={ref}
        borderWidth={{ base: "0.8px", md: "1.2px" }}
        borderColor="gray.400"
        focusBorderColor="brand"
        _placeholder={{ color: "gray.400" }}
        {...props}
      />
    );
  })
);

export default Input;
