import { Text, Center, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Center w="100vw" h="100vh">
      <VStack w="100%" spacing={{ base: "12", sm: "20" }}>
        <VStack w={{ base: "80%", sm: "40%" }} spacing={{ base: "1", sm: "4" }}>
          <Text fontSize={{ base: "lg", sm: "3xl" }} fontWeight="bold">
            予期せぬエラーが発生しました。
          </Text>
          <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.600">
            もう一度お試しいただくか、時間をおいてアクセスしてください。
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

export default Error;
