import {
  VStack,
  Box,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  return breakpoint === "base" ? (
    <HStack w="100%" spacing="2" alignItems="center">
      <Box w="3px" h="8" bg="brand" />
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
    </HStack>
  ) : (
    <VStack w="100%" spacing="2" alignItems="flex-start">
      <Text fontSize="2xl" fontWeight="bold">
        {title}
      </Text>
      <Box w="100%" h="1" bg="brand" />
    </VStack>
  );
};

export default SectionTitle;
