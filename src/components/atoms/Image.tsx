import { Image as ChakraImage, BoxProps } from "@chakra-ui/react";
import { memo, useState } from "react";

import MotionBox from "./MotionBox";
import Skeleton from "./Skeleton";

type ImageProps = BoxProps & {
  alt: string;
  src: string;
};

const Image = memo(({ alt, src, ...props }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton
      w={props.w}
      h={props.h}
      isLoaded={isLoaded}
      rounded={props.rounded}
    >
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          transition: { duration: 0.8, ease: "easeOut" }
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
        />
        {props.children}
      </MotionBox>
    </Skeleton>
  );
});

export default Image;
