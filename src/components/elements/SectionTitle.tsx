import {
  VStack,
  Box,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MotionBox from "../elements/MotionBox";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 1.5 } } : {}}
      w="100%"
    >
      {breakpoint === "base" ? (
        <HStack w="100%" spacing="2" alignItems="center">
          <Box w="3px" h="8" bg="brand" />
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
        </HStack>
      ) : (
        <VStack w="100%" spacing="2" alignItems="flex-start">
          <Text fontSize="2xl" fontWeight="bold">
            {title}
          </Text>
          <Box w="100%" h="1" bg="brand" />
        </VStack>
      )}
    </MotionBox>
  );
};

export default SectionTitle;