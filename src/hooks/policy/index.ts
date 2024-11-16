import { useQuery } from "@tanstack/react-query";

import { Policy } from "../../types";

export const useQuerySitePolicy = () =>
  useQuery<Policy[]>(["site_policy"], async () => {
    const response = await fetch("/contents/site_policy.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });

export const useQueryPrivacyPolicy = () =>
  useQuery<Policy[]>(["privacy_policy"], async () => {
    const response = await fetch("/contents/privacy_policy.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
