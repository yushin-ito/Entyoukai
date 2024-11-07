import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FiChevronUp } from "react-icons/fi";

import MotionBox from "../atoms/MotionBox";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const breakpoint = useBreakpointValue({ base: "base", sm: "sm" });

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback((duration: number) => {
    const start = window.scrollY;
    const target = 0;
    const now = performance.now();

    const scroll = (time: number) => {
      const elapsed = time - now;
      const progress = Math.min(elapsed / duration, 1);
      const easing = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start + (target - start) * easing);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeIn" }
          }}
          exit={{
            opacity: 0,
            y: 10,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          position="fixed"
          bottom={{ base: "36px", sm: "52px" }}
          right={{ base: "24px", sm: "52px" }}
          zIndex={999}
        >
          <IconButton
            aria-label="top"
            icon={
              <FiChevronUp size={breakpoint === "base" ? "24px" : "28px"} />
            }
            size="lg"
            color="white"
            bg="brand"
            _hover={{ opacity: { base: 1, sm: 0.8 } }}
            _active={{
              transform: "scale(0.98)",
              opacity: 0.8
            }}
            onClick={() => scrollToTop(500)}
            shadow="lg"
            rounded="full"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
