import { Image as ChakraImage, BoxProps } from "@chakra-ui/react";
import { useState } from "react";

import MotionBox from "./MotionBox";
import Skeleton from "./Skelton";

type ImageProps = BoxProps & {
  alt: string;
  src: string;
};

const Image: React.FC<ImageProps> = ({ alt, src, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Skeleton isLoaded={isLoaded} rounded={props.rounded}>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{
          opacity: isLoaded ? 1 : 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }}
        overflow="hidden"
        {...props}
      >
        <ChakraImage
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          w="100%"
          h="auto"
          objectFit="contain"
          draggable="false"
          loading="lazy"
          shadow={{ base: "xs", sm: "sm" }}
        />
      </MotionBox>
    </Skeleton>
  );
};

export default Image;
