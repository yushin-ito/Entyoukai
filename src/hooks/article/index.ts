import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { ARTICLE_VERSION, ARTICLES_VERSION } from "../../constants";
import type { Article } from "../../types";

export const useQueryArticle = (id: string | undefined) => {
  const navigate = useNavigate();

  return useQuery<Article | undefined>(["article", id], async () => {
    if (!id) {
      navigate("/notfound", { replace: true });
      return;
    }

    const response = await fetch(
      `/contents/articles.json?v=${ARTICLE_VERSION}`
    );
    if (!response.ok) {
      throw new Error();
    }

    const data: Article[] = await response.json();

    return data.find((article) => article.id === Number(id));
  });
};

export const useQueryArticles = () =>
  useQuery<Article[]>(["articles"], async () => {
    const response = await fetch(
      `/contents/articles.json?v=${ARTICLES_VERSION}`
    );
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
