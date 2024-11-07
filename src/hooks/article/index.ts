import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAppStore from "../../stores";
import type { Article } from "../../types";

export const useQueryArticle = (id: string | undefined) => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Article | undefined>(
    ["article", id],
    async () => {
      if (!id) return;
      const response = await axios.get("/assets/contents/articles.json");
      const articles: Article[] = response.data;
      return articles.find((article) => article.id === Number(id));
    },
    {
      onSettled: () => setIsLoading(false),
      onSuccess: () => setError(null),
      onError: (error) => {
        console.error(error);
        setError(error as string);
        setIsLoading(false);
        navigate("/error");
      }
    }
  );
};

export const useQueryArticles = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Article[]>(
    ["articles"],
    async () => {
      const response = await axios.get("/assets/contents/articles.json");
      return response.data;
    },
    {
      onSettled: () => setIsLoading(false),
      onSuccess: () => setError(null),
      onError: (error) => {
        setError(error as string);
        setIsLoading(false);
        navigate("/error");
      }
    }
  );
};
