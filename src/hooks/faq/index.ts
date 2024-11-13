import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { FAQ } from "../../types";

export const useQueryFAQ = () => {
  const navigate = useNavigate();

  return useQuery<FAQ[]>(
    ["faq"],
    async () => {
      const response = await fetch("/assets/contents/faq.json");
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
