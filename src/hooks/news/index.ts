import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { News } from "../../types";

export const useQueryNews = () => {
  const navigate = useNavigate();

  return useQuery<News[]>(
    ["news"],
    async () => {
      const response = await axios.get("/assets/contents/news.json");
      return response.data;
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
