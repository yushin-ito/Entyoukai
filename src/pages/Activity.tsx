import { Heading, Text, VStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";

import MotionBox from "../components/atoms/MotionBox";
import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import ArticleList from "../components/organisms/ArticleList";
import TableOfContents from "../components/organisms/TableOfContents";
import { useQueryArticles } from "../hooks/article";

const Activity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { data: articles } = useQueryArticles();

  const schema = articles && {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "活動について | 猿鳥会",
    description: "猿鳥会の活動についてのページです。活動報告を掲載しています。",
    url: "https://entyoukai.com/activity",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: "https://entyoukai.com/article/" + article.id,
        name: article.title
      }))
    }
  };

  return (
    <VStack
      as="main"
      w="100%"
      spacing={{ base: "16", md: "24" }}
      pos="relative"
    >
      <Helmet>
        <title>活動について | 猿鳥会</title>
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
      <ScrollToTopButton />
      <TableOfContents
        sections={[
          { id: "activity_reason", title: "活動理由" },
          { id: "activity_report", title: "活動報告" }
        ]}
      />
      <VStack
        w={{ base: "80%", md: "75%", lg: "55%" }}
        spacing={{ base: "16", md: "24" }}
      >
        <VStack
          as="section"
          id="activity_reason"
          w="100%"
          spacing={{ base: "4", md: "8" }}
        >
          <SectionTitle title="活動理由" />
          <MotionBox
            ref={ref}
            initial={{ x: 50, opacity: 0 }}
            animate={
              isInView
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.8 }
                  }
                : {}
            }
          >
            <Heading
              as="h3"
              my={{ base: "8px", md: "12px" }}
              fontSize={{ base: "md", md: "xl" }}
              textAlign="center"
              lineHeight="2"
            >
              思い出に残る二十歳のつどいに
              <br />
              地域で盛り上がる二十歳のつどいに
            </Heading>
          </MotionBox>
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            私たちが「二十歳のつどい」のために活動する理由は、コロナによって失われた同期との思い出をもう一度作り直すためです。
            <br />
            <br />
            私たちはコロナ禍により、中学校の卒業シーズンの大切なひとときを失ってしまいました。長い間ともに過ごしてきた友人たちと別れる直前の重要な時期に、学校が休校となってしまったのです。この時期は、通常であれば卒業までのカウントダウンを楽しみ、先生への感謝のプレゼントを友人と計画し、新たな進路への不安を共有し合いながら、かけがえのない思い出を築く貴重な時間でした。先生や友人、地元の学校との別れを惜しみ、人生の門出に向けた特別な瞬間を分かち合う大切な時期です。
            <br />
            <br />
            しかし、私たちにはそのような時間がありませんでした。突然の休校、そして次に「全員」で集まったのは、中学卒業式当日のみ。式も短縮され、感動を呼ぶべき全員合唱も練習不足でうまくいかず、心残りのある卒業式となってしまいました。卒業という大きな節目を迎えたという実感も薄れ、あっけなく終わってしまったあの日を、誰もが心のどこかで残念に感じていることと思います。
            <br />
            <br />
            このような思いが、今の私たちの成人式活動に向けた最大の原動力となっています。「二十歳のつどい」で集まることは、同級生との思い出を作る最後の機会でもあります。この活動は初めての試みで、多くの困難もありますが、役場の皆様のご協力を得ながら、みんなにとって忘れられない成人式を実現したいと願っています。
            <br />
            <br />
            また、朝日町にあるお店に「二十歳のつどい」のゲーム景品の協力をお願いしているのも、「二十歳のつどい」を迎える私たちにとって特別な思い出を作りたいからです。例年、「二十歳のつどい」には担任の先生や役場の方々、町の方々から祝辞をいただいており、そのお祝いの言葉はとても嬉しいものです。そこで私たちは、「このお祝いのムードが町全体に広がり、地域全体が私たちを祝福してくれるような成人式になれば、どれほど素晴らしいだろう」と思いました。
            <br />
            <br />
            「二十歳のつどい」という私たちの大切なイベントを通じて、町全体が一体となってお祝いしてくれる――そのような温かく幸せな成人式の思い出が残ることを願って、この活動を続けています。
            <br />
            <br />
            以上が私たちが「二十歳のつどい」に向けて活動する理由です。（2024年11月8日
            猿鳥会）
          </Text>
        </VStack>
        <VStack
          as="section"
          id="activity_report"
          w="100%"
          spacing={{ base: "4", md: "8" }}
        >
          <SectionTitle title="活動報告" />
          {articles && <ArticleList articles={articles} />}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Activity;
