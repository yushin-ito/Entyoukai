import {
  Box,
  Text,
  VStack,
  Image,
  HStack,
  useBreakpointValue,
  Avatar
} from "@chakra-ui/react";
import { format, formatDistanceToNow, parseISO } from "date-fns";
import { ja } from "date-fns/locale";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import MotionBox from "../elements/MotionBox";

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

const ArticleListItem = ({
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
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

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
        rounded={{ base: "none", sm: "md" }}
        spacing={{ base: "4", sm: "2" }}
        pb={{ base: "4", sm: "0" }}
        _hover={
          breakpoint === "base"
            ? { opacity: 0.8 }
            : { transform: "scale(1.02)", opacity: 0.8 }
        }
        _active={
          breakpoint === "base"
            ? { transform: "scale(0.98)" }
            : { transform: "scale(1.00)" }
        }
      >
        <Box w="100%" pos="relative">
          {/* 画像 */}
          <Image
            src={images[0]}
            alt={location}
            w="100%"
            h={{ base: "200px", sm: "180px" }}
            objectFit="cover"
            rounded={{ base: "md", sm: "xl" }}
            shadow={{ base: "xs", sm: "sm" }}
            draggable="false"
          />
          {/* ロケーション */}
          <Box
            pos="absolute"
            bottom={{ base: "3", sm: "2" }}
            right={{ base: "3", sm: "2" }}
            px="6px"
            py="2.5px"
            rounded="full"
            bg="rgba(0, 0, 0, 0.6)"
          >
            <Text fontSize="2xs" color="white">
              {location}
            </Text>
          </Box>
        </Box>
        <VStack
          w="100%"
          px={{ base: "6px", sm: "2px" }}
          spacing={{ base: "10px", sm: "2px" }}
          alignItems="flex-start"
        >
          {/* タイトル */}
          {breakpoint === "sm" && (
            <Text fontWeight="bold" noOfLines={1}>
              {title}
            </Text>
          )}
          {/* 日付と作者 */}
          {breakpoint === "base" && (
            <HStack w="100%" alignItems="center" justifyContent="space-between">
              <Box
                px="6px"
                py="1px"
                borderWidth="1.5px"
                borderColor="brand"
                rounded="full"
              >
                <Text fontSize="2xs" fontWeight="bold">
                  {format(date, "yyyy.MM.dd")}
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
            fontSize="xs"
            fontWeight={{ base: "bold", sm: "normal" }}
            color={{ base: "brand", sm: "gray.600" }}
            noOfLines={{ base: 6, sm: 2 }}
          >
            {description}
          </Text>
          {/* 日付と作者 */}
          {breakpoint === "sm" && (
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
                {formatDistanceToNow(parseISO(date), {
                  addSuffix: true,
                  locale: ja
                })}
              </Text>
            </HStack>
          )}
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export default ArticleListItem;
