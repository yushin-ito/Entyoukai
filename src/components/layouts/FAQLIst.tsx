import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
  HStack,
  TextProps,
  Link,
} from "@chakra-ui/react";
import { FAQ } from "../../types";

type TextWithLinkProps = {
  path: string;
  children: string;
};

const TextWithLink = ({
  path,
  children,
  ...props
}: TextWithLinkProps & TextProps) => {
  if (!path || !children.includes("こちら")) {
    return <Text {...props}>{children}</Text>;
  }

  const parts = children.split("こちら");
  return (
    <Text {...props}>
      {parts[0]}
      <Link px="1px" href={path}>
        こちら
      </Link>
      {parts[1]}
    </Text>
  );
};

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
            px={{ base: "0", sm: "12px" }}
            py={{ base: "16px", sm: "20px" }}
            _hover={{ bg: "gray.50" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack
              alignItems="flex-start"
              spacing={{ base: "2px", sm: "6px" }}
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
          <AccordionPanel px="12px" pb="4">
            <VStack alignItems="flex-start" spacing="2">
              <HStack
                alignItems="flex-start"
                spacing={{ base: "2px", sm: "6px" }}
              >
                <Text
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  A.
                </Text>
                <TextWithLink
                  path={item.path}
                  fontSize={{ base: "xs", sm: "sm" }}
                  fontWeight="bold"
                  color="red.500"
                >
                  {item.answer}
                </TextWithLink>
              </HStack>
              <TextWithLink
                path={item.path}
                fontSize={{ base: "2xs", sm: "xs" }}
              >
                {item.info}
              </TextWithLink>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQList;
