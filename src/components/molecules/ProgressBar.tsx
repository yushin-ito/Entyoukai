import NProgress from "nprogress";
import { memo, useEffect } from "react";
import "nprogress/nprogress.css";

import { useLoading } from "../../contexts";
import useScroll from "../../hooks/tools/useScroll";

NProgress.configure({
  showSpinner: false
});

const ProgressBar = memo(() => {
  const { scrollToElement } = useScroll();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.width = "100%";

    setIsLoading(true);
    NProgress.start();

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      setIsLoading(false);
      NProgress.done();
    };
  }, [setIsLoading, scrollToElement]);

  return null;
});

export default ProgressBar;
