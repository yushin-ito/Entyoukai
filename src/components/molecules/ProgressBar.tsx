import { useIsFetching } from "@tanstack/react-query";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import "nprogress/nprogress.css";

import useAppStore from "../../stores";

const ProgressBar = () => {
  const isFetching = useIsFetching();
  const setProgress = useAppStore((state) => state.setProgress);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFetching > 0 && !isLoading) {
      setIsLoading(true);
      NProgress.start();
      setProgress(0);
    } else if (isFetching === 0 && isLoading) {
      setIsLoading(false);
      NProgress.done();
      setProgress(100);
    }
  }, [isFetching, isLoading, setProgress]);

  return null;
};

export default ProgressBar;
