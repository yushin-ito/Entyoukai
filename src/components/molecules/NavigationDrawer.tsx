import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Button
} from "@chakra-ui/react";
import { memo } from "react";
import { Link } from "react-router-dom";

type NavigationDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavigationDrawer = memo(({ isOpen, onClose }: NavigationDrawerProps) => {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent maxW={{ base: "60%", sm: "40%" }} bg="brand" opacity="0.8">
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
  );
});

export default NavigationDrawer;
