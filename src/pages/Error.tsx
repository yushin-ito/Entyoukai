import { Text, Center, VStack, Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const Error = ({
  resetErrorBoundary
}: {
  resetErrorBoundary?: (...args: any[]) => void;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "エラーが発生しました | 猿鳥会",
    description:
      "予期せぬエラーが発生しました。もう一度お試しいただくか、時間をおいてアクセスしてください。",
    url: "https://entyoukai.com/error"
  };

  return (
    <Center as="main" w="100%" h="100vh">
      <Helmet>
        <title>エラーが発生しました | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <VStack w="100%" spacing={{ base: "12", md: "16", lg: "20" }}>
        <VStack as="section" w="100%" spacing={{ base: "1", md: "2" }}>
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
        <VStack w="100%" spacing={{ base: "4", md: "6" }}>
          <Button
            px={{ base: "8", md: "12", lg: "16" }}
            py={{ base: "4", md: "6" }}
            fontSize={{ base: "xs", md: "sm" }}
            rounded="full"
            shadow="sm"
            onClick={() => window.location.replace("/")}
          >
            トップページに戻る
          </Button>
          <Button
            variant="link"
            color="brand"
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight="normal"
            _active={{ opacity: 0.6 }}
            onClick={resetErrorBoundary}
          >
            再読み込み
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Error;
