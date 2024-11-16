import { VStack, HStack, Text, Divider, Button } from "@chakra-ui/react";
import { useState, useMemo, memo } from "react";

import type { News } from "../../types";
import NewsListItem from "../molecules/NewsItem";

const categories: Record<string, string> = {
  all: "すべて",
  news: "ニュース",
  release: "リリース",
  system: "システム"
};

type NewsListProps = {
  news: News[];
};

const NewsList = memo(({ news }: NewsListProps) => {
  const [activeId, setActiveId] = useState<string>("all");

  const list = useMemo(() => {
    return news.filter((item) => {
      if (activeId === "all") return true;
      return item.category === activeId;
    });
  }, [news, activeId]);

  return (
    <VStack w="100%" alignItems="start" spacing={{ base: "4", md: "8" }}>
      <HStack
        as="nav"
        w="100%"
        spacing={{ base: "8px", md: "12px" }}
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none"
          }
        }}
        css={{
          scrollbarWidth: "none",
          scrollbarHeight: "none",
          msOverflowStyle: "none"
        }}
      >
        {Object.keys(categories).map((id, index) => (
          <Button
            key={index}
            h={{ base: "24px", md: "30px" }}
            px={{ base: "8px", md: "12px" }}
            rounded="full"
            bg={activeId === id ? "brand.500" : "gray.300"}
            _hover={{}}
            _active={{ transform: "scale(0.96)" }}
            onClick={() => setActiveId(id)}
          >
            <Text fontSize={{ base: "xs", md: "sm" }} color="white">
              {categories[id]}
            </Text>
          </Button>
        ))}
      </HStack>
      <VStack
        w="100%"
        h="320px"
        p={{ base: "0", md: "2" }}
        overflowY="auto"
        spacing="2"
        sx={{
          "::-webkit-scrollbar": {
            display: "none"
          }
        }}
        css={{
          scrollbarWidth: "none",
          scrollbarHeight: "none",
          msOverflowStyle: "none"
        }}
      >
        {list.map((item, index) => (
          <VStack
            key={index}
            as="article"
            w="100%"
            alignItems="start"
            spacing="2"
          >
            <NewsListItem
              title={item.title}
              date={item.date}
              category={categories[item.category]}
            />
            {index < list.length - 1 && <Divider borderColor="gray.200" />}
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
});

export default NewsList;
