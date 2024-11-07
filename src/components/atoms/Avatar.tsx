import { Avatar as CustomAvatar, AvatarProps } from "@chakra-ui/react";

import Skeleton from "./Skeleton";

const Avatar = ({ ...props }: AvatarProps) => {
  return (
    <CustomAvatar
      bg="gray.200"
      color="gray.400"
      overflow="hidden"
      icon={<Skeleton w="100%" h="100%" />}
      {...props}
    />
  );
};

export default Avatar;
