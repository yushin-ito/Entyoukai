import { useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Circle,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Article } from "../../types";
import ArticleListItem from "../elements/ArticleListItem";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  const ref = useRef<HTMLDivElement>(null);
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
  }, [ref]);

  return breakpoint === "base" ? (
    <VStack w="100%" spacing="0">
      {/* 横スクロール可能なリスト */}
      <Box
        ref={ref}
        overflowX="auto"
        overflowY="hidden"
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
          w={`calc(${articles.length * 100}vw * 0.8 + ${24 * articles.length}px )`}
          spacing="0"
        >
          {articles.map((item, index) => (
            <Box
              key={index}
              w="100%"
              mr="24px"
              scrollSnapAlign="start"
              overflow="clip"
            >
              <ArticleListItem article={item} />
            </Box>
          ))}
        </HStack>
      </Box>
      {/* ドットインジケーター */}
      <HStack spacing="2">
        {Array.from({ length: articles.length }).map((_, index) => (
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
      {articles.map((item, index) => (
        <ArticleListItem key={index} article={item} />
      ))}
    </VStack>
  );
};

export default ArticleList;
