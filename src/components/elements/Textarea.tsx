import {
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, ChakraTextareaProps>(
  (props, ref) => {
    return (
      <ChakraTextarea
        ref={ref}
        borderWidth="1.2px"
        borderColor="gray.300"
        focusBorderColor="brand"
        _placeholder={{ color: "gray.400" }}
        {...props}
      />
    );
  }
);

export default Textarea;
