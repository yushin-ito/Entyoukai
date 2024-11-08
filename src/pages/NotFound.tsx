import { Text, Center, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Center w="100vw" h="100vh">
      <VStack w="100%" spacing={{ base: "12", sm: "20" }}>
        <VStack w={{ base: "80%", sm: "40%" }} spacing={{ base: "1", sm: "4" }}>
          <Text fontSize={{ base: "lg", sm: "3xl" }} fontWeight="bold">
            ご指定のページが見つかりません。
          </Text>
          <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.600">
            URLが変更されたか、削除された可能性があります。
          </Text>
        </VStack>
        <Button
          w={{ base: "60%", sm: "20%" }}
          py="6"
          fontSize="sm"
          rounded="full"
          color="white"
          bg="brand"
          _hover={{ opacity: { base: 1, sm: 0.8 } }}
          _active={{
            transform: "scale(0.98)",
            opacity: 0.8
          }}
          shadow="sm"
          onClick={() => navigate("/", { replace: true })}
        >
          トップページに戻る
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
