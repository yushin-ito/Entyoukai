import { Text, VStack, HStack } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useState, useEffect, useRef, memo, useCallback } from "react";

import MotionBox from "../atoms/MotionBox";

const target = new Date("2025-01-12T13:30:00").getTime();

const Countdown = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clac = useCallback(() => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }, []);

  const [timer, setTimer] = useState(clac);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(clac());
    }, 1000);

    return () => clearInterval(id);
  }, [clac]);

  const labels: Record<string, string> = {
    days: "日",
    hours: "時間",
    minutes: "分",
    seconds: "秒"
  };

  if (
    timer.days === 0 &&
    timer.hours === 0 &&
    timer.minutes === 0 &&
    timer.seconds === 0
  ) {
    return (
      <VStack ref={ref} rounded="lg">
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
          二十歳のつどいは終了いたしました。
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          fontWeight="semibold"
        >
          新たな門出を迎えられたこと心より感謝申し上げます。
        </Text>
        <Text fontSize={{ base: "xl", md: "3xl" }} fontWeight="semibold">
          ありがとうございました。
        </Text>
      </VStack>
    );
  }

  return (
    <VStack ref={ref} rounded="lg">
      <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="semibold">
        二十歳のつどいまであと
      </Text>
      <HStack>
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
            w={{ base: "64px", md: "96px" }}
          >
            <VStack spacing="0">
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="semibold"
                lineHeight={{ base: "1.5", md: "1.75" }}
              >
                {String(value).padStart(2, "0")}
              </Text>
              <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold">
                {labels[unit]}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </HStack>
    </VStack>
  );
});

export default Countdown;
