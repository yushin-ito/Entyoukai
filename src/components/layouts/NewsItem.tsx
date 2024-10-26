import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";

interface NewsItemProps {
  date: string;
  src: string;
  location: string;
  description: string;
}

const NewsItem = ({ date, src, location, description }: NewsItemProps) => {
  return (
    <HStack w="100%" spacing="4">
      {/* タイトル画像 */}
      <Box pos="relative">
        <Image src={src} alt={location} w="44" h="44" shadow="4" rounded="xl" />
        <Box pos="absolute" top="2" right="2" px="6px" py="2px" rounded="full" bg="white">
          <Text fontSize="2xs" fontWeight="extrabold" color="brand">
            {location}
          </Text>
        </Box>
      </Box>
      {/* 内容 */}
      <VStack align="start" spacing="2" w="70%">
        <Box
          px="8px"
          py="1px"
          borderWidth="2px"
          borderColor="brand"
          rounded="full"
        >
          <Text fontSize="sm" fontWeight="extrabold">
            {date}
          </Text>
        </Box>
        <Text fontSize="md" fontWeight="bold" lineHeight="1.5" color="brand">
          {description}
        </Text>
      </VStack>
    </HStack>
  );
};

export default NewsItem;
