import { VStack, Text, Button, HStack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MotionBox from "../elements/MotionBox";
import { useRef, useLayoutEffect } from "react";

const MainVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = window.location;

  useLayoutEffect(() => {
    if (pathname !== "/") {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [pathname]);

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      bgImage="url('/background_image.png')"
      bgPosition="center"
      bgSize="cover"
      w="100vw"
      h="100vh"
      pos="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* ナビゲーションバー */}
      <HStack
        as="nav"
        pos="absolute"
        top="6"
        right="6"
        px="10"
        py="3"
        spacing="8"
        rounded="full"
        bg="brand"
        opacity="0.8"
      >
        <Button as={Link} to="/" variant="link" color="white">
          トップ
        </Button>
        <Button as={Link} to="/activity" variant="link" color="white">
          活動について
        </Button>
        <Button as={Link} to="/company" variant="link" color="white">
          協賛企業
        </Button>
        <Button as={Link} to="/memory" variant="link" color="white">
          おもいで
        </Button>
        <Button as={Link} to="/contact" variant="link" color="white">
          お問い合わせ
        </Button>
      </HStack>

      {/* メインビジュアル */}
      <VStack
        px="20"
        py="16"
        spacing="2"
        rounded="md"
        bg="brand"
        opacity="0.8"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="4xl" fontWeight="bold" color="white">
          令和7年度
        </Text>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          二十歳のつどい
        </Text>
      </VStack>
      <Box ref={ref} pos="absolute" bottom="20" />
    </MotionBox>
  );
};

export default MainVisual;
