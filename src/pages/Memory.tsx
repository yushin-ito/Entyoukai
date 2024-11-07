import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import Timeline from "../components/organisms/Timeline";
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
      <Helmet>
        <title>おもいで</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "55%" }} spacing={{ base: "10", sm: "16" }}>
        <SectionTitle title="おもいで" />
        {events && <Timeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
