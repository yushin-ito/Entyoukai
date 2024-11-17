import { useQuery } from "@tanstack/react-query";

import { FAQ_VERSION } from "../../constants";
import { FAQ } from "../../types";

export const useQueryFAQ = () =>
  useQuery<FAQ[]>(["faq"], async () => {
    const response = await fetch(`/contents/faq.json?v=${FAQ_VERSION}`);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
