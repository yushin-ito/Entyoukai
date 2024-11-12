import {
  Box,
  VStack,
  Text,
  Circle,
  useBreakpointValue
} from "@chakra-ui/react";
import { useEffect, useState, useMemo, useCallback, memo } from "react";

import { formatByDot } from "../../functions";
import type { Event } from "../../types";
import TimelineItem from "../molecules/TimelineItem";

type TimelineProps = {
  events: Event[];
};

const Timeline = memo(({ events }: TimelineProps) => {
  const space = { base: 50, md: 100 };
  const [resize, setResize] = useState(false);
  const [heights, setHeights] = useState<number[]>([]);

  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  const positions = useMemo(
    () =>
      heights.reduce<number[]>((acc, height, index) => {
        const prev = acc[index - 1] || 0;
        acc.push(
          prev +
            height / 2 +
            (heights[index - 1] || 0) / 2 +
            (index > 0 ? (breakpoint === "base" ? space.base : space.md) : 0)
        );
        return acc;
      }, []),
    [heights, breakpoint, space.base, space.md]
  );

  const onMeasure = useCallback((height: number, index: number) => {
    setHeights((prev) => {
      const heights = [...prev];
      heights[index] = height;
      return heights;
    });
  }, []);

  useEffect(() => {
    const onEvent = () => {
      setResize(!resize);
    };
    window.addEventListener("resize", onEvent);

    return () => {
      window.removeEventListener("resize", onEvent);
    };
  }, [resize]);

  return (
    <VStack
      as="section"
      w={{ base: "100%", md: "90%" }}
      pos="relative"
      spacing={{ base: `${space.base}px`, md: `${space.md}px` }}
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
        bg="brand"
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
          top={`${positions[index]}px`}
          transform="translateY(-50%)"
        >
          {event.dates.map((date, index) => (
            <Text
              key={index}
              as="span"
              fontSize={{ base: "xs", md: "md" }}
              fontWeight="bold"
            >
              {breakpoint === "base"
                ? formatByDot(date, "yy.M.d")
                : formatByDot(date, "yyyy.MM.dd")}
            </Text>
          ))}
        </VStack>
      ))}

      {/* 円 */}
      {positions.map((position, index) => (
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
          top={`${position}px`}
          transform="translate(-50%, -50%)"
          borderWidth={{
            base: "2px",
            md: "3px"
          }}
          borderColor="brand"
        />
      ))}

      {/* コンテンツ */}
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          title={event.title}
          description={event.description}
          onMeasure={onMeasure}
          index={index}
          resize={resize}
        />
      ))}
    </VStack>
  );
});

export default Timeline;
