import { Box, VStack, Text, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainVisual = () => {
  return (
    <Box
      bgImage="url('/background_image.png')"
      bgPosition="center"
      bgSize="cover"
      w="100vw"
      pos="relative"
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
        alignItems="center"
      >
        <Button as={Link} to="/" variant="link" color="white">
          トップ
        </Button>
        <Button as={Link} to="/participant" variant="link" color="white">
          参加する方へ
        </Button>
        <Button as={Link} to="/company" variant="link" color="white">
          企業の方へ
        </Button>
        <Button as={Link} to="/member" variant="link" color="white">
          メンバー紹介
        </Button>
        <Button as={Link} to="/contact" variant="link" color="white">
          お問い合わせ
        </Button>
      </HStack>
      {/* メインビジュアル */}
      <VStack
        h="calc(100vh - 50px)"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          mt="24"
          px="20"
          py="16"
          spacing="2"
          rounded="md"
          bg="brand"
          opacity="0.8"
        >
          <Text fontSize="4xl" fontWeight="bold" color="white">
            令和7年度
          </Text>
          <Text fontSize="5xl" fontWeight="bold" color="white">
            二十歳のつどい
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};
export default MainVisual;
