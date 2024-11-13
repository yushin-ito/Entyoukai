import NProgress from "nprogress";
import { memo, useEffect } from "react";
import "nprogress/nprogress.css";

import { useLoading } from "../../contexts";
import useScroll from "../../hooks/tools";

const ProgressBar = memo(() => {
  const { scrollToElement } = useScroll();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    NProgress.start();

    return () => {
      setIsLoading(false);
      NProgress.done();
    };
  }, [setIsLoading, scrollToElement]);

  return null;
});

export default ProgressBar;
