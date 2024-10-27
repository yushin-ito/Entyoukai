import { Box, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";

const Company = () => {
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing="8">
        <SectionTitle title="協賛企業" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Company;
