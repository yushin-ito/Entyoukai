import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { News } from "../../types";

export const useQueryNews = () => {
  const navigate = useNavigate();

  return useQuery<News[]>(
    ["news"],
    async () => {
      const response = await fetch("/assets/contents/news.json");
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
