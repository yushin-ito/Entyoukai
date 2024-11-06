import { VStack } from "@chakra-ui/react";

import ScrollToTopButton from "../components/elements/ScrollToTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import MainVisual from "../components/layouts/MainVisual";
import Timeline from "../components/layouts/Timeline";
import { useQueryEvents } from "../hooks/contents";

const Memory = () => {
  const { data: events } = useQueryEvents();

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
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "16" }}>
        <SectionTitle title="おもいで" />
        {events && <Timeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
