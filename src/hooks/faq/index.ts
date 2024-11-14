import { useQuery } from "@tanstack/react-query";

import { FAQ } from "../../types";

export const useQueryFAQ = () =>
  useQuery<FAQ[]>(["faq"], async () => {
    const response = await fetch("/assets/contents/faq.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
