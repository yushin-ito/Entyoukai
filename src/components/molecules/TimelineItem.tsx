import {
  Heading,
  Box,
  Text,
  VStack,
  HStack,
  Circle,
  useBreakpointValue
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef, memo } from "react";

import { formatByDot } from "../../functions";
import MotionBox from "../atoms/MotionBox";

type TimelineItemProps = {
  title: string;
  description: string;
  dates: string[];
};

const TimelineItem = memo(
  ({ title, description, dates }: TimelineItemProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const breakpoint = useBreakpointValue(
      { base: "base", md: "md" },
      { fallback: undefined }
    );

    return (
      <HStack w="100%" spacing="4" pos="relative">
        {/* 日付 */}
        <VStack
          as="time"
          dateTime={dates[0]}
          pos="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
        >
          {dates.map((date, index) => (
            <Text key={index} as="span" fontSize={{ base: "xs", md: "md" }}>
              {breakpoint === "base" && formatByDot(date, "yy.M.d")}
              {breakpoint === "md" && formatByDot(date, "yyyy.MM.dd")}
            </Text>
          ))}
        </VStack>

        {/* 円 */}
        <Circle
          size={{
            base: "12px",
            md: "24px"
          }}
          bg="white"
          pos="absolute"
          top="50%"
          left={{
            base: "60px",
            md: "120px"
          }}
          borderWidth={{
            base: "2px",
            md: "3px"
          }}
          borderColor="brand.500"
          transform="translate(-50%, -50%)"
        />

        {/* コンテンツ */}
        <Box ref={ref} w="100%">
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
            <VStack w="100%" alignItems="flex-start" spacing="12px">
              <Heading as="h3" fontSize={{ base: "sm", md: "xl" }}>
                {title}
              </Heading>
              <Text as="p" fontSize={{ base: "xs", md: "md" }}>
                {description}
              </Text>
            </VStack>
          </MotionBox>
        </Box>
      </HStack>
    );
  }
);

export default TimelineItem;
