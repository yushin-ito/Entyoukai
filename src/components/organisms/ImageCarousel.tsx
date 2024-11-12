import { Box, Image } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

import MotionBox from "../atoms/MotionBox";
import Skeleton from "../atoms/Skeleton";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <Skeleton
      isLoaded={isLoaded}
      w="100%"
      h="100%"
      rounded={{ base: "md", md: "xl" }}
    >
      <Box
        pos="relative"
        w="100%"
        h={{ base: "200px", md: "360px", lg: "420px" }}
        rounded={{ base: "md", md: "xl" }}
        overflow="hidden"
        bg="gray.200"
      >
        <AnimatePresence initial={false}>
          <MotionBox
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            pos="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
          >
            <Image
              src={images[currentIndex]}
              alt=""
              w="100%"
              h="100%"
              objectFit="cover"
              loading="lazy"
              onLoad={() => setIsLoaded(true)}
            />
          </MotionBox>
        </AnimatePresence>
      </Box>
    </Skeleton>
  );
});

export default ImageCarousel;
