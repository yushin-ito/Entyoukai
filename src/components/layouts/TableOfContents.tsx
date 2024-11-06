import {
  VStack,
  Text,
  Button,
  HStack,
  useBreakpointValue,
  Box
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import MotionBox from "../elements/MotionBox";

type TableOfContentsProps = {
  sections: { id: string; title: string }[];
};

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [fixed, setFixed] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (scrolling) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const initializeObserver = () => {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5
      });
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer?.observe(element);
      });
    };

    initializeObserver();

    const onScroll = () => {
      setFixed(window.scrollY >= window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections, scrolling]);

  return breakpoint === "base" ? null : (
    <VStack
      position={fixed ? "fixed" : "absolute"}
      top={fixed ? "96px" : "calc(100vh + 96px)"}
      left="64px"
      spacing="0"
      alignItems="flex-start"
      zIndex={999}
    >
      <Box
        position="absolute"
        left="0"
        width="3px"
        height={`${sections.length * 42}px`}
        rounded="2px"
        bg="gray.400"
      />
      <MotionBox
        position="absolute"
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
            setScrolling(true);
            setActiveId(section.id);

            document.getElementById(section.id)?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            setTimeout(() => {
              setScrolling(false);
            }, 1000);
          }}
          sx={{
            WebkitTapHighlightColor: "transparent"
          }}
        >
          <HStack spacing="4">
            <Text
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
};

export default TableOfContents;
