import { IconButton, useBreakpointValue } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, memo } from "react";
import { FiChevronUp } from "react-icons/fi";

import useScroll from "../../hooks/tools";
import MotionBox from "../atoms/MotionBox";

const ScrollToTopButton = memo(() => {
  const [visible, setVisible] = useState(false);
  const { scrollToTop } = useScroll();
  const breakpoint = useBreakpointValue({ base: "base", md: "md" });

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
            icon={
              <FiChevronUp size={breakpoint === "base" ? "24px" : "28px"} />
            }
            size="lg"
            color="white"
            bg="brand"
            _hover={{ opacity: { base: 1, md: 0.8 } }}
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
});

export default ScrollToTopButton;
