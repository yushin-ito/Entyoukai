import { VStack } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/layouts/SectionTitle";
import Footer from "../components/layouts/Footer";
import VerticalTimeline from "../components/layouts/VerticalTimeline";

const Memory = () => {
  const events = [
    {
      title: "朝日小学校 入学式",
      description:
        "ドキドキしながら初めての教室に入りました。たくさんの新しい友達に出会い、楽しい学校生活が始まりました。",
      dates: ["2011-04-06"],
    },
    {
      title: "1年生 遠足",
      description:
        "初めての遠足では三滝公園に行きました。お弁当をみんなで食べて、特別な時間を過ごせました。",
      dates: ["2011-05-10"],
    },
    {
      title: "1年生 運動会",
      description:
        "初めての運動会では、「夢を叶えて」をテーマにダンスを披露しました。ドラえもんの曲に合わせて一生懸命踊りました。",
      dates: ["2011-10-01"],
    },
    {
      title: "2年生 遠足",
      description: "2年生の遠足ではXXXに行きました。あまり覚えていません。",
      dates: ["2012-05-08"],
    },
    {
      title: "2年生 運動会",
      description:
        "2年生の運動会では、「XXX」をテーマにXXXを踊りました。あまり覚えていません。",
      dates: ["2012-09-29"],
    },
    {
      title: "3年生 遠足",
      description:
        "3年生の遠足では、北勢中央公園に行きました。あまり覚えていません。",
      dates: ["2013-05-14"],
    },
    {
      title: "3年生 運動会",
      description:
        "3年生の運動会では、「XXX」をテーマにXXXを踊りました。あまり覚えていません。",
      dates: ["2013-09-28"],
    },
    {
      title: "4年生 遠足",
      description: "4年生の遠足では、XXXに行きました。あまり覚えていません。",
      dates: ["2014-05-13"],
    },
    {
      title: "4年生 運動会",
      description:
        "4年生の運動会では、「XXX」をテーマにXXXを踊りました。あまり覚えていません。",
      dates: ["2015-09-27"],
    },
    {
      title: "5年生 遠足",
      description:
        "5年生の遠足では、かすみみなと公園とシドニー公園に行きました。あまり覚えていません。",
      dates: ["2016-05-19"],
    },
    {
      title: "5年生 運動会",
      description:
        "5年生の運動会では、「パイレーツ・オブ・アサヒ」をテーマに組み体操をしました。あまり覚えていません。",
      dates: ["2016-09-27"],
    },
    {
      title: "5年生 自然教室",
      description:
        "5年生の自然教室では、美浜少年自然教室の家に行きました。砂の造形コンテストやキャンプファイアーなどたくさんの思い出を作れました。",
      dates: ["2016-10-27", "2016-10-28"],
    },
    {
      title: "6年生 遠足",
      description:
        "6年生の遠足では、伊坂ダムに行きました。あまり覚えていません。",
      dates: ["2016-05-13"],
    },
    {
      title: "6年生 運動会",
      description:
        "4年生の運動会では、「XXX」をテーマにXXXを踊りました。あまり覚えていません。",
      dates: ["2016-09-24"],
    },
    {
      title: "6年生 修学旅行",
      description:
        "6年生の修学旅行では、京都に行きました。金閣寺や清水寺など、たくさんの名所を訪れることができました。あまり覚えていません。",
      dates: ["2016-11-01", "2016-11-02"],
    },
    {
      title: "朝日小学校 卒業式",
      description:
        "先生方に感謝の気持ちを伝えることができました。たくさんの思い出を胸に、6年間過ごした学校を卒業しました。",
      dates: ["2016-03-18"],
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
      <VStack
        w={{ base: "80%", sm: "60%" }}
        spacing={{ base: "10", sm: "16" }}
      >
        <SectionTitle title="おもいで" />
        <VerticalTimeline events={events} />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Memory;
