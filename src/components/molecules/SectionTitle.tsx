import {
  VStack,
  Box,
  Heading,
  useBreakpointValue,
  HStack
} from "@chakra-ui/react";
import { memo } from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = memo(({ title }: SectionTitleProps) => {
  const breakpoint = useBreakpointValue(
    { base: "base", md: "md" },
    { fallback: undefined }
  );

  if (breakpoint === "base") {
    return (
      <HStack w="100%" spacing="2" alignItems="center">
        <Box w="3px" h="6" bg="brand.500" />
        <Heading as="h2" fontSize="xl">
          {title}
        </Heading>
      </HStack>
    );
  }

  if (breakpoint === "md") {
    return (
      <VStack w="100%" spacing="2" alignItems="flex-start">
        <Heading as="h2" fontSize="2xl">
          {title}
        </Heading>
        <Box w="100%" h="3.5px" bg="brand.500" />
      </VStack>
    );
  }

  return null;
});

export default SectionTitle;
