import { Avatar as CustomAvatar, AvatarProps } from "@chakra-ui/react";
import { memo } from "react";

import Skeleton from "./Skeleton";

const Avatar = memo(({ ...props }: AvatarProps) => {
  return (
    <CustomAvatar
      bg="gray.200"
      color="gray.400"
      overflow="hidden"
      icon={<Skeleton w="100%" h="100%" />}
      {...props}
    />
  );
});

export default Avatar;
