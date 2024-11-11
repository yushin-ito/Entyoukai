import {
  VStack,
  Text,
  Button,
  HStack,
  Box,
  useBreakpointValue
} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";

import useScroll from "../../hooks/tools";
import MotionBox from "../atoms/MotionBox";

type TableOfContentsProps = {
  sections: { id: string; title: string }[];
};

const TableOfContents = memo(({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [fixed, setFixed] = useState(false);
  const breakpoint = useBreakpointValue({ base: "base", lg: "lg" });
  const { scrolling, scrollToElement } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      setFixed(window.scrollY >= window.innerHeight);
      let id = "";
      let max = 0;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const height =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const ratio = Math.max(0, height) / rect.height;

          if (ratio > max) {
            max = ratio;
            id = section.id;
          }
        }
      });

      if (id) {
        setActiveId(id);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections, scrolling]);

  return breakpoint === "base" ? null : (
    <VStack
      as="nav"
      pos={fixed ? "fixed" : "absolute"}
      top={fixed ? "96px" : "calc(100vh + 96px)"}
      left="64px"
      spacing="0"
      alignItems="flex-start"
      zIndex={999}
    >
      <Box
        pos="absolute"
        left="0"
        width="3px"
        height={`${sections.length * 42}px`}
        rounded="2px"
        bg="gray.400"
      />
      <MotionBox
        pos="absolute"
        left="0"
        width="3px"
        height="42px"
        rounded="2px"
        bg="brand"
        animate={{
          y: sections.findIndex((section) => section.id === activeId) * 42,
          transition: { duration: 0.3, ease: "easeInOut" }
        }}
      />

      {sections.map((section) => (
        <Button
          key={section.id}
          h="42px"
          px="0"
          ml="4"
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          onClick={() => {
            if (!scrolling) {
              window.history.pushState(null, "", `#${section.id}`);

              const element = document.getElementById(section.id);
              if (element) {
                scrollToElement(element, 800);
              }
            }
          }}
        >
          <HStack spacing="4">
            <Text
              as="span"
              color={activeId === section.id ? "brand" : "gray.400"}
              fontWeight="bold"
            >
              {section.title}
            </Text>
          </HStack>
        </Button>
      ))}
    </VStack>
  );
});

export default TableOfContents;
