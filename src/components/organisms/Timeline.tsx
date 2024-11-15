import { Box, VStack } from "@chakra-ui/react";
import { memo } from "react";

import type { Event } from "../../types";
import TimelineItem from "../molecules/TimelineItem";

type TimelineProps = {
  events: Event[];
};

const Timeline = memo(({ events }: TimelineProps) => {
  return (
    <VStack
      as="section"
      w={{ base: "100%", md: "90%" }}
      pos="relative"
      spacing={{ base: "60px", md: "80px", lg: "100px" }}
    >
      {/* 縦線 */}
      <Box
        pos="absolute"
        top="0"
        bottom="0"
        left={{
          base: "65px",
          md: "120px"
        }}
        width={{
          base: "1.8px",
          md: "2.5px"
        }}
        bg="brand.500"
        transform="translateX(-50%)"
      />

      {/* コンテンツ */}
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          title={event.title}
          description={event.description}
          dates={event.dates}
        />
      ))}
    </VStack>
  );
});

export default Timeline;
