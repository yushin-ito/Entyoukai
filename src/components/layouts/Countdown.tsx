import { useState, useEffect, useRef } from "react";
import { Text, VStack, HStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import MotionBox from "../elements/MotionBox";

const targetDate = new Date("2025-01-08T00:00:00").getTime();

const Countdown = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clac = () => {
    const now = Date.now();
    const diff = Math.max(targetDate - now, 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
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
    seconds: "秒",
  };

  return (
    <VStack id="countdown" ref={ref} spacing="5" rounded="lg">
      <Text fontSize="2xl" fontWeight="bold">
        二十歳のつどい まであと
      </Text>
      <HStack spacing="4" alignItems="flex-end">
        {Object.entries(timer).map(([unit, value]) => (
          <MotionBox
            key={unit}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }
                : {}
            }
            bg="white"
            rounded="md"
            w="84px"
          >
            <Text textAlign="center" fontSize="4xl" fontWeight="bold">
              {String(value).padStart(2, "0")}
            </Text>
            <Text textAlign="center" fontSize="lg" fontWeight="bold">
              {labels[unit]}
            </Text>
          </MotionBox>
        ))}
      </HStack>
    </VStack>
  );
};

export default Countdown;
