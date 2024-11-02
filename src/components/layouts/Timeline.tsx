import { useEffect, useState, useMemo, useCallback } from "react";
import { format } from "date-fns";
import {
  Box,
  VStack,
  Text,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Event } from "../../types";
import TimelineItem from "../elements/TimelineItem";

type TimelineProps = {
  events: Event[];
};

const Timeline = ({ events }: TimelineProps) => {
  const space = { base: 24, sm: 64 };
  const [resize, setResize] = useState(false);
  const [heights, setHeights] = useState<number[]>([]);

  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  const positions = useMemo(
    () =>
      heights.reduce<number[]>((acc, height, index) => {
        const prev = acc[index - 1] || 0; // 1つ前の位置
        // 現在の位置 = 1つ前の位置 + 現在の高さ / 2 + 1つ前の高さ / 2 + 余白
        acc.push(
          prev +
            height / 2 +
            (heights[index - 1] || 0) / 2 +
            (index > 0 ? (breakpoint === "base" ? space.base : space.sm) : 0)
        );
        return acc;
      }, []),
    [heights, breakpoint, space.base, space.sm]
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
      pos="relative"
      spacing={{ base: `${space.base}px`, sm: `${space.sm}px` }}
    >
      {/* 縦のライン */}
      <Box
        pos="absolute"
        left={{
          base: "70px",
          sm: "140px",
        }}
        top="0"
        bottom="0"
        width={{
          base: "1.8px",
          sm: "2.5px",
        }}
        bg="brand"
        transform="translateX(-50%)"
      />

      {/* 日付 */}
      {events.map((event, index) => (
        <VStack
          key={index}
          pos="absolute"
          left="0"
          top={`${positions[index]}px`}
          transform="translateY(-50%)"
        >
          {event.dates.map((date, index) => (
            <Text
              key={index}
              fontSize={{ base: "sm", sm: "lg" }}
              fontWeight="semibold"
            >
              {breakpoint === "base"
                ? format(date, "yy.M.d")
                : format(date, "yyyy.M.d")}
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
            sm: "24px",
          }}
          bg="white"
          pos="absolute"
          left={{
            base: "70px",
            sm: "140px",
          }}
          top={`${position}px`}
          transform="translate(-50%, -50%)"
          borderWidth={{
            base: "2px",
            sm: "3px",
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
};

export default Timeline;
