import { Text, Center, VStack, Button } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Fallback = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return (
    <Center w="100%" h="100vh">
      <VStack w="100%" spacing={{ base: "12", md: "16", lg: "20" }}>
        <VStack as="section" w="100%" spacing={{ base: "1", md: "2", lg: "4" }}>
          <Text
            as="h1"
            fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
          >
            予期せぬエラーが発生しました。
          </Text>
          <Text as="p" fontSize={{ base: "xs", md: "sm" }} color="gray.600">
            もう一度お試しいただくか、時間をおいてアクセスしてください。
          </Text>
        </VStack>
        <Button
          px={{ base: "8", md: "12" }}
          py={{ base: "4", md: "6" }}
          fontSize={{ base: "xs", md: "sm" }}
          rounded="full"
          shadow="sm"
          onClick={() => {
            queryClient.resetQueries();
            navigate("/", { replace: true });
          }}
        >
          トップページに戻る
        </Button>
      </VStack>
    </Center>
  );
};

export default Fallback;
