import { Box, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ScrollToTopButton from "../components/elements/ScrollTopButton";

const Activity = () => {
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
      <VStack w={{ base: "75%", sm: "50%" }} spacing={{ base: "6", sm: "8" }}>
        <SectionTitle id="activity" title="活動について" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Activity;
