import { Text, VStack } from "@chakra-ui/react";
import { useQueryArticles } from "../hooks/articles";
import MainVisual from "../components/layouts/MainVisual";
import Title from "../components/elements/Title";
import ArticleList from "../components/layouts/ArticleList";
import Access from "../components/layouts/Access";
import Footer from "../components/layouts/Footer";

const Top = () => {
  const { data: articles } = useQueryArticles();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack spacing="1">
        <Text fontSize={{ base: "md", sm: "3xl" }} fontWeight="bold">
          令和7年1月12日 13時30分から
        </Text>
        <Text fontSize={{ base: "md", sm: "3xl" }} fontWeight="bold">
          保健福祉センター（さわやか村）にて
        </Text>
        <Text fontSize={{ base: "md", sm: "3xl" }} fontWeight="bold">
          令和7年度 二十歳のつどいを開催します
        </Text>
      </VStack>
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "20" }}>
        <VStack w="100%" spacing={{ base: "4", sm: "6" }}>
          <Title title="活動報告" />
          {articles && <ArticleList articles={articles} />}
        </VStack>
        <VStack w="100%" spacing={{ base: "4", sm: "6" }}>
          <Title title="アクセス" />
          <Access />
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
