import { Box, Text, VStack, Flex, Image, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";

type NewsItemProps = {
  date: string;
  src: string;
  location: string;
  author: string;
  description: string;
};

const NewsItem = ({
  date,
  src,
  location,
  author,
  description,
}: NewsItemProps) => {
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
      h={{ base: "450", sm: "auto" }}
    >
      <Flex
        w="100%"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "start" }}
        rounded={{ base: "none", sm: "md" }}
        gap={{ base: "2", sm: "8" }}
      >
        {/* タイトル画像 */}
        <Box pos="relative">
          <Image
            src={src}
            alt={location}
            w={{ base: "100%", sm: "44" }}
            h={{ base: "52", sm: "44" }}
            rounded={{ base: "none", sm: "xl" }}
            shadow="4"
          />
          {/* ロケーション */}
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
        <VStack
          w={{ base: "100%", sm: "70%" }}
          px="6px"
          spacing="2"
          alignItems="start"
        >
          <HStack
            w="100%"
            alignItems="center"
            justifyContent={{ base: "space-between", sm: "flex-start" }}
          >
            <Box
              px={{ base: "6px", sm: "8px" }}
              py="1px"
              borderWidth={{ base: "1.5px", sm: "2px" }}
              borderColor="brand"
              rounded="full"
            >
              <Text fontSize={{ base: "2xs", sm: "md" }} fontWeight="bold">
                {date}
              </Text>
            </Box>
            <Text fontSize={{ base: "2xs", sm: "xs" }} fontWeight="semibold">
              by {author}
            </Text>
          </HStack>
          <Text
            fontSize={{ base: "xs", sm: "md" }}
            fontWeight={{ base: "normal", sm: "bold" }}
            color="brand"
          >
            {description}
          </Text>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

export default NewsItem;
