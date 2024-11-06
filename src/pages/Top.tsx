import { VStack, Text } from "@chakra-ui/react";

import ScrollToTopButton from "../components/elements/ScrollTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Access from "../components/layouts/Access";
import Countdown from "../components/layouts/Countdown";
import FAQList from "../components/layouts/FAQList";
import Footer from "../components/layouts/Footer";
import MainVisual from "../components/layouts/MainVisual";
import NewsList from "../components/layouts/NewsList";
import TableOfContents from "../components/layouts/TableOfContents";
import { useQueryFAQ, useQueryNews } from "../hooks/contents";

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
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "countdown", title: "カウントダウン" },
          { id: "overview", title: "概要" },
          { id: "news", title: "お知らせ" },
          { id: "access", title: "アクセス" },
          { id: "faq", title: "よくある質問" }
        ]}
      />
      <VStack w={{ base: "75%", sm: "55%" }} spacing={{ base: "10", sm: "24" }}>
        <Countdown />
        <VStack id="overview" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="概要" />
          <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            このページを読んでいただきありがとうございます。朝日町の令和7年1月12日に保健福祉センター（さわやか村）で開催される「二十歳のつどい」の特設ページです。
            成人式の概要やアクセスについてご案内します。また、実行委員会による特別企画についてもご紹介します。ぜひご覧ください。
          </Text>
        </VStack>
        <VStack id="news" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="お知らせ" />
          {news && <NewsList news={news} />}
        </VStack>
        <VStack id="access" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="アクセス" />
          <Access />
        </VStack>
        <VStack id="faq" w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle title="よくある質問" />
          {faq && <FAQList faq={faq} />}
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
