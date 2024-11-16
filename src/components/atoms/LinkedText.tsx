import { Text, Link as ChakraLink, TextProps } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type LinkedTextProps = {
  links: { word: string; url: string }[];
  children: string;
} & TextProps;

const LinkedText = ({ links, children, ...props }: LinkedTextProps) => {
  if (links.length === 0) {
    return <Text {...props}>{children}</Text>;
  }

  let remaining = children;
  const parts = [];

  for (const link of links) {
    const index = remaining.indexOf(link.word);

    if (index !== -1) {
      if (index > 0) {
        parts.push(remaining.slice(0, index));
      }

      parts.push(
        link.url.startsWith("http") ? (
          <ChakraLink
            key={link.word}
            href={link.url}
            color="brand.500"
            isExternal
            textDecoration={{ base: "underline", md: "none" }}
          >
            {link.word}
          </ChakraLink>
        ) : (
          <ChakraLink
            key={link.word}
            as={RouterLink}
            to={link.url}
            color="brand.500"
            textDecoration={{ base: "underline", md: "none" }}
          >
            {link.word}
          </ChakraLink>
        )
      );

      remaining = remaining.slice(index + link.word.length);
    }
  }

  if (remaining) {
    parts.push(remaining);
  }

  return <Text {...props}>{parts}</Text>;
};

export default LinkedText;
