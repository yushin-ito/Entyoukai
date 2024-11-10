import { useCallback } from "react";

import useAppStore from "../../stores";

const useScroll = () => {
  const scrolling = useAppStore((state) => state.scrolling);
  const setScrolling = useAppStore((state) => state.setScrolling);

  const scrollToElement = useCallback(
    (element: HTMLElement, speed: number) => {
      if (scrolling) return;

      setScrolling(true);

      const start = window.scrollY;
      const target = element.getBoundingClientRect().top;

      const distance = target - window.innerHeight / 4;
      const duration = speed;
      const startTime = performance.now();

      const scroll = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easing = 1 - Math.pow(1 - progress, 3);

        const newScrollY = start + distance * easing;

        window.scrollTo(0, newScrollY);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        } else {
          setScrolling(false);
        }
      };

      requestAnimationFrame(scroll);
    },
    [scrolling, setScrolling]
  );

  return { scrolling, setScrolling, scrollToElement };
};

export default useScroll;
