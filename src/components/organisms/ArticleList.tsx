import {
  Box,
  HStack,
  Circle,
  VStack,
  useBreakpointValue,
  SimpleGrid
} from "@chakra-ui/react";
import { memo, useEffect, useRef, useState } from "react";

import type { Article } from "../../types";
import ArticleListItem from "../molecules/ArticleListItem";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = memo(({ articles }: ArticleListProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  useEffect(() => {
    const current = ref.current;

    const onScroll = () => {
      if (current) {
        const index = Math.round(
          current.scrollLeft / (window.innerWidth * 0.8 + 24)
        );
        setCurrentIndex(index);
      }
    };

    current?.addEventListener("scroll", onScroll);

    return () => {
      current?.removeEventListener("scroll", onScroll);
    };
  }, [ref]);

  if (breakpoint === "base") {
    return (
      <VStack w="100%" spacing="2">
        {/* 横スクロール可能なリスト */}
        <Box
          ref={ref}
          w="100%"
          overflowY="hidden"
          scrollBehavior="smooth"
          scrollSnapType="x mandatory"
          sx={{
            "::-webkit-scrollbar": {
              display: "none"
            }
          }}
          css={{
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          <HStack
            w={`calc((100% + 24px) * ${articles.length})`}
            alignItems="flex-start"
            spacing="0"
          >
            {articles.map((article, index) => (
              <Box
                key={index}
                w={`calc(100% / ${articles.length} - 24px)`}
                mr="24px"
                scrollSnapAlign="start"
                overflow="clip"
              >
                <ArticleListItem
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  images={article.images}
                  avatar={article.avatar}
                  location={article.location}
                  author={article.author}
                />
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
              bg={index === currentIndex ? "brand.500" : "gray.300"}
              transition="background-color 0.3s"
            />
          ))}
        </HStack>
      </VStack>
    );
  }
  if (breakpoint === "md" || breakpoint === "lg") {
    return (
      <SimpleGrid
        w="100%"
        px="2"
        columns={breakpoint === "md" ? 2 : 3}
        spacingX="10"
        spacingY="12"
        listStyleType="none"
      >
        {articles.map((article, index) => (
          <ArticleListItem
            key={index}
            id={article.id}
            title={article.title}
            description={article.description}
            date={article.date}
            images={article.images}
            avatar={article.avatar}
            location={article.location}
            author={article.author}
          />
        ))}
      </SimpleGrid>
    );
  }

  return null;
});

export default ArticleList;
