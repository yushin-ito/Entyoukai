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
      if (!id) {
        navigate("/notfound", { replace: true });
        return;
      }
      const response = await axios.get("/assets/contents/articles.json");
      const articles: Article[] = response.data;
      const article = articles.find((article) => article.id === Number(id));

      if (!article) {
        navigate("/notfound", { replace: true });
        return;
      }

      return article;
    },
    {
      onSettled: () => setIsLoading(false),
      onSuccess: () => setError(null),
      onError: (error) => {
        navigate("/error", { replace: true });
        setError(error as string);
        setIsLoading(false);
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
        navigate("/error", { replace: true });
        setError(error as string);
        setIsLoading(false);
      }
    }
  );
};
