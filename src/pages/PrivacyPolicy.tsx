import { VStack, Text, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
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
      w="100%"
      spacing={{ base: "16", md: "24" }}
      pos="relative"
    >
      <Helmet>
        <title>プライバシーポリシー | 猿鳥会</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ScrollToTopButton />
      <VStack
        as="section"
        w={{ base: "80%", md: "75%", lg: "55%" }}
        spacing={{ base: "2", md: "4" }}
      >
        <SectionTitle title="プライバシーポリシー" />
        <VStack
          w="100%"
          px={{ base: "0", md: "2" }}
          alignItems="flex-start"
          spacing={{ base: "4", md: "8" }}
        >
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            このプライバシーポリシー（以下「本ポリシー」といいます。）は、二十歳のつどい実行委員会（以下「当委員会」といいます。）が運営する二十歳のつどい公式Webサイト（以下「本サイト」といいます。）における、個人情報の取り扱いについて定めるものです。
            ご利用にあたっては本ポリシーをよくご確認の上、同意いただきますようお願いいたします。
          </Text>
          <VStack
            as="section"
            w="100%"
            alignItems="flex-start"
            spacing={{ base: "8", md: "12" }}
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

export default PrivacyPolicy;
