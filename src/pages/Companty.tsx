import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";

const Company = () => {
  return (
    <VStack flex="1" alignItems="center" spacing="20" overflowX="hidden">
      <MainVisual />
      <VStack w="60%" spacing="8">
        <SectionTitle title="企業の方へ" />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Company;
