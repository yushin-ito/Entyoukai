import { VStack, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
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
    <VStack flex="1" spacing={{ base: "16", md: "24" }} pos="relative">
      <Helmet>
        <title>サイトポリシー | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ScrollToTopButton />
      <VStack
        w={{ base: "80%", md: "75%", lg: "55%" }}
        spacing={{ base: "2", md: "4" }}
      >
        <SectionTitle title="サイトポリシー" />
        <VStack
          as="section"
          w="100%"
          px={{ base: "0", md: "2" }}
          alignItems="flex-start"
          spacing={{ base: "4", md: "6" }}
        >
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            このサイトポリシー（以下「本ポリシー」といいます。）は、二十歳のつどい実行委員会（以下「当委員会」といいます。）が運営する二十歳のつどい公式Webサイト（以下「本サイト」といいます。）において、ご利用される皆さまにご了承いただく事項を定めるものです。
            ご利用にあたっては本ポリシーをよくご確認の上、同意いただきますようお願いいたします。
          </Text>
          <VStack
            as="article"
            w="100%"
            alignItems="flex-start"
            spacing={{ base: "8", md: "10" }}
          >
            {policy?.map((item, index) => (
              <VStack
                key={index}
                as="section"
                w="100%"
                alignItems="flex-start"
                spacing={{ base: "1", md: "2" }}
              >
                <Heading as="h3" fontSize={{ base: "md", md: "lg" }}>
                  {item.title}
                </Heading>
                <Text as="p" fontSize={{ base: "sm", md: "md" }}>
                  {item.description}
                </Text>
              </VStack>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default SitePolicy;
