import { PostgrestError } from "@supabase/supabase-js";
import { useMutation } from "@tanstack/react-query";

import { supabase } from "../../client";
import type { UseMutationResult, Contact } from "../../types";

export type PostContactResponse = Awaited<ReturnType<typeof postContact>>;

const postContact = async (contact: Contact["Insert"]) => {
  const { error } = await supabase.from("contact").insert(contact);

  if (error) {
    throw error;
  }
};

export const usePostContact = ({
  onSuccess,
  onError
}: UseMutationResult<PostContactResponse, PostgrestError>) =>
  useMutation({
    mutationFn: postContact,
    onSuccess,
    onError
  });
