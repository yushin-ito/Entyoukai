import { Box, Text, VStack, Stack, Image, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";

type ArticleListItemProps = {
  date: string;
  src: string;
  location: string;
  author: string;
  description: string;
};

const ArticleListItem = ({
  date,
  src,
  location,
  author,
  description,
}: ArticleListItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 1 } } : {}}
      w="100%"
    >
      <Stack
        w="100%"
        flexDir={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "flex-start" }}
        rounded={{ base: "none", sm: "md" }}
        gap={{ base: "6", sm: "8" }}
        pb={{ base: "4", sm: "0" }}
      >
        {/* タイトル画像 */}
        <Box w={{ base: "100%", sm: "auto" }} pos="relative">
          <Image
            src={src}
            alt={location}
            w={{ base: "100%", sm: "140px" }}
            h={{ base: "220px", sm: "140px" }}
            objectFit="cover"
            rounded={{ base: "none", sm: "xl" }}
            shadow="sm"
          />
          {/* ロケーション */}
          <Box
            pos="absolute"
            top={{ base: "3", sm: "2" }}
            right={{ base: "3", sm: "2" }}
            px="6px"
            py="2px"
            rounded="full"
            bg="white"
          >
            <Text fontSize="2xs" fontWeight="bold" color="brand">
              {location}
            </Text>
          </Box>
        </Box>
        {/* 内容 */}
        <VStack
          w={{ base: "100%", sm: "70%" }}
          px="6px"
          spacing="10px"
          alignItems="start"
        >
          <HStack
            w="100%"
            alignItems="center"
            justifyContent={{ base: "space-between", sm: "flex-start" }}
          >
            {/* 日付と作者 */}
            <Box
              px="6px"
              py="1px"
              borderWidth={{ base: "1.5px", sm: "2px" }}
              borderColor="brand"
              rounded="full"
            >
              <Text fontSize={{ base: "2xs", sm: "xs" }} fontWeight="bold">
                {date}
              </Text>
            </Box>
            <Text fontSize={{ base: "2xs", sm: "xs" }} fontWeight="semibold">
              by {author}
            </Text>
          </HStack>
          {/* 内容 */}
          <Text
            fontSize={{ base: "xs", sm: "sm" }}
            fontWeight="semibold"
            color="brand"
          >
            {description}
          </Text>
        </VStack>
      </Stack>
    </MotionBox>
  );
};

export default ArticleListItem;
