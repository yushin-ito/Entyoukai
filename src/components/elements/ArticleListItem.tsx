import { Box, Text, VStack, Flex, Image, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";
import { Article } from "../../types";

type ArticleListItemProps = {
  article: Article;
};

const ArticleListItem = ({ article }: ArticleListItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1, transition: { duration: 1 } } : {}}
      w="100%"
    >
      <Flex
        w="100%"
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", sm: "start" }}
        rounded={{ base: "none", sm: "md" }}
        gap={{ base: "6", sm: "8" }}
      >
        {/* タイトル画像 */}
        <Box w={{ base: "100%", sm: "auto" }} pos="relative">
          <Image
            src={article.src}
            alt={article.location}
            w={{ base: "100%", sm: "44" }}
            h={{ base: "56", sm: "44" }}
            objectFit="cover"
            rounded={{ base: "none", sm: "xl" }}
            shadow="sm"
          />
          {/* ロケーション */}
          <Box
            pos="absolute"
            top={{ base: "4", sm: "2" }}
            right={{ base: "4", sm: "2" }}
            px="6px"
            py="2px"
            rounded="full"
            bg="white"
          >
            <Text
              fontSize="2xs"
              fontWeight={{ base: "medium", sm: "extrabold" }}
              color="brand"
            >
              {article.location}
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
              px={{ base: "6px", sm: "8px" }}
              py="1px"
              borderWidth={{ base: "1.5px", sm: "2px" }}
              borderColor="brand"
              rounded="full"
            >
              <Text fontSize={{ base: "2xs", sm: "md" }} fontWeight="bold">
                {article.date}
              </Text>
            </Box>
            <Text fontSize={{ base: "2xs", sm: "xs" }} fontWeight="semibold">
              by {article.author}
            </Text>
          </HStack>
          {/* 内容 */}
          <Text
            fontSize={{ base: "xs", sm: "md" }}
            fontWeight={{ base: "semibold", sm: "bold" }}
            color="brand"
          >
            {article.description}
          </Text>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

export default ArticleListItem;
