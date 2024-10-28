import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";
import VerticalTimeline from "../components/layouts/VerticalTimeline";
import events from "../data/events";

const Memory = () => {
  

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack
        w={{ base: "80%", sm: "60%" }}
        spacing={{ base: "10", sm: "16" }}
      >
        <SectionTitle title="おもいで" />
        <VerticalTimeline events={events} />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
