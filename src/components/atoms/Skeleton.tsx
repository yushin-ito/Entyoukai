import { Skeleton as ChakraSkeleton, SkeletonProps } from "@chakra-ui/react";

const Skeleton = ({ ...props }: SkeletonProps) => {
  return <ChakraSkeleton startColor="white" endColor="gray.200" {...props} />;
};

export default Skeleton;
