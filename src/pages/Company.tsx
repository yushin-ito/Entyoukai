import { Box, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ScrollToTopButton from "../components/elements/ScrollTopButton";

const Company = () => {
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
      <VStack w="60%" spacing={{ base: "6", sm: "8" }}>
        <SectionTitle id="company" title="協賛企業" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Company;
