import { VStack, Text, Button, HStack, Divider } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";

import Avatar from "../components/atoms/Avatar";
import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import ShareButtonGroup from "../components/molecules/ShareButtonGroup";
import Footer from "../components/organisms/Footer";
import ImageCarousel from "../components/organisms/ImageCarousel";
import MainVisual from "../components/organisms/MainVisual";
import { FIRST_ARTICLE_ID, END_ARTICLE_ID } from "../constants";
import { formatByDot } from "../functions";
import { useQueryArticle } from "../hooks/article";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: article } = useQueryArticle(id);

  const schema = article && {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author
    },
    image: article.images,
    description: article.description,
    url: "https://entyoukai.com/article/" + article.id
  };

  return (
    <VStack
      as="main"
      flex="1"
      alignItems="center"
      spacing={{ base: "16", md: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        {article && <title>{article.title + " | 猿鳥会"}</title>}
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack
        w={{ base: "80%", md: "75%", lg: "55%" }}
        spacing={{ base: "16", md: "24" }}
      >
        {article && (
          <VStack
            as="article"
            w="100%"
            spacing={{ base: "4", md: "8" }}
            rounded={{ base: "md", md: "lg" }}
          >
            <SectionTitle title={article.title} />
            <VStack
              w="100%"
              px={{ base: "0", md: "4" }}
              spacing="0"
              alignItems="flex-start"
            >
              {/* 日付と作者 */}
              <HStack w="100%" alignItems="center" spacing="4">
                <Avatar size={{ base: "sm", md: "md" }} src={article.avatar} />
                <VStack alignItems="flex-start" spacing="1px">
                  <Text
                    as="span"
                    fontSize={{ base: "xs", md: "md" }}
                    fontWeight="bold"
                  >
                    {article.author}
                  </Text>
                  <Text
                    as="time"
                    fontSize={{ base: "2xs", md: "xs" }}
                    color="gray.600"
                  >
                    {formatByDot(article.date, "yyyy年MM月dd日")}
                  </Text>
                </VStack>
              </HStack>
              <Divider
                mt={{ base: "4", md: "6" }}
                mb={{ base: "6", md: "8" }}
                borderColor="gray.400"
              />
              {/* カルーセル */}
              <ImageCarousel images={article.images} />

              {/* 記事内容 */}
              <Text
                as="p"
                mt={{ base: "6", md: "10" }}
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="bold"
                whiteSpace="pre-wrap"
              >
                {article.description}
              </Text>

              <Divider
                mt={{ base: "6", md: "8" }}
                mb={{ base: "4", md: "6" }}
                borderColor="gray.400"
              />

              {/* シェアボタン */}
              <ShareButtonGroup />

              {/* ナビゲーションボタン */}
              <HStack
                as="nav"
                mt={{ base: "12", md: "16" }}
                w="100%"
                justifyContent="space-between"
              >
                <Button
                  size={{ base: "sm", md: "md" }}
                  color="white"
                  bg="brand"
                  _hover={{ opacity: { base: 1, md: 0.8 } }}
                  _active={{
                    transform: "scale(0.98)",
                    opacity: 0.8
                  }}
                  _disabled={{ opacity: 0.6 }}
                  onClick={() => navigate("/article/" + (article.id + 1))}
                  isDisabled={END_ARTICLE_ID === article.id}
                >
                  <Text
                    as="span"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                    color="white"
                  >
                    前へ
                  </Text>
                </Button>
                <Button
                  color="brand"
                  size={{ base: "sm", md: "md" }}
                  onClick={() => navigate("/activity")}
                  variant="ghost"
                >
                  <Text
                    as="span"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="bold"
                  >
                    一覧へ
                  </Text>
                </Button>
                <Button
                  size={{ base: "sm", md: "md" }}
                  color="white"
                  bg="brand"
                  _hover={{ opacity: { base: 1, md: 0.8 } }}
                  _active={{
                    transform: "scale(0.98)",
                    opacity: 0.8
                  }}
                  _disabled={{ opacity: 0.6 }}
                  onClick={() => navigate("/article/" + (article.id - 1))}
                  isDisabled={FIRST_ARTICLE_ID === article.id}
                >
                  <Text
                    as="span"
                    fontSize={{ base: "xs", md: "sm" }}
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
