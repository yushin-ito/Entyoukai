import { Box, VStack } from "@chakra-ui/react";

import ScrollToTopButton from "../components/elements/ScrollTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import MainVisual from "../components/layouts/MainVisual";

const Company = () => {
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
      <VStack w={{ base: "75%", sm: "55%" }} spacing={{ base: "6", sm: "8" }}>
        <SectionTitle title="協賛企業" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Company;
