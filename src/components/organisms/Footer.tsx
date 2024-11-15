import { VStack, Text, HStack, Button } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <VStack
      as="footer"
      w="100%"
      mt="12"
      py={{ base: "6", md: "8" }}
      spacing={{ base: "6", md: "8" }}
      bg="brand.500"
    >
      <HStack spacing={{ base: "4", md: "8" }}>
        <Button
          as={Link}
          to="/sitepolicy"
          variant="link"
          fontSize={{ base: "2xs", md: "sm" }}
          color="white"
        >
          サイトポリシー
        </Button>
        <Button
          as={Link}
          to="/privacypolicy"
          variant="link"
          fontSize={{ base: "2xs", md: "sm" }}
          color="white"
        >
          プライバシーポリシー
        </Button>
        <Button
          as={Link}
          to="/contact"
          variant="link"
          fontSize={{ base: "2xs", md: "sm" }}
          color="white"
        >
          お問い合わせ
        </Button>
      </HStack>
      <Text fontSize="2xs" color="white">
        &copy; 2024 entyoukai All rights reserved.
      </Text>
    </VStack>
  );
});

export default Footer;
