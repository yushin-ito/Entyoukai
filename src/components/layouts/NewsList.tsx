import { useState, useMemo } from "react";
import {
  VStack,
  HStack,
  Text,
  Divider,
  Button,
  Box,
  Stack,
} from "@chakra-ui/react";
import { News } from "../../types";
import { format } from "date-fns";

const categories: Record<string, string> = {
  all: "すべて",
  news: "ニュース",
  release: "リリース",
  system: "システム",
};

type NewsListProps = {
  news: News[];
};

const NewsList = ({ news }: NewsListProps) => {
  const [activeId, setActiveId] = useState<string>("all");

  const list = useMemo(() => {
    return news.filter((item) => {
      if (activeId === "all") return true;
      return item.category === activeId;
    });
  }, [news, activeId]);

  return (
    <VStack w="100%" alignItems="start" spacing={{ base: "4", sm: "8" }}>
      <HStack
        w="100%"
        spacing={{ base: "8px", sm: "12px" }}
        overflowX="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        css={{
          scrollbarWidth: "none",
          scrollbarHeight: "none",
          msOverflowStyle: "none",
        }}
      >
        {Object.keys(categories).map((key) => (
          <Box key={key}>
            <Button
              h={{ base: "24px", sm: "32px" }}
              px={{ base: "8px", sm: "12px" }}
              rounded="full"
              bg={activeId === key ? "brand" : "gray.300"}
              _hover={{ transform: "scale(0.98)" }}
              _active={{ transform: "scale(0.96)" }}
              onClick={() => setActiveId(key)}
            >
              <Text fontSize={{ base: "xs", sm: "sm" }} color="white">
                {categories[key]}
              </Text>
            </Button>
          </Box>
        ))}
      </HStack>
      <VStack
        w="100%"
        h="320px"
        overflowY="auto"
        spacing="2"
        sx={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
          },
        }}
      >
        {list.map((item, index) => (
          <VStack key={index} w="100%" alignItems="start" spacing="2">
            <Stack
              w="100%"
              flexDir={{ base: "column", sm: "row" }}
              alignItems={{ base: "flex-start", sm: "center" }}
              px={{ base: "4px", sm: "8px" }}
              py={{ base: "8px", sm: "12px" }}
              spacing={{ base: "4", sm: "6" }}
            >
              <HStack spacing={{ base: "2", sm: "4" }} alignItems="center">
                <Text fontSize={{ base: "sm", sm: "sm" }} color="gray.600">
                  {format(item.date, "yyyy.MM.dd")}
                </Text>
                <Box
                  bg="brand"
                  fontSize={{ base: "xs", sm: "sm" }}
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
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                noOfLines={1}
              >
                {item.title}
              </Text>
            </Stack>
            {index < list.length - 1 && <Divider bg="gray.00" />}
          </VStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default NewsList;
