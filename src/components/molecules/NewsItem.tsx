import { Stack, HStack, Box, Text } from "@chakra-ui/react";

import { formatByDot } from "../../functions";
import LinkedText from "../atoms/LinkedText";

type NewsListItemProps = {
  title: string;
  date: string;
  category: string;
  links: { word: string; url: string }[];
};

const NewsListItem = ({ title, date, category, links }: NewsListItemProps) => {
  return (
    <Stack
      w="100%"
      direction={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      px={{ base: "4px", md: "8px" }}
      py={{ base: "10px", md: "20px" }}
      spacing={{ base: "4", md: "6" }}
    >
      <HStack spacing={{ base: "2", md: "4" }} alignItems="center">
        <Text as="time" fontSize={{ base: "xs", md: "sm" }} color="gray.600">
          {formatByDot(date, "yyyy.MM.dd")}
        </Text>
        <Box
          bg="brand.500"
          px={{ base: "6px", md: "8px" }}
          py={{ base: "1.5px", md: "2.5px" }}
          rounded="full"
        >
          <Text fontSize={{ base: "2xs", md: "xs" }} color="white">
            {category}
          </Text>
        </Box>
      </HStack>
      <LinkedText
        as="p"
        fontSize={{ base: "xs", md: "sm" }}
        noOfLines={1}
        links={links}
      >
        {title}
      </LinkedText>
    </Stack>
  );
};

export default NewsListItem;
