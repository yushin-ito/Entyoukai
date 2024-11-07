import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
  useToast,
  Text
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import Input from "../components/atoms/Input";
import Textarea from "../components/atoms/Textarea";
import Toast from "../components/atoms/Toast";
import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import Footer from "../components/organisms/Footer";
import MainVisual from "../components/organisms/MainVisual";
import { usePostContact } from "../hooks/database";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>();

  const { mutateAsync: mutateAsyncPostContact } = usePostContact({
    onSuccess: () => {
      toast({
        duration: 6000,
        render: ({ onClose }) => (
          <Toast
            status="success"
            title="お問い合わせを受け付けました"
            onClose={onClose}
          />
        )
      });
    },
    onError: (error) => {
      console.error(error);
      toast({
        render: ({ onClose }) => (
          <Toast
            status="error"
            title="お問い合わせに失敗しました"
            onClose={onClose}
          />
        ),
        duration: 5000,
        isClosable: true
      });
    }
  });

  const onSubmit = async (data: FormData) => {
    await mutateAsyncPostContact(data);
  };

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <Helmet>
        <title>お問い合わせ</title>
      </Helmet>
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "80%", sm: "50%" }} spacing={{ base: "4", sm: "8" }}>
        <SectionTitle title="お問い合わせ" />
        <VStack
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          w={{ base: "100%", sm: "90%" }}
          spacing={{ base: "4", sm: "8" }}
        >
          <VStack w="100%" alignItems="flex-start" spacing="1">
            <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="bold">
              お問い合わせ内容をご入力のうえ、以下のフォームから送信してください。
            </Text>
            <Text fontSize={{ base: "xs", sm: "sm" }}>
              内容を確認次第、ご入力いただいたメールアドレスにご返信いたします。なお、場合によっては返信にお時間をいただくことがございますので、あらかじめご了承ください。
            </Text>
          </VStack>
          <VStack w="100%" spacing={{ base: "8", sm: "12" }}>
            {/* お名前 */}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel fontSize="sm" fontWeight="bold" color="brand">
                お名前 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                size={{ base: "sm", sm: "md" }}
                rounded="md"
                placeholder="お名前"
                {...register("name", { required: "お名前を入力してください" })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            {/* メールアドレス */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel fontSize="sm" fontWeight="bold" color="brand">
                メールアドレス <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="email"
                size={{ base: "sm", sm: "md" }}
                rounded="md"
                placeholder="メールアドレス"
                {...register("email", {
                  required: "メールアドレスを入力してください",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "有効なメールアドレスを入力してください"
                  }
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* 電話番号 */}
            <FormControl isInvalid={!!errors.phone}>
              <FormLabel fontSize="sm" fontWeight="bold" color="brand">
                電話番号 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="tel"
                size={{ base: "sm", sm: "md" }}
                rounded="md"
                placeholder="電話番号"
                {...register("phone", {
                  required: "電話番号を入力してください",
                  pattern: {
                    value: /^[0-9]{10,11}$/,
                    message: "有効な電話番号を入力してください"
                  }
                })}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            {/* お問い合わせ内容 */}
            <FormControl isInvalid={!!errors.message}>
              <FormLabel fontSize="sm" fontWeight="bold" color="brand">
                お問い合わせ内容 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Textarea
                h={{ base: "160px", sm: "180px" }}
                placeholder="お問い合わせ内容"
                {...register("message", {
                  required: "お問い合わせ内容を入力してください"
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
            w={{ base: "90%", sm: "60%" }}
            mt={{ base: "6", sm: "12" }}
            color="white"
            bg="brand"
            _hover={{ opacity: { base: 1, sm: 0.8 } }}
            _active={{
              transform: "scale(0.98)",
              opacity: 0.8
            }}
            isLoading={isSubmitting}
          >
            送信する
          </Button>
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Contact;
