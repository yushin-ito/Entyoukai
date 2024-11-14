import { IconButton } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";

import useScroll from "../../hooks/tools/useScroll";
import { ChevronUp } from "../atoms/Icon";
import MotionBox from "../atoms/MotionBox";

const ScrollToTopButton = memo(() => {
  const [visible, setVisible] = useState(false);
  const { scrollToTop } = useScroll();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
          pos="fixed"
          bottom={{ base: "36px", md: "52px" }}
          right={{ base: "24px", lg: "52px" }}
          zIndex={999}
        >
          <IconButton
            aria-label="top"
            icon={<ChevronUp boxSize={{ base: "20px", md: "22px" }} />}
            size="lg"
            rounded="full"
            shadow="lg"
            onClick={() => scrollToTop(500)}
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
});

export default ScrollToTopButton;
