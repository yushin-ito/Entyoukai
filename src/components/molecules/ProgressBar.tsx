import { useIsFetching } from "@tanstack/react-query";
import NProgress from "nprogress";
import { memo, useEffect, useRef } from "react";
import "nprogress/nprogress.css";

const ProgressBar = memo(() => {
  const isFetching = useIsFetching();
  const ref = useRef(false);

  useEffect(() => {
    if (isFetching > 0 && !ref.current) {
      ref.current = true;
      NProgress.start();
    } else if (isFetching === 0 && ref.current) {
      ref.current = false;
      NProgress.done();
    }
  }, [isFetching]);

  return null;
});

export default ProgressBar;
