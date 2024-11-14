import { useState, useEffect } from "react";

const useResize = () => {
  const [resize, setResize] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout;

    const onResize = () => {
      setResize(true);

      clearTimeout(id);
      id = setTimeout(() => {
        setResize(false);
      }, 10);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(id);
    };
  }, []);

  return { resize };
};

export default useResize;
