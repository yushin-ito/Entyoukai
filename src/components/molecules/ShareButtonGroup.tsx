import { HStack, IconButton, useToast } from "@chakra-ui/react";
import { memo, useCallback } from "react";

import { LINE, Link, Twitter } from "../atoms/Icon";
import Toast from "../atoms/Toast";

const ShareButtonGroup = memo(() => {
  const url = window.location.href;
  const toast = useToast();

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="success"
            title="リンクをコピーしました。"
            onClose={onClose}
          />
        )
      });
    } catch {
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="error"
            title="コピーに失敗しました。"
            onClose={onClose}
          />
        )
      });
    }
  }, [url, toast]);

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="center"
      spacing={{ base: "4", md: "6" }}
    >
      {/* LINE */}
      <IconButton
        aria-label="Share on LINE"
        icon={<LINE boxSize="18px" />}
        variant="outline"
        rounded="full"
        onClick={() => {
          window.open(
            `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`
          );
        }}
      />

      {/* Twitter */}
      <IconButton
        aria-label="Share on X(Twitter)"
        icon={<Twitter boxSize="18px" />}
        variant="outline"
        rounded="full"
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
          );
        }}
      />

      {/* リンク */}
      <IconButton
        aria-label="Copy link"
        icon={<Link boxSize="18px" />}
        variant="outline"
        rounded="full"
        onClick={copyToClipboard}
      />
    </HStack>
  );
});

export default ShareButtonGroup;
