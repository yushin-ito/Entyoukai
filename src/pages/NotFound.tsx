import { Text, Center, VStack, Button } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Center w="100vw" h="100vh">
      <VStack w="100%" spacing={{ base: "12", sm: "20" }}>
        <VStack w={{ base: "60%", sm: "40%" }} spacing={{ base: "1", sm: "2" }}>
          <Text fontSize={{ base: "xl", sm: "3xl" }} fontWeight="bold">
            ご指定のページが見つかりません。
          </Text>
          <VStack w="100%" spacing="0">
            <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
              申し訳ありません。お探しのページが見つかりませんでした。
            </Text>
            <Text fontSize={{ base: "xs", sm: "md" }} color="gray.600">
              URLが変更されたか、削除された可能性があります。
            </Text>
          </VStack>
        </VStack>
        <Button
          colorScheme="brand"
          w={{ base: "60%", sm: "20%" }}
          py="6"
          fontSize="sm"
          rounded="full"
          bg="brand"
          color="white"
          shadow="sm"
          onClick={() => window.location.replace("/")}
        >
          トップページに戻る
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
