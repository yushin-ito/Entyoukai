import { VStack, Text, Button, HStack, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type ScrollToSectionButtonProps = {
  id: string;
  duration: number;
  title: string;
  active: boolean;
  onClick: () => void;
};

const ScrollToSectionButton = ({
  id,
  duration,
  title,
  active,
  onClick,
}: ScrollToSectionButtonProps) => {
  const scrollToSection = (elementId: string, duration: number) => {
    const element = document.getElementById(elementId);
    if (!element) return;

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
  };

  return (
    <Button
      h="42px"
      px="0"
      bg="transparent"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      onClick={() => {
        scrollToSection(id, duration);
        onClick();
      }}
    >
      <HStack spacing="4">
        <Box w="2.5px" h="42px" bg={active ? "brand" : "gray.500"} />
        <Text
          color={active ? "brand" : "gray.500"}
          fontWeight="bold"
          fontSize="lg"
        >
          {title}
        </Text>
      </HStack>
    </Button>
  );
};

type TableOfContentsProps = {
  sections: { id: string; title: string }[];
};

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight;

      setFixed(window.scrollY >= threshold);

      const found = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      setActiveId(found ? found.id : null);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <VStack
      position={fixed ? "fixed" : "absolute"}
      top={fixed ? "96px" : "calc(100vh + 96px)"}
      left="64px"
      spacing="0"
      alignItems="start"
      zIndex={999}
    >
      {sections.map((section) => (
        <ScrollToSectionButton
          key={section.id}
          id={section.id}
          title={section.title}
          duration={800}
          active={activeId === section.id}
          onClick={() => setActiveId(section.id)}
        />
      ))}
    </VStack>
  );
};

export default TableOfContents;
