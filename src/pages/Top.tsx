import { Text, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import NewsItem from "../components/layouts/NewsItem";
import Footer from "../components/layouts/Footer";
import Access from "../components/layouts/Access";
import NewsList from "../components/layouts/NewsList";

const Top = () => {
  const news = [
    {
      date: "2024.10.12",
      src: "/news_image1.png",
      location: "若松園",
      author: "猿鳥会",
      description:
        "先月二十歳のつどいで催し物を行うことが決定し、「朝日町と繋がりをもつお店に協力していただいて、景品を用意しよう」というプロジェクトがスタートしました! 協力して頂いたお店の紹介・この活動を広めるためにInstagramを開設することが町議員さんとの会議で決定! また、二十歳のつどいの際に配布する、お店の広告のためのチラシ作成をする計画も持ち上がりました。",
    },
    {
      date: "2024.10.12",
      src: "/news_image2.png",
      location: "朝日町役場",
      author: "猿鳥会",
      description:
        "朝日町役場で役場の方と会議を行いました。その会議で、私達の二十歳のつどいをメディアに取材して貰えるかもというお話が…！？私達は現在、二十歳のつどいで催しを行い、その催しの景品を朝日町に関するお店から頂こうとお願いしに周っています。なぜ取材して頂ける(可能性がある)のか…そう！まさにこの活動が世間体からすると珍しいからなんです！",
    },
    {
      date: "2024.10.12",
      src: "/news_image3.png",
      location: "Code cafe",
      author: "猿鳥会",
      description:
        "「ライスファーム」さん「Code cafe」さん(順不同)におじゃましました。私たちの活動を知っていただき、さらにご協力していただける運びとなりました!「ライスファーム」さんからはお米を、「Code cafe」さんからはコーヒー粉をご協力いただける予定です.私たちの話を真剣に受けとめてくださり、とてもご丁寧に対応していただきました。この調子で一歩ずつ前進してまいります！",
    },
  ];
  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack spacing="1">
        <Text fontSize={{ base: "md", sm: "4xl" }} fontWeight="bold">
          令和7年1月12日 13時30分から
        </Text>
        <Text fontSize={{ base: "md", sm: "4xl" }} fontWeight="bold">
          保健福祉センター（さわやか村）にて
        </Text>
        <Text fontSize={{ base: "md", sm: "4xl" }} fontWeight="bold">
          令和7年度 二十歳のつどいを開催します！
        </Text>
      </VStack>
      <VStack w={{ base: "80%", sm: "60%" }} spacing={{ base: "10", sm: "20" }}>
        <VStack w="100%" spacing={{ base: "4", sm: "6" }}>
          <SectionTitle title="ニュース" />
          <NewsList>
            {news.map((article, index) => (
              <NewsItem
                key={index}
                date={article.date}
                src={article.src}
                location={article.location}
                author={article.author}
                description={article.description}
              />
            ))}
          </NewsList>
        </VStack>
        <VStack w="100%" spacing={{ base: "4", sm: "6" }}>
          <SectionTitle title="アクセス" />
          <Access />
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
