import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";

interface NewsItemProps {
  date: string;
  src: string;
  location: string;
  description: string;
}

const NewsItem = ({ date, src, location, description }: NewsItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView ? { opacity: 1, x: 0, transition: { duration: 1 } } : {}
      }
      w="100%"
    >
      <HStack w="100%" spacing="4">
        {/* タイトル画像 */}
        <Box pos="relative">
          <Image
            src={src}
            alt={location}
            w="44"
            h="44"
            shadow="4"
            rounded="xl"
          />
          <Box
            pos="absolute"
            top="2"
            right="2"
            px="6px"
            py="2px"
            rounded="full"
            bg="white"
          >
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
    </MotionBox>
  );
};

export default NewsItem;
