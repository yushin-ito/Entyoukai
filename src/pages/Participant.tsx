import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";

const Participant = () => {
  return (
    <VStack flex="1" alignItems="center" spacing="20" overflowX="hidden">
      <MainVisual />
      <VStack w="60%" spacing="8">
        <SectionTitle title="参加する方へ" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Participant;
