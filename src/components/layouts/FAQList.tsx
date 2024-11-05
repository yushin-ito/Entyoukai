import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FAQ } from "../../types";

type FAQListProps = {
  faq: FAQ[];
};

const FAQList = ({ faq }: FAQListProps) => {
  return (
    <Accordion w="100%" allowToggle>
      {faq.map((item, index) => (
        <AccordionItem key={index}>
          {/* 質問 */}
          <AccordionButton
            px={{ base: "6px", sm: "12px" }}
            py={{ base: "16px", sm: "20px" }}
            alignItems="center"
            justifyContent="space-between"
            _hover={{ bg: "gray.50" }}
            sx={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <HStack
              alignItems="flex-start"
              spacing={{ base: "4px", sm: "6px" }}
            >
              <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="bold">
                Q.
              </Text>
              <Text
                textAlign="left"
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
              >
                {item.question}
              </Text>
            </HStack>
            <AccordionIcon
              w={{ base: "16px", sm: "24px" }}
              h={{ base: "16px", sm: "24px" }}
            />
          </AccordionButton>

          {/* 回答 */}
          <AccordionPanel
            px={{ base: "6px", sm: "12px" }}
            pb={{ base: "4", sm: "6" }}
          >
            <VStack alignItems="flex-start" spacing="2">
              <HStack
                alignItems="flex-start"
                spacing={{ base: "4px", sm: "6px" }}
              >
                <Text
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  A.
                </Text>
                <Text
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  {item.answer}
                </Text>
              </HStack>
              <Text fontSize={{ base: "2xs", sm: "xs" }}>{item.info}</Text>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQList;
