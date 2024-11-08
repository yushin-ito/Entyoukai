import { VStack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import { useQueryPrivacyPolicy } from "../hooks/policy";

const PrivacyPolicy = () => {
  const { data: policy } = useQueryPrivacyPolicy();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>プライバシーポリシー</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "55%" }} spacing={{ base: "2", sm: "4" }}>
        <SectionTitle title="プライバシーポリシー" />
        <VStack
          w="100%"
          px={{ base: "0", sm: "2" }}
          alignItems="flex-start"
          spacing={{ base: "4", sm: "6" }}
        >
          <Text fontSize={{ base: "sm", sm: "md" }}>
            このプライバシーポリシー（以下「本ポリシー」といいます。）は、二十歳のつどい実行委員会（以下「当委員会」といいます。）が運営する二十歳のつどい公式Webサイト（以下「本サイト」といいます。）における、個人情報の取り扱いについて定めるものです。
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

export default PrivacyPolicy;
