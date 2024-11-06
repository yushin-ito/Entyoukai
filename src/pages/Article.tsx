import {
  Box,
  VStack,
  Text,
  Image,
  Button,
  HStack,
  Avatar,
  Divider
} from "@chakra-ui/react";
import { format } from "date-fns";
import { AnimatePresence } from "framer-motion";
import { useMemo, useEffect, useState } from "react";
import { FaLine, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

import IconButton from "../components/elements/IconButton";
import MotionBox from "../components/elements/MotionBox";
import ScrollToTopButton from "../components/elements/ScrollToTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import MainVisual from "../components/layouts/MainVisual";
import { useQueryArticles } from "../hooks/contents";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: articles } = useQueryArticles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const article = useMemo(() => {
    return articles?.find((article) => article.id.toString() === id);
  }, [articles, id]);

  useEffect(() => {
    if (article?.images) {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % article.images.length);
      }, 5000);
      return () => clearInterval(id);
    }
  }, [article]);

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "24" }}>
        {article && (
          <VStack
            w="100%"
            spacing={{ base: "6", sm: "8" }}
            rounded={{ base: "md", sm: "lg" }}
          >
            <SectionTitle title={article.title} />
            <VStack
              w={{ base: "100%", sm: "90%" }}
              spacing="0"
              alignItems="flex-start"
            >
              {/* 日付と作者 */}
              <HStack w="100%" alignItems="center" spacing="4">
                <Avatar size={{ base: "sm", sm: "md" }} src={article.avatar} />
                <VStack alignItems="flex-start" spacing="1px">
                  <Text
                    fontSize={{ base: "xs", sm: "md" }}
                    fontWeight="bold"
                    color="gray.900"
                  >
                    {article.author}
                  </Text>
                  <Text fontSize={{ base: "2xs", sm: "xs" }} color="gray.600">
                    {format(new Date(article.date), "yyyy年MM月dd日")}
                  </Text>
                </VStack>
              </HStack>
              <Divider
                mt={{ base: "4", sm: "6" }}
                mb={{ base: "6", sm: "8" }}
                borderColor="gray.400"
              />
              {/* スライドショー */}
              <Box
                w="100%"
                h={{ base: "210px", sm: "420px" }}
                overflow="hidden"
                pos="relative"
                rounded={{ base: "lg", sm: "xl" }}
                shadow="md"
                bg="gray.100"
              >
                <AnimatePresence>
                  <MotionBox
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.6 } }}
                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                    pos="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                  >
                    <Image
                      src={article.images[currentIndex]}
                      alt={article.title}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                      draggable="false"
                    />
                  </MotionBox>
                </AnimatePresence>
              </Box>

              {/* 記事内容 */}
              <Text
                mt={{ base: "6", sm: "10" }}
                fontSize={{ base: "sm", sm: "md" }}
                fontWeight="bold"
                whiteSpace="pre-wrap"
              >
                {article.description}
              </Text>

              <Divider
                mt={{ base: "6", sm: "8" }}
                mb={{ base: "4", sm: "6" }}
                borderColor="gray.400"
              />

              {/* シェアボタン */}
              <HStack
                w="100%"
                alignItems="center"
                justifyContent="center"
                spacing={{ base: "4", sm: "6" }}
                mb={{ base: "12", sm: "16" }}
              >
                <IconButton
                  aria-label="twitter"
                  icon={<FaSquareXTwitter size="18px" />}
                  color="brand"
                  borderWidth="1px"
                  borderColor="brand"
                  rounded="full"
                  p={{ base: "8px", sm: "12px" }}
                  bg="white"
                  onClick={() => {
                    window.open(
                      `https://twitter.com/intent/tweet?text=${article.title}&url=${window.location.href}`
                    );
                  }}
                />
                <IconButton
                  aria-label="instagram"
                  icon={<FaInstagram size="18px" />}
                  color="brand"
                  borderWidth="1px"
                  borderColor="brand"
                  rounded="full"
                  p={{ base: "8px", sm: "12px" }}
                  bg="white"
                  onClick={() => {
                    window.open(
                      `https://www.instagram.com/?url=${window.location.href}`
                    );
                  }}
                />
                <IconButton
                  aria-label="line"
                  icon={<FaLine size="18px" />}
                  color="brand"
                  borderWidth="1px"
                  borderColor="brand"
                  rounded="full"
                  p={{ base: "8px", sm: "12px" }}
                  bg="white"
                  onClick={() => {
                    window.open(
                      `https://social-plugins.line.me/lineit/share?url=${window.location.href}`
                    );
                  }}
                />
              </HStack>

              {/* ナビゲーションボタン */}
              <HStack w="100%" justifyContent="space-between">
                <Button
                  bg="brand"
                  size={{ base: "sm", sm: "md" }}
                  _hover={{ bg: "brand", opacity: 0.8 }}
                  _active={{ transform: "scale(0.98)" }}
                  _disabled={{ opacity: 0.6 }}
                  color="white"
                  onClick={() => navigate("/article/" + (article.id - 1))}
                  isDisabled={article.id === 1}
                >
                  <Text
                    fontSize={{ base: "xs", sm: "sm" }}
                    fontWeight="bold"
                    color="white"
                  >
                    前へ
                  </Text>
                </Button>
                <Button
                  color="brand"
                  size={{ base: "sm", sm: "md" }}
                  onClick={() => navigate("/activity")}
                  variant="ghost"
                >
                  <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="bold">
                    一覧へ
                  </Text>
                </Button>
                <Button
                  bg="brand"
                  size={{ base: "sm", sm: "md" }}
                  _hover={{ bg: "brand", opacity: 0.8 }}
                  _active={{ transform: "scale(0.98)" }}
                  _disabled={{ opacity: 0.6 }}
                  color="white"
                  onClick={() => navigate("/article/" + (article.id + 1))}
                  isDisabled={articles?.length === article.id}
                >
                  <Text
                    fontSize={{ base: "xs", sm: "sm" }}
                    fontWeight="bold"
                    color="white"
                  >
                    次へ
                  </Text>
                </Button>
              </HStack>
            </VStack>
          </VStack>
        )}
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Article;
