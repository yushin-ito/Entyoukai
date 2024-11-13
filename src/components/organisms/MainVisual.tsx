import {
  VStack,
  Text,
  Button,
  HStack,
  Box,
  Center,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
  Heading,
  Image
} from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";
import { useRef, useEffect, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useScroll from "../../hooks/tools";
import { Menu, Pin } from "../atoms/Icon";

const MainVisual = memo(() => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpointValue(
    {
      base: "base",
      md: "md",
      lg: "lg"
    },
    { fallback: undefined }
  );
  const isFetching = useIsFetching();
  const { scrollToElement } = useScroll();

  useEffect(() => {
    if (pathname !== "/" && window.scrollY < 100 && isFetching === 0) {
      setTimeout(() => {
        const hash = window.location.hash;
        if (hash) {
          const sectionId = hash.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            scrollToElement(element, 500);
          }
        } else {
          if (ref.current) {
            scrollToElement(ref.current, 500);
          }
        }
      }, 300);
    }
  }, [pathname, isFetching, scrollToElement]);

  return (
    <Center
      w="100%"
      h={{ base: "calc(100vh * 0.8)", lg: "100vh" }}
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
      {breakpoint === "lg" && (
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
          <Button
            as={Link}
            to="/top"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            トップ
          </Button>
          <Button
            as={Link}
            to="/activity"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            活動について
          </Button>
          <Button
            as={Link}
            to="/sponsor"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            協賛について
          </Button>
          <Button
            as={Link}
            to="/memory"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            おもいで
          </Button>
          <Button
            as={Link}
            to="/contact"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            お問い合わせ
          </Button>
        </HStack>
      )}

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
      {(breakpoint === "base" || breakpoint === "md") && (
        <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent
            maxW={{ base: "60%", sm: "40%" }}
            bg="brand"
            opacity="0.8"
          >
            <DrawerCloseButton mt="2" color="white" size="md" />
            <DrawerBody>
              <VStack mt="20" spacing="10">
                <Button
                  as={Link}
                  to="/top"
                  variant="link"
                  color="white"
                  fontSize="lg"
                  _active={{ opacity: 0.6 }}
                  onClick={onClose}
                >
                  トップ
                </Button>
                <Button
                  as={Link}
                  to="/activity"
                  variant="link"
                  color="white"
                  fontSize="lg"
                  _active={{ opacity: 0.6 }}
                  onClick={onClose}
                >
                  活動について
                </Button>
                <Button
                  as={Link}
                  to="/sponsor"
                  variant="link"
                  color="white"
                  fontSize="lg"
                  _active={{ opacity: 0.6 }}
                  onClick={onClose}
                >
                  協賛について
                </Button>
                <Button
                  as={Link}
                  to="/memory"
                  variant="link"
                  color="white"
                  fontSize="lg"
                  _active={{ opacity: 0.6 }}
                  onClick={onClose}
                >
                  おもいで
                </Button>
                <Button
                  as={Link}
                  to="/contact"
                  variant="link"
                  color="white"
                  fontSize="lg"
                  _active={{ opacity: 0.6 }}
                  onClick={onClose}
                >
                  お問い合わせ
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}

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
      <Box ref={ref} pos="absolute" bottom="20" />
    </Center>
  );
});

export default MainVisual;
