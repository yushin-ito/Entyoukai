import {
  VStack,
  Text,
  HStack,
  Box,
  Center,
  useBreakpointValue,
  useDisclosure,
  IconButton,
  Heading,
  Image
} from "@chakra-ui/react";
import { memo, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";

import { Menu, Pin } from "../atoms/Icon";
import NavigationBar from "../molecules/NavigationBar";

const NavigationDrawer = lazy(() => import("../molecules/NavigationDrawer"));

const MainVisual = memo(() => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const breakpoint = useBreakpointValue(
    {
      base: "base",
      md: "md",
      lg: "lg"
    },
    { fallback: undefined }
  );

  return (
    <Center
      w="100%"
      h={{ base: "calc(100vh * 0.9)", lg: "100vh" }}
      bgImage={{
        base: "url(/assets/images/background-mobile.webp)",
        md: "url(/assets/images/background-tablet.webp)",
        lg: "url(/assets/images/background-desktop.webp)"
      }}
      bgSize="cover"
      bgPos="center center"
      pos="relative"
    >
      {/* ロゴ */}
      <Image
        src="/assets/images/logo.webp"
        alt="logo"
        objectFit="cover"
        w={{ base: "100px", lg: "120px" }}
        h="auto"
        pos="absolute"
        top="6"
        left="8"
        rounded="4px"
        onClick={() => navigate("/top")}
      />

      {/* ナビゲーションバー */}
      {breakpoint === "lg" && <NavigationBar />}

      {/* ハンバーガーメニュー */}
      {(breakpoint === "base" || breakpoint === "md") && (
        <IconButton
          icon={<Menu boxSize="18px" />}
          aria-label="menu"
          pos="absolute"
          top="6"
          right="8"
          color="white"
          rounded="md"
          opacity="0.8"
          onClick={onOpen}
        />
      )}

      {/* ドロワー */}
      <Suspense>
        {(breakpoint === "base" || breakpoint === "md") && (
          <NavigationDrawer isOpen={isOpen} onClose={onClose} />
        )}
      </Suspense>

      {/* メインビジュアル */}
      <VStack
        px={{ base: "10", md: "20", lg: "24" }}
        py={{ base: "12", md: "16", lg: "16" }}
        spacing="4"
        rounded="xl"
        bg="brand"
        opacity="0.8"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          color="white"
        >
          二十歳のつどい
        </Heading>
        <VStack spacing="2">
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            fontWeight="bold"
            color="white"
          >
            2025年1月12日（日）13時30分
          </Text>

          <HStack alignItems="center" spacing="1">
            <Pin boxSize={{ base: "18px", md: "20px" }} color="white" />
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight="bold"
              color="white"
            >
              保健福祉センター 1階ホール
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Box id="target" pos="absolute" bottom="0" />
    </Center>
  );
});

export default MainVisual;
