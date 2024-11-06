import { Text, VStack, HStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import MotionBox from "../elements/MotionBox";

const target = new Date("2025-01-08T00:00:00").getTime();

const Countdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clac = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  const [timer, setTimer] = useState(clac);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(clac());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const labels: Record<string, string> = {
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒"
  };

  return (
    <VStack ref={ref} spacing="5" rounded="lg">
      <Text fontSize={{ base: "lg", sm: "2xl" }} fontWeight="bold">
        二十歳のつどいまであと
      </Text>
      <HStack spacing="0" alignItems="flex-end">
        {Object.entries(timer).map(([unit, value]) => (
          <MotionBox
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                : {}
            }
            w={{ base: "64px", sm: "96px" }}
            bg="white"
            rounded="md"
          >
            <Text
              textAlign="center"
              fontSize={{ base: "3xl", sm: "5xl" }}
              fontWeight="bold"
            >
              {String(value).padStart(2, "0")}
            </Text>
            <Text
              textAlign="center"
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="bold"
            >
              {labels[unit]}
            </Text>
          </MotionBox>
        ))}
      </HStack>
    </VStack>
  );
};

export default Countdown;
