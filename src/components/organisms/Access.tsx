import { VStack, Text, Stack, Box, Link } from "@chakra-ui/react";
import { memo } from "react";

import { Photo } from "../atoms/Icon";
import Image from "../atoms/Image";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Access = memo(() => {
  return (
    <Stack
      w="100%"
      direction={{ base: "column", md: "row" }}
      spacing={{ base: "4", md: "6" }}
    >
      <Link
        href="https://www.google.com/maps/place/朝日町社会福祉協議会/data=!3m1!4b1!4m5!3m4!1s0x600390039160dda3:0xee33fbe0c1cb0eb3!8m2!3d35.034595!4d136.6616533"
        isExternal
      >
        <Image
          alt="保健福祉センター（さわやか村）の地図"
          src={`https://maps.googleapis.com/maps/api/staticmap?center=朝日町社会福祉協議会&zoom=18&size=600x450&markers=color:red|朝日町社会福祉協議会&key=${GOOGLE_MAPS_API_KEY}`}
          fallback={
            <Photo boxSize={{ base: "42px", md: "32px" }} color="brand.500" />
          }
          w={{ base: "100%", md: "320px" }}
          aspectRatio={4 / 3}
          pos="relative"
        >
          <Box
            pos="absolute"
            bottom={{ base: "3", md: "2" }}
            right={{ base: "3", md: "2" }}
            px="6px"
            py="2.5px"
            bg="rgba(0, 0, 0, 0.6)"
          >
            <Text fontSize="xs" color="white">
              クリックで詳細を表示
            </Text>
          </Box>
        </Image>
      </Link>
      <VStack spacing={{ base: "4", md: "8" }} alignItems="flex-start">
        <VStack spacing={{ base: "1", md: "2" }} alignItems="flex-start">
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            保健福祉センター（さわやか村）
          </Text>
          <Text
            as="address"
            fontSize={{ base: "sm", md: "md" }}
            fontStyle="normal"
          >
            〒510-8102 三重県三重郡朝日町大字小向891-5
          </Text>
        </VStack>
        <VStack spacing={{ base: "1", md: "2" }} alignItems="flex-start">
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            ・近鉄伊勢朝日駅から徒歩8分
          </Text>
          <Text as="p" fontSize={{ base: "sm", md: "md" }}>
            ・JR朝日駅から徒歩17分
          </Text>
        </VStack>
      </VStack>
    </Stack>
  );
});

export default Access;
