import { Heading, Box, Text, VStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";

import MotionBox from "../atoms/MotionBox";

type TimelineItemProps = {
  id: string;
  title: string;
  description: string;
};

const TimelineItem = memo(({ id, title, description }: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box id={id} ref={ref} w="100%">
      <MotionBox
        opacity={isInView ? 1 : 0}
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 30,
          transition: { duration: 0.8 }
        }}
        ml={{ base: "90px", md: "180px" }}
        rounded="md"
      >
        <VStack w="100%" alignItems="flex-start" spacing="6px">
          <Heading as="h3" fontSize={{ base: "sm", md: "xl" }}>
            {title}
          </Heading>
          <Text as="p" fontSize={{ base: "xs", md: "lg" }}>
            {description}
          </Text>
        </VStack>
      </MotionBox>
    </Box>
  );
});

export default TimelineItem;
