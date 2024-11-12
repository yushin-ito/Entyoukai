import { HStack, Text } from "@chakra-ui/react";
import { memo } from "react";

import { AlertCircle, CheckCircle, Cross, InfoCircle } from "./Icon";

type ToastProps = {
  status: "info" | "success" | "error";
  title: string;
  onClose: () => void;
};

const Toast = memo(({ status, title, onClose }: ToastProps) => {
  const config = {
    info: { Icon: InfoCircle, bg: "info" },
    success: { Icon: CheckCircle, bg: "success" },
    error: { Icon: AlertCircle, bg: "error" }
  };

  const { bg, Icon } = config[status];

  return (
    <HStack
      px="18px"
      py={{ base: "10px", md: "12px" }}
      bg={bg}
      rounded="md"
      spacing="1"
      alignItems="center"
    >
      <Icon boxSize={{ base: "16px", md: "20px" }} color="white" />
      <Text fontSize={{ base: "sm", md: "md" }} color="white">
        {title}
      </Text>
      <Cross
        boxSize={{ base: "8px", md: "12px" }}
        color="white"
        onClick={onClose}
      />
    </HStack>
  );
});

export default Toast;
