import { Heading, Box, Text, VStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import MotionBox from "../atoms/MotionBox";

type TimelineItemProps = {
  index: number;
  resize: boolean;
  title: string;
  description: string;
  onMeasure: (height: number, index: number) => void;
};

const TimelineItem = ({
  index,
  resize,
  title,
  description,
  onMeasure
}: TimelineItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      onMeasure(height, index);
    }
  }, [ref, resize, index, onMeasure]);

  return (
    <Box ref={ref} w="100%">
      <MotionBox
        opacity={isInView ? 1 : 0}
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          x: isInView ? 0 : 30,
          transition: { duration: 0.8 }
        }}
        ml={{ base: "90px", sm: "180px" }}
        rounded="md"
      >
        <VStack w="100%" alignItems="flex-start" spacing="6px">
          <Heading as="h3" fontSize={{ base: "sm", sm: "xl" }}>
            {title}
          </Heading>
          <Text as="p" fontSize={{ base: "xs", sm: "lg" }}>
            {description}
          </Text>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default TimelineItem;
