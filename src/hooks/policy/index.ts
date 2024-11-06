import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Policy } from "../../types";

export const useQuerySitePolicy = () =>
  useQuery<Policy[]>(["site_policy"], async () => {
    const response = await axios.get("/assets/contents/site_policy.json");
    return response.data;
  });

export const useQueryPrivacyPolicy = () =>
  useQuery<Policy[]>(["privacy_policy"], async () => {
    const response = await axios.get("/assets/contents/privacy_policy.json");
    return response.data;
  });
