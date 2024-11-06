import { Box, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ScrollToTopButton from "../components/elements/ScrollTopButton";
import ArticleList from "../components/layouts/ArticleList";
import TableOfContents from "../components/layouts/TableOfContents";
import { useQueryArticles } from "../hooks/contents";

const Activity = () => {
  const { data: articles } = useQueryArticles();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "activity", title: "活動について" },
          { id: "article", title: "活動報告" },
        ]}
      />
      <VStack w={{ base: "75%", sm: "55%" }} spacing={{ base: "10", sm: "24" }}>
        <VStack id="activity" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="活動について" />
          <Box h="240px" />
        </VStack>
        <VStack id="article" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="活動報告" />
          {articles && <ArticleList articles={articles} />}
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Activity;
