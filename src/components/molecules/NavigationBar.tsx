import { Button, HStack } from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";

const NavigationBar = memo(() => {
  return (
    <HStack
      as="nav"
      pos="absolute"
      top="6"
      right="6"
      px="10"
      py="3"
      spacing="8"
      rounded="full"
      bg="brand.500"
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
  );
});

export default NavigationBar;
