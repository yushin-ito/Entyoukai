import { VStack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import { useQuerySitePolicy } from "../hooks/policy";

const SitePolicy = () => {
  const { data: policy } = useQuerySitePolicy();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "サイトポリシー | 猿鳥会",
    description:
      "「二十歳のつどい」公式Webサイトの利用に関するサイトポリシーのページです。サイトをご利用いただく際の注意事項をご確認ください。",
    url: "https://entyoukai.com/sitepolicy"
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
        <title>サイトポリシー | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "55%" }} spacing={{ base: "2", sm: "4" }}>
        <SectionTitle title="サイトポリシー" />
        <VStack
          w="100%"
          px={{ base: "0", sm: "2" }}
          alignItems="flex-start"
          spacing={{ base: "4", sm: "6" }}
        >
          <Text fontSize={{ base: "sm", sm: "md" }}>
            このサイトポリシー（以下「本ポリシー」といいます。）は、二十歳のつどい実行委員会（以下「当委員会」といいます。）が運営する二十歳のつどい公式Webサイト（以下「本サイト」といいます。）において、ご利用される皆さまにご了承いただく事項を定めるものです。
            ご利用にあたっては本ポリシーをよくご確認の上、同意いただきますようお願いいたします。
          </Text>
          <VStack
            w="100%"
            alignItems="flex-start"
            spacing={{ base: "8", sm: "10" }}
          >
            {policy?.map((item, index) => (
              <VStack
                key={index}
                w="100%"
                alignItems="flex-start"
                spacing={{ base: "1", sm: "2" }}
              >
                <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold">
                  {item.title}
                </Text>
                <Text fontSize={{ base: "sm", sm: "md" }}>
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

export default SitePolicy;
