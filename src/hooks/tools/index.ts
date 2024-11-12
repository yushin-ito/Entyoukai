import { useCallback, useState } from "react";

const useScroll = () => {
  const [scrolling, setScrolling] = useState(false);

  const scrollToTop = useCallback(
    (speed: number) => {
      if (scrolling) return;

      setScrolling(true);

      const start = window.scrollY;
      const target = 0;
      const now = performance.now();

      const scroll = (time: number) => {
        const elapsed = time - now;
        const progress = Math.min(elapsed / speed, 1);
        const easing = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start + (target - start) * easing);

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

  const scrollToElement = useCallback(
    (element: HTMLElement, speed: number) => {
      if (scrolling) return;

      setScrolling(true);

      const start = window.scrollY;
      const target = element.getBoundingClientRect().top;

      const distance = target - window.innerHeight / 4;
      const duration = speed;
      const now = performance.now();

      const scroll = () => {
        const elapsed = performance.now() - now;
        const progress = Math.min(elapsed / duration, 1);
        const easing = 1 - Math.pow(1 - progress, 3);

        const position = start + distance * easing;

        window.scrollTo(0, position);

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

  return { scrolling, setScrolling, scrollToTop, scrollToElement };
};

export default useScroll;
