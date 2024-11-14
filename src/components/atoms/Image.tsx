import { Image as ChakraImage, BoxProps, Center } from "@chakra-ui/react";
import { memo, ReactNode, useState } from "react";

import MotionBox from "./MotionBox";
import Skeleton from "./Skeleton";

type ImageProps = BoxProps & {
  alt: string;
  src: string;
  fallback: ReactNode;
};

const Image = memo(({ alt, src, fallback, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <Skeleton
      w={props.w}
      h={props.h}
      isLoaded={isLoaded}
      rounded={props.rounded}
    >
      {isError ? (
        <Center bg="gray.200" {...props}>
          {fallback}
        </Center>
      ) : (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            transition: { duration: 0.8, ease: "easeIn" }
          }}
          overflow="hidden"
          bg="gray.200"
          {...props}
        >
          <ChakraImage
            src={src}
            alt={alt}
            w="100%"
            h="100%"
            objectFit="cover"
            shadow={{ base: "xs", md: "sm" }}
            draggable={false}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
          />
          {props.children}
        </MotionBox>
      )}
    </Skeleton>
  );
});

export default Image;
