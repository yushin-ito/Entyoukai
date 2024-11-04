import { HStack, Icon, Text } from "@chakra-ui/react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

type ToastProps = {
  status: "info" | "success" | "error";
  title: string;
  onClose: () => void;
};

const Toast = ({ status, title, onClose }: ToastProps) => {
  if (status === "info") {
    return (
      <HStack
        w="auto"
        maxWidth="none"
        minWidth="auto"
        px="6"
        py="4"
        bg="info"
        rounded="md"
      >
        <Icon as={FiInfo} boxSize="20px" color="white" />
        <Text color="white">{title}</Text>
        <Icon as={FiX} boxSize="18px" color="white" onClick={onClose} />
      </HStack>
    );
  }

  if (status === "success") {
    return (
      <HStack
        w="auto"
        maxWidth="none"
        minWidth="auto"
        px="6"
        py="4"
        bg="success"
        rounded="md"
      >
        <Icon as={FiCheckCircle} boxSize="20px" color="white" />
        <Text color="white">{title}</Text>
        <Icon as={FiX} boxSize="18px" color="white" onClick={onClose} />
      </HStack>
    );
  }

  if (status === "error") {
    return (
      <HStack
        w="auto"
        maxWidth="none"
        minWidth="auto"
        px="6"
        py="4"
        bg="error"
        rounded="md"
      >
        <Icon as={FiAlertCircle} boxSize="20px" color="white" />
        <Text color="white">{title}</Text>
        <Icon as={FiX} boxSize="18px" color="white" onClick={onClose} />
      </HStack>
    );
  }

  return null;
};

export default Toast;
