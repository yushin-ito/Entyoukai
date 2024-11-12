import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import Timeline from "../components/organisms/Timeline";
import { useQueryEvents } from "../hooks/event";

const Memory = () => {
  const { data: events } = useQueryEvents();

  const schema = events && {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "おもいで | 猿鳥会",
    description:
      "小学校や中学校での「おもいで」をタイムライン形式で紹介しています。",
    url: "https://entyoukai.com/memory",
    hasPart: events.map((event) => {
      const [start, end] = event.dates;
      return {
        "@type": "Event",
        name: event.title,
        startDate: start || undefined,
        endDate: end || undefined,
        description: event.description
      };
    })
  };

  return (
    <VStack flex="1" spacing={{ base: "16", md: "24" }} pos="relative">
      <Helmet>
        <title>おもいで | 猿鳥会</title>
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
      <ScrollToTopButton />
      <VStack
        as="section"
        w={{ base: "80%", md: "75%", lg: "55%" }}
        spacing={{ base: "10", md: "16" }}
      >
        <SectionTitle title="おもいで" />
        {events && <Timeline events={events} />}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
