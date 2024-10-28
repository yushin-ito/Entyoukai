import { Children, ReactNode, useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Circle,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

type NewsListProps = {
  children: ReactNode;
};

const NewsList = ({ children }: NewsListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  useEffect(() => {
    const current = ref.current;
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      if (current) {
        const left = ref.current.scrollLeft;
        const delta =
          (event.deltaY / Math.abs(event.deltaY)) * window.innerWidth;

        const target =
          delta > 0
            ? Math.floor((delta + left) / window.innerWidth) * window.innerWidth
            : Math.ceil((delta + left) / window.innerWidth) * window.innerWidth;

        current.scrollLeft = target;
      }
    };

    const onScroll = () => {
      if (current) {
        const index = Math.round(current.scrollLeft / window.innerWidth);
        setCurrentIndex(index);
      }
    };

    current?.addEventListener("wheel", onWheel);
    current?.addEventListener("scroll", onScroll);

    return () => {
      current?.removeEventListener("wheel", onWheel);
      current?.removeEventListener("scroll", onScroll);
    };
  }, [ref, count]);

  return breakpoint === "base" ? (
    <VStack w="100%" spacing="0">
      {/* 横スクロール可能なリスト */}
      <Box
        ref={ref}
        overflowX="auto"
        w="calc(100vw * 0.8)"
        scrollBehavior="smooth"
        scrollSnapType="x mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        <HStack
          w={`calc(${count * 100}vw * 0.8 + ${24 * count}px )`}
          spacing="0"
        >
          {Children.map(children, (child, index) => (
            <Box
              key={index}
              w="100%"
              mr="24px"
              scrollSnapAlign="start"
              overflow="clip"
            >
              {child}
            </Box>
          ))}
        </HStack>
      </Box>
      {/* ドットインジケーター */}
      <HStack spacing="2">
        {Array.from({ length: count }).map((_, index) => (
          <Circle
            key={index}
            size="6px"
            bg={index === currentIndex ? "brand" : "gray.300"}
            transition="background-color 0.3s"
          />
        ))}
      </HStack>
    </VStack>
  ) : (
    <VStack w="100%" spacing="12">
      {children}
    </VStack>
  );
};

export default NewsList;
