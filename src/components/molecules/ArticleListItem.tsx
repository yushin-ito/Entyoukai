import {
  Box,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Heading
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { memo, useRef } from "react";
import { Link } from "react-router-dom";

import { formatByDistance, formatByDot } from "../../functions";
import Avatar from "../atoms/Avatar";
import { Photo } from "../atoms/Icon";
import Image from "../atoms/Image";
import MotionBox from "../atoms/MotionBox";

type ArticleListItemProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  images: string[];
  avatar: string;
  location: string;
  author: string;
};

const ArticleListItem = memo(
  ({
    id,
    title,
    description,
    date,
    images,
    avatar,
    location,
    author
  }: ArticleListItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const breakpoint = useBreakpointValue(
      { base: "base", md: "md" },
      { fallback: undefined }
    );

    return (
      <MotionBox
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, transition: { duration: 1 } } : {}}
        w="100%"
      >
        <VStack
          as={Link}
          to={`/article/${id}`}
          w="100%"
          rounded={{ base: "none", md: "md" }}
          spacing={{ base: "4", md: "2" }}
          pb={{ base: "4", md: "0" }}
          _hover={
            breakpoint === "base"
              ? {}
              : { transform: "scale(1.02)", opacity: 0.8 }
          }
          _active={
            breakpoint === "base"
              ? { transform: "scale(0.98)", opacity: 0.8 }
              : { transform: "scale(1.00)" }
          }
        >
          {/* 画像 */}
          <Image
            w="100%"
            src={images[0]}
            alt={location}
            fallback={
              <Photo boxSize={{ base: "64px", md: "32px" }} color="brand.500" />
            }
            aspectRatio={{ base: 3 / 2, md: 4 / 3 }}
            rounded={{ base: "md", md: "xl" }}
            pos="relative"
          >
            {/* ロケーション */}
            <Box
              pos="absolute"
              bottom={{ base: "3", md: "2" }}
              right={{ base: "3", md: "2" }}
              px="6px"
              py="2.5px"
              rounded="full"
              bg="rgba(0, 0, 0, 0.6)"
            >
              <Text fontSize="2xs" color="white">
                {location}
              </Text>
            </Box>
          </Image>

          <VStack
            w="100%"
            px={{ base: "6px", md: "2px" }}
            spacing={{ base: "10px", md: "2px" }}
            alignItems="flex-start"
          >
            {/* タイトル */}
            {breakpoint === "md" && (
              <Heading as="h3" fontSize="md" noOfLines={1}>
                {title}
              </Heading>
            )}
            {/* 日付と作者 */}
            {breakpoint === "base" && (
              <HStack
                w="100%"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  px="6px"
                  py="1px"
                  borderWidth="1.5px"
                  borderColor="brand.500"
                  rounded="full"
                >
                  <Text fontSize="2xs" fontWeight="bold">
                    {formatByDot(date, "yyyy.MM.dd")}
                  </Text>
                </Box>
                <HStack spacing="2">
                  <Avatar size="xs" src={avatar} />
                  <Text fontSize="2xs" fontWeight="bold">
                    {author}
                  </Text>
                </HStack>
              </HStack>
            )}
            {/* 内容 */}
            <Text
              as="p"
              fontSize="xs"
              fontWeight={{ base: "bold", md: "normal" }}
              color={{ base: "brand.500", md: "gray.600" }}
              noOfLines={{ base: 6, md: 2 }}
            >
              {description}
            </Text>
            {/* 日付と作者 */}
            {breakpoint === "md" && (
              <HStack
                w="100%"
                mt="4"
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack spacing="6px">
                  <Avatar size="xs" src={avatar} />
                  <Text fontSize="2xs" fontWeight="bold" color="gray.900">
                    {author}
                  </Text>
                </HStack>
                <Text fontSize="2xs" color="gray.600">
                  {formatByDistance(date)}
                </Text>
              </HStack>
            )}
          </VStack>
        </VStack>
      </MotionBox>
    );
  }
);

export default ArticleListItem;
