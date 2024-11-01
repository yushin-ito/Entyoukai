import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  VStack,
  Icon,
  Button,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import IconButton from "../elements/IconButton";

type DropzoneProps = {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;
  error: string | null;
  setError: (message: string | null) => void;
};

const MAX_SIZE = 10 * 1024 * 1024; // 10MB

const Dropzone = ({ images, setImages, error, setError }: DropzoneProps) => {
  const onDrop = useCallback(
    (files: File[]) => {
      setError(null);

      files.forEach((file) => {
        if (file.size > MAX_SIZE) {
          setError("ファイルサイズは10MBまでです。");
          return;
        }

        const fileType = file.type;
        if (fileType !== "image/jpeg" && fileType !== "image/png") {
          setError(
            "対応していないファイル形式です。jpg, jpeg, pngのみ対応しています。"
          );
          return;
        }

        setImages((prev: File[]) => [...prev, file]);
      });
    },
    [setImages, setError]
  );

  const onDelete = useCallback(
    (index: number) => {
      setImages((prev) => prev.filter((_, i) => i !== index));
    },
    [setImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: MAX_SIZE,
  });

  return (
    <VStack w="70%" alignItems="flex-start">
      <VStack w="100%" spacing="0" alignItems="flex-start">
        <VStack
          {...getRootProps()}
          w="100%"
          h="320px"
          px="24"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          bg={error ? "red.50" : "gray.50"}
          borderWidth="1.5px"
          borderColor={error ? "red.100" : "gray.100"}
          spacing="6"
          rounded="xl"
          shadow="sm"
        >
          <input {...getInputProps()} />
          <Icon
            as={IoCloudUploadOutline}
            w="84px"
            h="84px"
            color="brand"
            strokeWidth="0.8px"
          />
          <VStack spacing="4">
            <Text fontSize="lg" fontWeight="bold">
              ここにファイルをドロップ
            </Text>
            <Text fontSize="sm" color="gray.600">
              または
            </Text>
            <Button
              px="12"
              fontSize="xs"
              color="white"
              bg="brand"
              _hover={{ bg: "brand", opacity: 0.8 }}
              _active={{ transform: "scale(0.98)" }}
            >
              ファイルを選択
            </Button>
          </VStack>
        </VStack>
        {error && (
          <Text fontSize="sm" color="red.500" mt="2">
            {error}
          </Text>
        )}
      </VStack>

      {/* プレビュー */}
      {images.length > 0 && (
        <Box
          w="100%"
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": { height: "4px" },
            "&::-webkit-scrollbar-thumb": {
              background: "#a0aec0",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": { background: "#e2e8f0" },
          }}
        >
          <HStack display="inline-flex" spacing="2">
            {images.map((file, index) => (
              <Box key={index} pos="relative" w="120px" h="120px">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  w="120px"
                  h="120px"
                  objectFit="cover"
                  rounded="lg"
                  shadow="sm"
                />
                <IconButton
                  icon={<FiX size="15px" />}
                  aria-label="delete"
                  pos="absolute"
                  top="1"
                  right="1"
                  p="2.5px"
                  color="white"
                  rounded="full"
                  bg="black"
                  opacity="0.6"
                  _hover={{ bg: "black", opacity: 0.6 }}
                  onClick={() => onDelete(index)}
                />
              </Box>
            ))}
          </HStack>
        </Box>
      )}

      {/* 注意事項 */}
      <VStack spacing="0" alignItems="flex-start">
        <Text fontSize="xs" color="gray.500">
          * 1回につき最大5ファイルまでアップロードできます。
        </Text>
        <Text fontSize="xs" color="gray.500">
          * 1ファイルのサイズは10MBまでです。
        </Text>
        <Text fontSize="xs" color="gray.500">
          * 対応ファイル形式は jpg / jpeg / png です。
        </Text>
      </VStack>
    </VStack>
  );
};

export default Dropzone;
