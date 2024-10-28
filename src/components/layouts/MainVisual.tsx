import {
  VStack,
  Text,
  Button,
  HStack,
  Box,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import MotionBox from "../elements/MotionBox";
import { useRef, useLayoutEffect } from "react";

const scrollToElement = (element: HTMLDivElement, duration: number) => {
  const start = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easing = 1 - Math.pow(1 - progress, 3); // イージング関数（cubic easing）

    window.scrollTo(0, start + targetPosition * easing);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

const MainVisual = () => {
  const { pathname } = window.location;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  useLayoutEffect(() => {
    if (pathname !== "/") {
      setTimeout(() => {
        if (ref.current) {
          scrollToElement(ref.current, 600);
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <MotionBox
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      bgImage="url('/background_image.png')"
      bgPosition="center"
      bgSize="cover"
      w="100vw"
      h={{ base: "calc(100vh * 0.8)", sm: "100vh" }}
      pos="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {/* ナビゲーションバー */}
      {breakpoint === "base" ? (
        <IconButton
          icon={<FiMenu size="20px" />}
          aria-label="menu"
          pos="absolute"
          top="6"
          right="6"
          p="2"
          minW="0"
          minH="0"
          h="auto"
          w="auto"
          onClick={onOpen}
          rounded="md"
          color="white"
          bg="brand"
          opacity="0.8"
          _hover={{ bg: "brand", opacity: 1 }}
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
            to="/"
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
            to="/company"
            variant="link"
            color="white"
            _active={{ opacity: 0.6 }}
          >
            協賛企業
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
        <DrawerContent w="60%" bg="brand" opacity="0.8">
          <DrawerCloseButton mt="2" color="white" size="lg"/>
          <DrawerBody>
            <VStack mt="20" spacing="10">
              <Button
                as={Link}
                to="/"
                variant="link"
                color="white"
                fontSize="xl"
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
                fontSize="xl"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                活動について
              </Button>
              <Button
                as={Link}
                to="/company"
                variant="link"
                color="white"
                fontSize="xl"
                _active={{ opacity: 0.6 }}
                onClick={onClose}
              >
                協賛企業
              </Button>
              <Button
                as={Link}
                to="/memory"
                variant="link"
                color="white"
                fontSize="xl"
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
                fontSize="xl"
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
        px={{ base: "10", sm: "20" }}
        py={{ base: "8", sm: "16" }}
        spacing="2"
        rounded="lg"
        bg="brand"
        opacity="0.8"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          color="white"
        >
          令和7年度
        </Text>
        <Text
          fontSize={{ base: "3xl", sm: "5xl" }}
          fontWeight="bold"
          color="white"
        >
          二十歳のつどい
        </Text>
      </VStack>
      <Box ref={ref} pos="absolute" bottom="20" />
    </MotionBox>
  );
};

export default MainVisual;
