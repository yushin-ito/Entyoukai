import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { News } from "../../types";

export const useQueryNews = () =>
  useQuery<News[]>(["news"], async () => {
    const response = await axios.get("/assets/contents/news.json");
    return response.data;
  });
