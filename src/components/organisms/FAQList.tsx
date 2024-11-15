import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
  HStack
} from "@chakra-ui/react";
import { memo } from "react";

import type { FAQ } from "../../types";

type FAQListProps = {
  faq: FAQ[];
};

const FAQList = memo(({ faq }: FAQListProps) => {
  return (
    <Accordion w="100%" allowToggle>
      {faq.map((item, index) => (
        <AccordionItem key={index}>
          {/* 質問 */}
          <AccordionButton
            px={{ base: "6px", md: "12px" }}
            py={{ base: "16px", md: "20px" }}
            alignItems="center"
            justifyContent="space-between"
            _hover={{ bg: { base: "transparent", md: "gray.50" } }}
            _active={{ bg: "gray.50" }}
          >
            <HStack
              alignItems="flex-start"
              spacing={{ base: "4px", md: "6px" }}
            >
              <Text as="span" fontSize={{ base: "xs", md: "sm" }}>
                Q.
              </Text>
              <Text as="p" textAlign="left" fontSize={{ base: "xs", md: "sm" }}>
                {item.question}
              </Text>
            </HStack>
            <AccordionIcon
              boxSize={{ base: "16px", md: "24px" }}
              color="brand.500"
            />
          </AccordionButton>

          {/* 回答 */}
          <AccordionPanel
            px={{ base: "6px", md: "12px" }}
            pb={{ base: "4", md: "6" }}
          >
            <VStack alignItems="flex-start" spacing="2">
              <HStack
                alignItems="flex-start"
                spacing={{ base: "4px", md: "6px" }}
              >
                <Text
                  as="span"
                  fontSize={{ base: "xs", md: "sm" }}
                  color="red.500"
                >
                  A.
                </Text>
                <Text
                  as="p"
                  fontSize={{ base: "xs", md: "sm" }}
                  color="red.500"
                >
                  {item.answer}
                </Text>
              </HStack>
              <Text as="p" fontSize={{ base: "2xs", md: "xs" }}>
                {item.info}
              </Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
});

export default FAQList;
