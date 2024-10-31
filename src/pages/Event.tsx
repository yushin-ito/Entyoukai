import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";
import ImageForm from "../components/layouts/ImageForm";

const Event = () => {
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "4", sm: "6" }}>
        <SectionTitle title="みんなで創るモザイクアート" />
        <ImageForm />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Event;
