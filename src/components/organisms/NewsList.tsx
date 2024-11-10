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
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

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
            h={{ base: "24px", md: "28px" }}
            px={{ base: "8px", md: "12px" }}
            rounded="full"
            bg={activeId === id ? "brand" : "gray.300"}
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
          "&::-webkit-scrollbar": {
            display: { base: "none", md: "block" },
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
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "flex-start", md: "center" }}
              px={{ base: "4px", md: "8px" }}
              py={{ base: "10px", md: "20px" }}
              spacing={{ base: "4", md: "6" }}
            >
              <HStack spacing={{ base: "2", md: "4" }} alignItems="center">
                <Text
                  as="time"
                  fontSize={{ base: "xs", md: "sm" }}
                  color="gray.600"
                >
                  {format(item.date, "yyyy.MM.dd")}
                </Text>
                <Box
                  bg="brand"
                  px={{ base: "6px", md: "8px" }}
                  py={{ base: "2px", md: "4px" }}
                  rounded="full"
                >
                  <Text
                    fontSize={{ base: "2xs", md: "xs" }}
                    fontWeight="bold"
                    color="white"
                  >
                    {categories[item.category]}
                  </Text>
                </Box>
              </HStack>
              <Heading
                as="h3"
                fontSize={{ base: "xs", md: "sm" }}
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
