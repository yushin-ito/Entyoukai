import { VStack, Text } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ScrollToTopButton from "../components/elements/ScrollTopButton";
import { useQueryPrivacyPolicy } from "../hooks/contents";

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
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "75%", sm: "55%" }} spacing={{ base: "2", sm: "4" }}>
        <SectionTitle title="プライバシーポリシー" />
        <VStack
          w="100%"
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
            {policy?.map((item) => (
              <VStack
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
