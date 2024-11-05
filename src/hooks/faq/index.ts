import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FAQ } from "../../types";

export const useQueryFAQ = () =>
  useQuery<FAQ[]>(["faq"], async () => {
    const response = await axios.get("/assets/contents/faq.json");
    return response.data;
  });
