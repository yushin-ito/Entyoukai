import { Box, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import Title from "../components/elements/Title";
import Footer from "../components/layouts/Footer";

const Activity = () => {
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "6", sm: "8" }}>
        <Title title="活動について" />
        <Box h="400px" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Activity;
