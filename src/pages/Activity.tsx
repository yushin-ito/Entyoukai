import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import ArticleList from "../components/organisms/ArticleList";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import TableOfContents from "../components/organisms/TableOfContents";
import { useQueryArticles } from "../hooks/article";

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
      <Helmet>
        <title>活動について</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "activity", title: "活動理由" },
          { id: "article", title: "活動報告" }
        ]}
      />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "24" }}>
        <VStack id="activity" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="活動理由" />
          <Box h="240px" />
        </VStack>
        <VStack id="article" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="活動報告" />
          {articles && <ArticleList articles={articles} />}
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Activity;
