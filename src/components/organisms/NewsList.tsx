import {
  VStack,
  HStack,
  Text,
  Divider,
  Button,
  Box,
  Stack,
  useBreakpointValue,
  Heading
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useState, useMemo } from "react";

import type { News } from "../../types";

const categories: Record<string, string> = {
  all: "すべて",
  news: "ニュース",
  release: "リリース",
  system: "システム"
};

type NewsListProps = {
  news: News[];
};

const NewsList = ({ news }: NewsListProps) => {
  const [activeId, setActiveId] = useState<string>("all");
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  const list = useMemo(() => {
    return news.filter((item) => {
      if (activeId === "all") return true;
      return item.category === activeId;
    });
  }, [news, activeId]);

  return (
    <VStack w="100%" alignItems="start" spacing={{ base: "4", sm: "8" }}>
      <HStack
        as="nav"
        w="100%"
        spacing={{ base: "8px", sm: "12px" }}
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
        {Object.keys(categories).map((id) => (
          <Box key={id} as="button">
            <Button
              h={{ base: "24px", sm: "28px" }}
              px={{ base: "8px", sm: "12px" }}
              rounded="full"
              bg={activeId === id ? "brand" : "gray.300"}
              _hover={{}}
              _active={{ transform: "scale(0.96)" }}
              onClick={() => setActiveId(id)}
            >
              <Text fontSize={{ base: "xs", sm: "sm" }} color="white">
                {categories[id]}
              </Text>
            </Button>
          </Box>
        ))}
      </HStack>
      <VStack
        w="100%"
        h="320px"
        p={{ base: "0", sm: "2" }}
        overflowY="auto"
        spacing="2"
        sx={{
          "&::-webkit-scrollbar": {
            display: { base: "none", sm: "block" },
            width: "4px"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "2px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555"
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1"
          }
        }}
        css={{
          scrollbarWidth: breakpoint === "base" ? "none" : "auto",
          scrollbarHeight: breakpoint === "base" ? "none" : "auto",
          msOverflowStyle: breakpoint === "base" ? "none" : "auto"
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
            <Stack
              w="100%"
              direction={{ base: "column", sm: "row" }}
              alignItems={{ base: "flex-start", sm: "center" }}
              px={{ base: "4px", sm: "8px" }}
              py={{ base: "10px", sm: "20px" }}
              spacing={{ base: "4", sm: "6" }}
            >
              <HStack spacing={{ base: "2", sm: "4" }} alignItems="center">
                <Text
                  as="time"
                  fontSize={{ base: "xs", sm: "sm" }}
                  color="gray.600"
                >
                  {format(item.date, "yyyy.MM.dd")}
                </Text>
                <Box
                  bg="brand"
                  px={{ base: "6px", sm: "8px" }}
                  py={{ base: "2px", sm: "4px" }}
                  rounded="full"
                >
                  <Text
                    fontSize={{ base: "2xs", sm: "xs" }}
                    fontWeight="bold"
                    color="white"
                  >
                    {categories[item.category]}
                  </Text>
                </Box>
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: "xs", sm: "sm" }}
                noOfLines={1}
              >
                {item.title}
              </Heading>
            </Stack>
            {index < list.length - 1 && <Divider borderColor="gray.200" />}
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default NewsList;
