import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Article } from "../../types";

export const useQueryArticles = () =>
  useQuery<Article[]>(["articles"], async () => {
    const response = await axios.get("/assets/contents/articles.json");
    return response.data;
  });
