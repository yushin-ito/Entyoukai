import { VStack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Access from "../components/organisms/Access";
import Countdown from "../components/organisms/Countdown";
import FAQList from "../components/organisms/FAQList";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import NewsList from "../components/organisms/NewsList";
import TableOfContents from "../components/organisms/TableOfContents";
import { useQueryFAQ } from "../hooks/faq";
import { useQueryNews } from "../hooks/news";

const Top = () => {
  const { data: news } = useQueryNews();
  const { data: faq } = useQueryFAQ();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>トップ</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "overview", title: "概要" },
          { id: "news", title: "お知らせ" },
          { id: "access", title: "アクセス" },
          { id: "faq", title: "よくある質問" }
        ]}
      />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "24" }}>
        <Countdown />
        <VStack id="overview" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="概要" />
          <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            このページを読んでいただきありがとうございます。これちらは、令和7年1月12日に保健福祉センター（さわやか村）で開催される朝日町の「二十歳のつどい」特設ページです。
            成人式の概要やアクセスについてご案内します。また、実行委員会による特別企画についてもご紹介します。ぜひご覧ください。
          </Text>
        </VStack>
        <VStack id="news" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="お知らせ" />
          {news && <NewsList news={news} />}
        </VStack>
        <VStack id="access" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="アクセス" />
          <Access />
        </VStack>
        <VStack id="faq" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="よくある質問" />
          {faq && <FAQList faq={faq} />}
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
