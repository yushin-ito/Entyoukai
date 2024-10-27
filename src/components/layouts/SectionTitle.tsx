import { VStack, Box, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MotionBox from "../elements/MotionBox";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 5 }}
      animate={
        isInView ? { opacity: 1, y: 0, transition: { duration: 0.8 } } : {}
      }
      w="100%"
    >
      <VStack w="100%" spacing="2" alignItems="flex-start">
        <Text fontSize="3xl" fontWeight="bold">
          {title}
        </Text>
        <Box w="100%" h="1" bg="brand" />
      </VStack>
    </MotionBox>
  );
};

export default SectionTitle;
