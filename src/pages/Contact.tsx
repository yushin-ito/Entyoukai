import { VStack, useToast } from "@chakra-ui/react";
import MainVisual from "../components/layouts/MainVisual";
import SectionTitle from "../components/elements/SectionTitle";
import Footer from "../components/layouts/Footer";
import ContactForm from "../components/layouts/ContactForm";
import { usePostContact } from "../hooks/contact";
import { useCallback } from "react";
import { ContactFormData } from "../types";
import Toast from "../components/elements/Toast";

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
        ),
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
        isClosable: true,
      });
    },
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
      spacing={{ base: "10", sm: "20" }}
      overflowX="hidden"
    >
      <MainVisual />
      <VStack w={{ base: "70%", sm: "60%" }} spacing={{ base: "6", sm: "8" }}>
        <SectionTitle id="contact" title="お問い合わせ" />
        <ContactForm postContact={postContact} />
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Contact;
