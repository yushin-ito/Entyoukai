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
        justifyContent={{ base: "space-between", sm: "center" }}
        px="16px"
        py={{ base: "10px", sm: "12px" }}
        bg="info"
        rounded="md"
        spacing={{ base: "0", sm: "12px" }}
      >
        <Icon
          as={FiInfo}
          boxSize={{ base: "18px", sm: "20px" }}
          color="white"
        />
        <Text fontSize={{ base: "sm", sm: "md" }} color="white">
          {title}
        </Text>
        <Icon
          as={FiX}
          boxSize={{ base: "16px", sm: "18px" }}
          color="white"
          onClick={onClose}
        />
      </HStack>
    );
  }

  if (status === "success") {
    return (
      <HStack
        justifyContent={{ base: "space-between", sm: "center" }}
        px="16px"
        py={{ base: "10px", sm: "12px" }}
        bg="success"
        rounded="md"
        spacing={{ base: "0", sm: "12px" }}
      >
        <Icon
          as={FiCheckCircle}
          boxSize={{ base: "18px", sm: "20px" }}
          color="white"
        />
        <Text fontSize={{ base: "sm", sm: "md" }} color="white">
          {title}
        </Text>
        <Icon
          as={FiX}
          boxSize={{ base: "16px", sm: "18px" }}
          color="white"
          onClick={onClose}
        />
      </HStack>
    );
  }

  if (status === "error") {
    return (
      <HStack
        justifyContent={{ base: "space-between", sm: "center" }}
        px="16px"
        py={{ base: "10px", sm: "12px" }}
        bg="success"
        rounded="md"
        spacing={{ base: "0", sm: "12px" }}
      >
        <Icon
          as={FiAlertCircle}
          boxSize={{ base: "18px", sm: "20px" }}
          color="white"
        />
        <Text fontSize={{ base: "sm", sm: "md" }} color="white">
          {title}
        </Text>
        <Icon
          as={FiX}
          boxSize={{ base: "16px", sm: "18px" }}
          color="white"
          onClick={onClose}
        />
      </HStack>
    );
  }

  return null;
};

export default Toast;
