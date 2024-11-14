import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

import { Photo } from "../atoms/Icon";
import Image from "../atoms/Image";
import MotionBox from "../atoms/MotionBox";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <Box w="100%" aspectRatio={5 / 3} pos="relative">
      <AnimatePresence initial={false}>
        <MotionBox
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          w="100%"
          pos="absolute"
          top="0"
        >
          <Image
            src={images[currentIndex]}
            alt={`photo${currentIndex}`}
            fallback={
              <Photo boxSize={{ base: "42px", md: "84px" }} color="brand.500" />
            }
            w="100%"
            aspectRatio={5 / 3}
            rounded={{ base: "md", md: "xl" }}
          />
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
});

export default ImageCarousel;
