import {
  VStack,
  Text,
  Stack,
  useBreakpointValue,
  Heading
} from "@chakra-ui/react";

const Access = () => {
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  return (
    <Stack
      w="100%"
      direction={{ base: "column", sm: "row" }}
      spacing={{ base: "4", sm: "6" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6533.770941781844!2d136.66164791053401!3d35.0345949726894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400390039160dda3%3A0xee33fbe0c1cb0eb3!2z5pyd5pel55S656S-5Lya56aP56WJ5Y2U6K2w5Lya!5e0!3m2!1sja!2sjp!4v1729970214415!5m2!1sja!2sjp"
        width={breakpoint === "base" ? "100%" : "320px"}
        height={breakpoint === "base" ? "180px" : "220px"}
        style={{ border: 0 }}
      />
      <VStack spacing={{ base: "4", sm: "8" }} alignItems="flex-start">
        <VStack spacing={{ base: "1", sm: "2" }} alignItems="flex-start">
          <Heading
            as="h3"
            fontSize={{ base: "sm", sm: "md" }}
            fontWeight="bold"
          >
            保健福祉センター（さわやか村）
          </Heading>
          <Text
            as="address"
            fontSize={{ base: "sm", sm: "md" }}
            fontWeight="bold"
            fontStyle="normal"
          >
            〒510-8102 三重県三重郡朝日町大字小向891-5
          </Text>
        </VStack>
        <VStack as="p" spacing={{ base: "1", sm: "2" }} alignItems="flex-start">
          <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            ・近鉄伊勢朝日駅から徒歩8分
          </Text>
          <Text as="p" fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
            ・JR朝日駅から徒歩17分
          </Text>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default Access;
