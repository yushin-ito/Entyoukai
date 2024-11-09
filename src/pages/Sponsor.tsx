import { Text, VStack, SimpleGrid, Link } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import TableOfContents from "../components/organisms/TableOfContents";
import { useQuerySponsors } from "../hooks/sponsor";

const Sponsor = () => {
  const { data: sponsors } = useQuerySponsors();

  const schema = sponsors && {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "協賛について | 猿鳥会",
    description:
      "「二十歳のつどい」は多くのご支援によって支えられています。ご協賛いただいた皆様の一覧を掲載しています。",
    url: "https://entyoukai.com/sponsor",
    sponsor: sponsors.map((sponsor) => ({
      "@type": "Organization",
      name: sponsor.name,
      url: sponsor.url || undefined
    }))
  };

  return (
    <VStack
      as="main"
      flex="1"
      alignItems="center"
      spacing={{ base: "16", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>協賛について | 猿鳥会</title>
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <TableOfContents
        sections={[
          { id: "sponsor_about", title: "協賛について" },
          { id: "sponsor_list", title: "協賛一覧" }
        ]}
      />
      <VStack w={{ base: "80%", sm: "55%" }} spacing={{ base: "16", sm: "24" }}>
        <VStack
          as="section"
          id="sponsor_about"
          w="100%"
          spacing={{ base: "4", sm: "8" }}
        >
          <SectionTitle title="協賛について" />
          <Text as="p" fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            「二十歳のつどい」は、私たちの町で育った若者たちが二十歳を迎え、共に新たな一歩を踏み出す大切な節目のイベントです。この特別な日をより意義深く、そして記憶に残るものにするため、多くの方々のご協力とご支援をいただいております。
            <br />
            <br />
            本イベントは、地域の皆様、企業の皆様、そしてご家族の皆様からの温かいご支援に支えられ、運営されています。協賛を通じて、町内外のさまざまな企業や団体が地域貢献の形として「二十歳のつどい」を支えてくださっています。皆様からいただくご支援は、式典やイベントの重要な要素となっております。
            <br />
            <br />
            また、協賛をいただいた皆様には、こちらのWebページやInstagramを通じてご紹介しております。ふるさとの支援を肌で感じ、感謝の気持ちを新たにする場を提供することが、私たちの願いです。
            <br />
            <br />
            私たち朝日町の未来を担う若者たちが、この「二十歳のつどい」を通して地域の絆を実感し、次の世代へと引き継いでいけるよう、どうか皆様のご支援を賜りますようお願い申し上げます。協賛についての詳細やお申し込み方法については、下記の問い合わせ先までお気軽にご連絡ください。皆様の温かいご支援を心よりお待ちしております。
          </Text>
        </VStack>
        <VStack
          as="section"
          id="sponsor_list"
          w="100%"
          spacing={{ base: "4", sm: "8" }}
        >
          <SectionTitle title="協賛一覧（敬称略）" />
          <SimpleGrid
            as="ul"
            w="100%"
            columns={{ base: 1, sm: 2 }}
            spacingY="4"
            listStyleType="none"
          >
            {sponsors?.map((sponsor, index) =>
              sponsor.url ? (
                <Link
                  as="li"
                  key={index}
                  href={sponsor.url}
                  isExternal
                  fontSize={{ base: "sm", sm: "md" }}
                  fontWeight="bold"
                  color="brand"
                >
                  {sponsor.name}
                </Link>
              ) : (
                <Text
                  as="li"
                  key={index}
                  fontSize={{ base: "sm", sm: "md" }}
                  fontWeight="bold"
                >
                  {sponsor.name}
                </Text>
              )
            )}
          </SimpleGrid>
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Sponsor;
