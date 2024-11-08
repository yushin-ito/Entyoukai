import { useIsFetching } from "@tanstack/react-query";
import NProgress from "nprogress";
import { useEffect } from "react";
import "nprogress/nprogress.css";

import useAppStore from "../../stores";

const ProgressBar = () => {
  const isFetching = useIsFetching();
  const setProgress = useAppStore((state) => state.setProgress);

  useEffect(() => {
    if (isFetching > 0) {
      NProgress.start();
      setProgress(0);
    } else {
      NProgress.done();
      setProgress(100);
    }
  }, [isFetching, setProgress]);

  return null;
};

export default ProgressBar;
