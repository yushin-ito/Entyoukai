import { VStack, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import { useQueryPrivacyPolicy } from "../hooks/policy";

const PrivacyPolicy = () => {
  const { data: policy } = useQueryPrivacyPolicy();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "プライバシーポリシー | 猿鳥会",
    description:
      "「二十歳のつどい」公式Webサイトの利用に関するプライバシーポリシーのページです。個人情報の取り扱いについてご確認ください。",
    url: "https://entyoukai.com/privacypolicy"
  };

  return (
    <VStack
      as="main"
      flex="1"
      alignItems="center"
      spacing={{ base: "16", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>プライバシーポリシー | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack
        as="section"
        w={{ base: "80%", sm: "55%" }}
        spacing={{ base: "2", sm: "4" }}
      >
        <SectionTitle title="プライバシーポリシー" />
        <VStack
          w="100%"
          px={{ base: "0", sm: "2" }}
          alignItems="flex-start"
          spacing={{ base: "4", sm: "6" }}
        >
          <Text as="p" fontSize={{ base: "sm", sm: "md" }}>
            このプライバシーポリシー（以下「本ポリシー」といいます。）は、二十歳のつどい実行委員会（以下「当委員会」といいます。）が運営する二十歳のつどい公式Webサイト（以下「本サイト」といいます。）における、個人情報の取り扱いについて定めるものです。
            ご利用にあたっては本ポリシーをよくご確認の上、同意いただきますようお願いいたします。
          </Text>
          <VStack
            as="section"
            w="100%"
            alignItems="flex-start"
            spacing={{ base: "8", sm: "10" }}
          >
            {policy?.map((item, index) => (
              <VStack
                as="article"
                key={index}
                w="100%"
                alignItems="flex-start"
                spacing={{ base: "1", sm: "2" }}
              >
                <Heading as="h3" fontSize={{ base: "md", sm: "lg" }}>
                  {item.title}
                </Heading>
                <Text as="p" fontSize={{ base: "sm", sm: "md" }}>
                  {item.description}
                </Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default PrivacyPolicy;
