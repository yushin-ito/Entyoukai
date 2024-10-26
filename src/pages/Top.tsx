import { HStack, Text, VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import NewsItem from "../components/layouts/NewsItem";
import Footer from "../components/layouts/Footer";

const Top = () => {
  return (
    <VStack flex="1" alignItems="center" spacing="20" overflowX="hidden">
      <MainVisual />
      <VStack w="60%" spacing="20">
        <VStack spacing="1">
          <Text fontSize="4xl" fontWeight="bold">
            令和7年1月12日（日）に
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            令和7年度 二十歳のつどいを開催します。
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            会場は 保健福祉センター（さわやか村）です。
          </Text>
        </VStack>
        <VStack w="100%" spacing="12">
          <SectionTitle title="ニュース" />
          <NewsItem
            date="2024.10.12"
            src="/src/assets/news_image1.png"
            location="若松園"
            description="先月二十歳のつどいで催し物を行うことが決定し、「朝日町と繋がりをもつお店に協力していただいて、景品を用意しよう」というプロジェクトがスタートしました! 協力して頂いたお店の紹介・この活動を広めるためにInstagramを開設することが町議員さんとの会議で決定! また、二十歳のつどいの際に配布する、お店の広告のためのチラシ作成をする計画も持ち上がりました。"
          />
          <NewsItem
            date="2024.10.12"
            src="/src/assets/news_image2.png"
            location="朝日町役場"
            description="朝日町役場で役場の方と会議を行いました。その会議で、私達の二十歳のつどいをメディアに取材して貰えるかもというお話が…！？私達は現在、二十歳のつどいで催しを行い、その催しの景品を朝日町に関するお店から頂こうとお願いしに周っています。なぜ取材して頂ける(可能性がある)のか…そう！まさにこの活動が世間体からすると珍しいからなんです！"
          />
          <NewsItem
            date="2024.10.12"
            src="/src/assets/news_image3.png"
            location="Code cafe"
            description="「ライスファーム」さん「Code cafe」さん(順不同)におじゃましました。私たちの活動を知っていただき、さらにご協力していただける運びとなりました!「ライスファーム」さんからはお米を、「Code cafe」さんからはコーヒー粉をご協力いただける予定です.私たちの話を真剣に受けとめてくださり、とてもご丁寧に対応していただきました。この調子で一歩ずつ前進してまいります！"
          />
        </VStack>
        <VStack w="100%" spacing="12">
          <SectionTitle title="アクセス" />
          <HStack w="100%" spacing="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.770941781844!2d136.66164791053401!3d35.0345949726894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600390039160dda3%3A0xee33fbe0c1cb0eb3!2z5pyd5pel55S656S-5Lya56aP56WJ5Y2U6K2w5Lya!5e0!3m2!1sja!2sjp!4v1729970214415!5m2!1sja!2sjp"
              width="320"
              height="240"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            />
            <VStack spacing="8" alignItems="flex-start">
              <VStack spacing="2" alignItems="flex-start">
                <Text fontSize="xl" fontWeight="bold">
                  保健福祉センター（さわやか村）
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  〒510-8102 三重県三重郡朝日町大字小向891-5
                </Text>
              </VStack>
              <VStack spacing="2" alignItems="flex-start">
                <Text fontSize="xl" fontWeight="bold">
                  ・近鉄伊勢朝日駅から徒歩x分
                </Text>
                <Text fontSize="xl" fontWeight="bold">
                  ・JR朝日駅から徒歩x分
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Top;
