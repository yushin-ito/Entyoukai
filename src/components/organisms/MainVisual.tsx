import {
  VStack,
  Text,
  Button,
  HStack,
  Box,
  Icon,
  Center,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
  Image
} from "@chakra-ui/react";
import { useRef, useCallback, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdPin } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

import useAppStore from "../../stores";

const MainVisual = () => {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });
  const progress = useAppStore((state) => state.progress);

  const scrollToElement = useCallback(
    (element: HTMLDivElement, duration: number) => {
      const start = window.scrollY;
      const target = element.getBoundingClientRect().top;
      const now = performance.now();

      const scroll = (time: number) => {
        const elapsed = time - now;
        const progress = Math.min(elapsed / duration, 1);
        const easing = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start + target * easing);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    },
    []
  );

  useEffect(() => {
    if (pathname !== "/" && window.scrollY === 0 && progress === 100) {
      setTimeout(() => {
        if (ref.current) {
          scrollToElement(ref.current, 500);
        }
      }, 300);
    }
  }, [pathname, progress, scrollToElement]);

  return (
    <Center
      bg="white"
      w="100vw"
      h={{ base: "calc(100vh * 0.8)", sm: "100vh" }}
      pos="relative"
    >
      {/* 背景画像 */}
      <Image
        src="/assets/images/background.webp"
        alt=""
        objectFit="cover"
        w="100vw"
        h={{ base: "calc(100vh * 0.8)", sm: "100vh" }}
        pos="absolute"
        top="0"
        left="0"
      />

      {/* ナビゲーションバー */}
      {breakpoint === "base" ? (
        <IconButton
          icon={<FiMenu size="20px" />}
          aria-label="menu"
          pos="absolute"
          top="6"
          right="6"
          color="white"
          bg="brand"
          _hover={{ opacity: { base: 1, sm: 0.8 } }}
          _active={{
            transform: "scale(0.98)",
            opacity: 0.8
          }}
          rounded="md"
          opacity="0.8"
          onClick={onOpen}
        />
      ) : (
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

      {/* ドロワー */}
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW="60%" bg="brand" opacity="0.8">
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

      {/* メインビジュアル */}
      <VStack
        px={{ base: "10", sm: "24" }}
        py={{ base: "12", sm: "16" }}
        spacing="4"
        rounded={{ base: "xl", sm: "lg" }}
        bg="brand"
        opacity="0.8"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "3xl", sm: "5xl" }}
          fontWeight="bold"
          color="white"
        >
          二十歳のつどい
        </Text>
        <VStack spacing="2">
          <Text
            fontSize={{ base: "md", sm: "xl" }}
            fontWeight="bold"
            color="white"
          >
            2025年1月12日（月）13時30分
          </Text>

          <HStack alignItems="center" spacing="1">
            <Icon
              as={IoMdPin}
              boxSize={{ base: "18px", sm: "24px" }}
              color="white"
            />
            <Text
              fontSize={{ base: "md", sm: "xl" }}
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
};

export default MainVisual;
