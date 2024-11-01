import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import Dropzone from "./Dropzone";
import Input from "../elements/Input";

type FormData = {
  password: string;
};

const ImageForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (images.length < 1) {
      setError("画像をアップロードしてください。");
      return;
    } else if (images.length > 5) {
      setError("画像は最大5枚までアップロード可能です。");
      return;
    }

    setError(null);
    console.log(data);
    console.log(images);

    setImages([]);
    reset();
  };

  return (
    <VStack w="100%" spacing="6" as="form" onSubmit={handleSubmit(onSubmit)}>
      <Dropzone
        images={images}
        setImages={setImages}
        error={error}
        setError={setError}
      />

      {/* パスワード */}
      <Box w="70%">
        <FormControl isInvalid={!!errors.password}>
          <FormLabel fontWeight="bold" color="brand">
            パスワード <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="password"
            placeholder="パスワード"
            {...register("password", {
              required: "パスワードを入力してください",
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
      </Box>

      {/* 送信ボタン */}
      <Button
        type="submit"
        bg="brand"
        _hover={{ bg: "brand", opacity: 0.8 }}
        _active={{ transform: "scale(0.98)" }}
        color="white"
        w={{ base: "80%", sm: "40%" }}
        mt={{ base: "2", sm: "4" }}
      >
        送信する
      </Button>
    </VStack>
  );
};

export default ImageForm;
