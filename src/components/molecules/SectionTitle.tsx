import {
  VStack,
  Box,
  Heading,
  useBreakpointValue,
  HStack
} from "@chakra-ui/react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

  return breakpoint === "base" ? (
    <HStack w="100%" spacing="2" alignItems="center">
      <Box w="3px" h="8" bg="brand" />
      <Heading as="h2" fontSize="xl">
        {title}
      </Heading>
    </HStack>
  ) : (
    <VStack w="100%" spacing="2" alignItems="flex-start">
      <Heading as="h2" fontSize="2xl">
        {title}
      </Heading>
      <Box w="100%" h="1" bg="brand" />
    </VStack>
  );
};

export default SectionTitle;
