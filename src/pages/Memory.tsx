import { VStack } from "@chakra-ui/react";
import { useQueryEvents } from "../hooks/events";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import Timeline from "../components/layouts/Timeline";

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
      <VStack w={{ base: "70%", sm: "60%" }} spacing={{ base: "10", sm: "16" }}>
        <SectionTitle id="memory" title="おもいで" />
        {events && <Timeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
