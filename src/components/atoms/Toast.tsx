import { HStack, Icon, Text } from "@chakra-ui/react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from "react-icons/fi";

type ToastProps = {
  status: "info" | "success" | "error";
  title: string;
  onClose: () => void;
};

const Toast = ({ status, title, onClose }: ToastProps) => {
  const config = {
    info: { icon: FiInfo, bg: "info" },
    success: { icon: FiCheckCircle, bg: "success" },
    error: { icon: FiAlertCircle, bg: "error" }
  };

  const { icon, bg } = config[status];

  return (
    <HStack
      px="18px"
      py={{ base: "10px", sm: "12px" }}
      bg={bg}
      rounded="md"
      spacing={{ base: "8px", sm: "12px" }}
      alignItems="center"
    >
      <Icon as={icon} boxSize={{ base: "18px", sm: "22px" }} color="white" />
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
};

export default Toast;
