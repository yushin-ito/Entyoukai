import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  VStack,
  useToast,
  Text,
  Input
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import Toast from "../components/atoms/Toast";
import ScrollToTopButton from "../components/molecules/ScrollToTopButton";
import SectionTitle from "../components/molecules/SectionTitle";
import { usePostContact } from "../hooks/contact";

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
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();

  const { mutateAsync: mutateAsyncPostContact } = usePostContact({
    onSuccess: () => {
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="success"
            title="お問い合わせを受け付けました"
            onClose={onClose}
          />
        )
      });
    },
    onError: () => {
      toast({
        duration: 6000,
        containerStyle: { minW: "auto" },
        render: ({ onClose }) => (
          <Toast
            status="error"
            title="お問い合わせに失敗しました"
            onClose={onClose}
          />
        )
      });
    }
  });

  const onSubmit = async (data: FormData) => {
    await mutateAsyncPostContact(data);
    reset();
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "お問い合わせ | 猿鳥会",
    description:
      "「二十歳のつどい」公式Webサイトのお問い合わせページです。お問い合わせ内容をご入力のうえ、送信してください。",
    url: "https://entyoukai.com/contact",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "entyoukai.team@gmail.com",
      telephone: "",
      availableLanguage: ["Japanese"]
    }
  };

  return (
    <VStack
      as="main"
      w="100%"
      spacing={{ base: "16", md: "24" }}
      pos="relative"
    >
      <Helmet>
        <title>お問い合わせ</title>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <ScrollToTopButton />
      <VStack
        w={{ base: "80%", md: "70%", lg: "50%" }}
        spacing={{ base: "4", md: "6" }}
      >
        <SectionTitle title="お問い合わせ" />
        <VStack
          as="form"
          w="100%"
          spacing={{ base: "8", md: "12" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <VStack as="section" w="100%" alignItems="flex-start" spacing="1">
            <Text
              as="p"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="semibold"
            >
              お問い合わせ内容をご入力のうえ、以下のフォームから送信してください。
            </Text>
            <Text as="p" fontSize={{ base: "xs", md: "sm" }}>
              内容を確認次第、ご入力いただいたメールアドレスにご返信いたします。なお、場合によっては返信にお時間をいただくことがございますので、あらかじめご了承ください。
            </Text>
          </VStack>
          <VStack
            w={{ base: "100%", md: "90%" }}
            spacing={{ base: "8", md: "12" }}
          >
            {/* お名前 */}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel
                as="label"
                color="brand.500"
                fontSize={{ base: "xs", md: "sm" }}
              >
                お名前 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                size={{ base: "sm", md: "md" }}
                rounded="md"
                placeholder="お名前"
                {...register("name", { required: "お名前を入力してください" })}
              />
              <FormErrorMessage as="span" fontSize={{ base: "xs", md: "sm" }}>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            {/* メールアドレス */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel
                as="label"
                color="brand.500"
                fontSize={{ base: "xs", md: "sm" }}
              >
                メールアドレス <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="email"
                size={{ base: "sm", md: "md" }}
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
              <FormErrorMessage as="span" fontSize={{ base: "xs", md: "sm" }}>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            {/* 電話番号 */}
            <FormControl isInvalid={!!errors.phone}>
              <FormLabel
                as="label"
                color="brand.500"
                fontSize={{ base: "xs", md: "sm" }}
              >
                電話番号 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="tel"
                size={{ base: "sm", md: "md" }}
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
              <FormErrorMessage as="span" fontSize={{ base: "xs", md: "sm" }}>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>

            {/* お問い合わせ内容 */}
            <FormControl isInvalid={!!errors.message}>
              <FormLabel
                as="label"
                color="brand.500"
                fontSize={{ base: "xs", md: "sm" }}
              >
                お問い合わせ内容 <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                as="textarea"
                h={{ base: "180px", md: "240px" }}
                py="3"
                {...register("message", {
                  required: "お問い合わせ内容を入力してください",
                  maxLength: {
                    value: 500,
                    message: "500文字以内で入力してください"
                  }
                })}
              />
              <FormErrorMessage as="span" fontSize={{ base: "xs", md: "sm" }}>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
          </VStack>

          {/* 送信ボタン */}
          <Button
            type="submit"
            w={{ base: "80%", md: "50%" }}
            mt={{ base: "4", md: "8" }}
            fontSize={{ base: "xs", md: "sm" }}
            isLoading={isSubmitting}
          >
            送信する
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Contact;
