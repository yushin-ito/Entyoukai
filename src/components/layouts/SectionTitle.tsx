import { VStack, Box, Text } from "@chakra-ui/react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <VStack w="100%" spacing="2" alignItems="flex-start">
      <Text fontSize="3xl" fontWeight="bold">
        {title}
      </Text>
      <Box w="100%" h="1" bg="brand" />
    </VStack>
  );
};

export default SectionTitle;
