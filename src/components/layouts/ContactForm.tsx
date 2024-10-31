import {
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Input from "../elements/Input";
import Textarea from "../elements/Textarea";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="100%" spacing="8">
      <Text fontSize={{ base: "md", sm: "xl" }} fontWeight="bold" color="brand">
        下記のフォームをお問い合わせ内容を入力して送信してください。
      </Text>
      <VStack w={{ base: "100%", sm: "60%" }} spacing={{ base: "8", sm: "12" }}>
        {/* お名前 */}
        <FormControl isInvalid={!!errors.name}>
          <FormLabel fontWeight="bold" color="brand">
            お名前 <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            placeholder="お名前"
            {...register("name", { required: "お名前を入力してください" })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        {/* メールアドレス */}
        <FormControl isInvalid={!!errors.email}>
          <FormLabel fontWeight="bold" color="brand">
            メールアドレス <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="email"
            placeholder="メールアドレス"
            {...register("email", {
              required: "メールアドレスを入力してください",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "有効なメールアドレスを入力してください",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        {/* 電話番号 */}
        <FormControl isInvalid={!!errors.phone}>
          <FormLabel fontWeight="bold" color="brand">
            電話番号 <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="tel"
            placeholder="電話番号"
            {...register("phone", {
              required: "電話番号を入力してください",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "有効な電話番号を入力してください（10〜11桁）",
              },
            })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        {/* お問い合わせ内容 */}
        <FormControl isInvalid={!!errors.message}>
          <FormLabel fontWeight="bold" color="brand">
            お問い合わせ内容 <span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Textarea
            placeholder="お問い合わせ内容"
            {...register("message", {
              required: "お問い合わせ内容を入力してください",
            })}
          />
          <FormErrorMessage>
            {errors.message && errors.message.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      {/* 送信ボタン */}
      <Button
        type="submit"
        bg="brand"
        _hover={{ bg: "brand", opacity: 0.8 }}
        _active={{ transform: "scale(0.98)" }}
        color="white"
        w={{ base: "80%", sm: "40%" }}
        mt={{ base: "6", sm: "12" }}
        isLoading={isSubmitting}
      >
        送信する
      </Button>
    </VStack>
  );
};

export default ContactForm;
