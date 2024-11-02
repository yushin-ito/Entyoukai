import { VStack } from "@chakra-ui/react";
import { useQueryEvents } from "../hooks/events";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";
import VerticalTimeline from "../components/layouts/VerticalTimeline";

const Memory = () => {
  const { data: events } = useQueryEvents();

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "16" }}>
        <SectionTitle title="おもいで" />
        {events && <VerticalTimeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
