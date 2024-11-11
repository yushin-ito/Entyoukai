import { Skeleton as ChakraSkeleton, SkeletonProps } from "@chakra-ui/react";
import { memo } from "react";

const Skeleton = memo(({ ...props }: SkeletonProps) => {
  return <ChakraSkeleton startColor="white" endColor="gray.200" {...props} />;
});

export default Skeleton;
