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

    const onScroll = () => {
      if (current) {
        const index = Math.round(current.scrollLeft / window.innerWidth);
        setCurrentIndex(index);
      }
    };

    current?.addEventListener("scroll", onScroll);

    return () => {
      current?.removeEventListener("scroll", onScroll);
    };
  }, [ref, count]);

  return breakpoint === "base" ? (
    <VStack w="100%" spacing="0">
      {/* 横スクロール可能なリスト */}
      <Box
        ref={ref}
        overflowX="auto"
        overflowY="hidden" // 縦方向のスクロールを完全に無効化
        w="calc(100vw * 0.8)"
        scrollBehavior="smooth"
        scrollSnapType="x mandatory"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        css={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
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
