import { VStack, useToast } from "@chakra-ui/react";
import { useCallback } from "react";

import ScrollToTopButton from "../components/elements/ScrollTopButton";
import SectionTitle from "../components/elements/SectionTitle";
import Toast from "../components/elements/Toast";
import ContactForm from "../components/layouts/ContactForm";
import Footer from "../components/layouts/Footer";
import MainVisual from "../components/layouts/MainVisual";
import { usePostContact } from "../hooks/database";
import type { ContactFormData } from "../types";

const Contact = () => {
  const toast = useToast();

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

  const postContact = useCallback(
    async (contact: ContactFormData) => {
      await mutateAsyncPostContact(contact);
    },
    [mutateAsyncPostContact]
  );

  return (
    <VStack
      flex="1"
      alignItems="center"
      spacing={{ base: "10", sm: "24" }}
      overflowX="hidden"
      pos="relative"
    >
      <ScrollToTopButton />
      <MainVisual />
      <VStack w={{ base: "75%", sm: "55%" }} spacing={{ base: "6", sm: "8" }}>
        <SectionTitle title="お問い合わせ" />
        <ContactForm postContact={postContact} />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Contact;
