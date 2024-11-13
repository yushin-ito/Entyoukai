import { Text, Center, VStack, Button } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "エラーが発生しました | 猿鳥会",
    description:
      "予期せぬエラーが発生しました。もう一度お試しいただくか、時間をおいてアクセスしてください。",
    url: "https://entyoukai.com/error"
  };

  return (
    <Center as="main" w="100vw" h="100vh">
      <Helmet>
        <title>エラーが発生しました | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
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
          onClick={() => navigate("/", { replace: true })}
        >
          トップページに戻る
        </Button>
      </VStack>
    </Center>
  );
};

export default Error;
