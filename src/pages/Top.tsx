import { VStack, Text } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Access from "../components/layouts/Access";
import Footer from "../components/layouts/Footer";
import Countdown from "../components/layouts/Countdown";
import ScrollToTopButton from "../components/elements/ScrollTopButton";
import TableOfContents from "../components/layouts/TableOfContents";
import { useQueryNews } from "../hooks/news";
import NewsList from "../components/layouts/NewsList";

const Top = () => {
  const { data: news } = useQueryNews();

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
        ]}
      />
      <VStack w={{ base: "75%", sm: "50%" }} spacing={{ base: "10", sm: "24" }}>
        <Countdown />
        <VStack w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle id="overview" title="概要" />
          <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            このページを読んでいただき誠にありがとうございます。これは、朝日町の令和7年度1月12日に保健福祉センター（さわやか村）で開催される「二十歳のつどい」の特設ページです。
            成人式の概要やアクセスについてご案内します。また、実行委員会による特別企画についてもご紹介します。ぜひご覧ください。
          </Text>
        </VStack>
        <VStack w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle id="news" title="ニュース" />
          {news && <NewsList news={news} />}
        </VStack>
        <VStack w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle id="access" title="アクセス" />
          <Access />
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
