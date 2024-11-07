import { Box, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";

const Company = () => {
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>協賛について</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "4", sm: "8" }}>
        <SectionTitle title="協賛について" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Company;
