import {
  Box,
  VStack,
  Text,
  Circle,
  useBreakpointValue
} from "@chakra-ui/react";
import { useState, memo, useEffect } from "react";

import { formatByDot } from "../../functions";
import useResize from "../../hooks/tools/useResize";
import type { Event } from "../../types";
import TimelineItem from "../molecules/TimelineItem";

type TimelineProps = {
  events: Event[];
};

const Timeline = memo(({ events }: TimelineProps) => {
  const [circles, setCircles] = useState<number[]>([]);
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });
  const space = useBreakpointValue(
    { base: 50, md: 100 },
    { fallback: undefined }
  );

  const { resize } = useResize();

  useEffect(() => {
    const circles: number[] = [];

    let sum = 0;

    for (let i = 0; i < events.length; i++) {
      const element = document.getElementById(`item${i}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const height = rect.height;
        const position = sum + height / 2 + (i > 0 ? space || 0 : 0);

        circles.push(position);
        sum += height + (i > 0 ? space || 0 : 0);
      }
    }

    setCircles(circles);
  }, [events, events.length, space, resize]);

  return (
    <VStack
      as="section"
      w={{ base: "100%", md: "90%" }}
      pos="relative"
      spacing={space}
    >
      <Box
        pos="absolute"
        left={{
          base: "60px",
          md: "120px"
        }}
        top="0"
        bottom="0"
        width={{
          base: "1.8px",
          md: "2.5px"
        }}
        bg="brand.500"
        transform="translateX(-50%)"
      />

      {/* 日付 */}
      {events.map((event, index) => (
        <VStack
          key={index}
          as="time"
          dateTime={event.dates[0]}
          pos="absolute"
          left="0"
          top={`${circles[index]}px`}
          transform="translateY(-50%)"
        >
          {event.dates.map((date, index) => (
            <Text key={index} as="span" fontSize={{ base: "xs", md: "md" }}>
              {breakpoint === "base"
                ? formatByDot(date, "yy.M.d")
                : formatByDot(date, "yyyy.MM.dd")}
            </Text>
          ))}
        </VStack>
      ))}

      {/* 円 */}
      {circles.map((pos, index) => (
        <Circle
          key={index}
          size={{
            base: "12px",
            md: "24px"
          }}
          bg="white"
          pos="absolute"
          left={{
            base: "60px",
            md: "120px"
          }}
          top={`${pos}px`}
          transform="translate(-50%, -50%)"
          borderWidth={{
            base: "2px",
            md: "3px"
          }}
          borderColor="brand.500"
        />
      ))}

      {/* コンテンツ */}
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          id={`item${index}`}
          title={event.title}
          description={event.description}
        />
      ))}
    </VStack>
  );
});

export default Timeline;
