import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { FAQ } from "../../types";

export const useQueryFAQ = () => {
  const navigate = useNavigate();

  return useQuery<FAQ[]>(
    ["faq"],
    async () => {
      const response = await axios.get("/assets/contents/faq.json");
      return response.data;
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
