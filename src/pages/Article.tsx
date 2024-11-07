import {
  VStack,
  Text,
  Button,
  HStack,
  Divider,
  IconButton
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useEffect } from "react";
import { FaLine, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

import Avatar from "../components/elements/Avatar";
import ScrollToTopButton from "../components/elements/ScrollToTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ImageCarousel from "../components/layouts/ImageCarousel";
import MainVisual from "../components/layouts/MainVisual";
import { FIRST_ARTICLE_ID, END_ARTICLE_ID } from "../constants";
import { useQueryArticle } from "../hooks/contents";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: article, isLoading } = useQueryArticle(id);

  useEffect(() => {
    if (!article && !isLoading) {
      navigate("/notfound", { replace: true });
    }
  }, [article, isLoading, navigate]);

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
      <VStack w={{ base: "80%", sm: "50%" }} spacing={{ base: "10", sm: "24" }}>
        {article && (
          <VStack
            w="100%"
            spacing={{ base: "4", sm: "8" }}
            rounded={{ base: "md", sm: "lg" }}
          >
            <SectionTitle title={article.title} />
            <VStack
              w="100%"
              px={{ base: "0", sm: "4" }}
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
              {/* カルーセル */}
              <ImageCarousel images={article.images} />

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
                  size={{ base: "sm", sm: "md" }}
                  color="white"
                  bg="brand"
                  _hover={{ opacity: { base: 1, sm: 0.8 } }}
                  _active={{
                    transform: "scale(0.98)",
                    opacity: 0.8
                  }}
                  _disabled={{ opacity: 0.6 }}
                  onClick={() => navigate("/article/" + (article.id + 1))}
                  isDisabled={END_ARTICLE_ID === article.id}
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
                  size={{ base: "sm", sm: "md" }}
                  color="white"
                  bg="brand"
                  _hover={{ opacity: { base: 1, sm: 0.8 } }}
                  _active={{
                    transform: "scale(0.98)",
                    opacity: 0.8
                  }}
                  _disabled={{ opacity: 0.6 }}
                  onClick={() => navigate("/article/" + (article.id - 1))}
                  isDisabled={FIRST_ARTICLE_ID === article.id}
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
