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

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "トップページ | 猿鳥会",
    description:
      "猿鳥会が運営する朝日町の「二十歳のつどい」公式Webサイトです。式典やイベントに関する最新の情報をお届けします。",
    url: "https://entyoukai.com"
  };

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>トップ | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
      <VStack w={{ base: "80%", sm: "55%" }} spacing={{ base: "10", sm: "24" }}>
        <Countdown />
        <VStack id="overview" w="100%" spacing={{ base: "4", sm: "8" }}>
          <SectionTitle title="概要" />
          <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            このページをご覧いただきありがとうございます。こちらは、令和7年1月12日（日）に保健福祉センター（さわやか村）で開催される「二十歳のつどい」公式ページです。「二十歳のつどい」の概要やアクセス情報、最新のお知らせなどをご案内しています。
            <br />
            <br />
            「二十歳のつどい」は、朝日町で育った私たちが、地域の皆様とともに成長を祝い合う場です。当日は式典に加え、町内の魅力を再発見できるイベントも企画されています。
            <br />
            <br />
            参加される皆様には、決意を新たにし、地域との絆を感じていただけるよう、実行委員会一同準備を進めております。どうぞ素晴らしい一日をお過ごしください。
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
