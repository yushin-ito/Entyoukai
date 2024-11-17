import { useQuery } from "@tanstack/react-query";

import { NEWS_VERSION } from "../../constants";
import { News } from "../../types";

export const useQueryNews = () =>
  useQuery<News[]>(["news"], async () => {
    const response = await fetch(`/contents/news.json?v=${NEWS_VERSION}`);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
