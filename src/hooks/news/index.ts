import { useQuery } from "@tanstack/react-query";

import { News } from "../../types";

export const useQueryNews = () =>
  useQuery<News[]>(["news"], async () => {
    const response = await fetch("/assets/contents/news.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
