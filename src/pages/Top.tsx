import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Access from "../components/layouts/Access";
import Footer from "../components/layouts/Footer";
import Countdown from "../components/layouts/Countdown";
import ScrollToTopButton from "../components/elements/ScrollTopButton";
import TableOfContents from "../components/layouts/TableOfContents";

const Top = () => {
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
      pos="relative"
    >
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "countdown", title: "カウントダウン" },
          { id: "overview", title: "概要" },
          { id: "access", title: "アクセス" },
        ]}
      />
      <VStack w="60%" spacing={{ base: "10", sm: "20" }}>
        <Countdown />
        <VStack w="100%" spacing={{ base: "6", sm: "8" }}>
          <SectionTitle id="overview" title="概要" />
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
