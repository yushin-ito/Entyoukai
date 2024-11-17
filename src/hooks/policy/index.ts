import { useQuery } from "@tanstack/react-query";

import { PRIVACY_POLICY_VERSION, SITE_POLICY_VERSION } from "../../constants";
import { Policy } from "../../types";

export const useQuerySitePolicy = () =>
  useQuery<Policy[]>(["site_policy"], async () => {
    const response = await fetch(
      `/contents/site_policy.json?v=${SITE_POLICY_VERSION}`
    );
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });

export const useQueryPrivacyPolicy = () =>
  useQuery<Policy[]>(["privacy_policy"], async () => {
    const response = await fetch(
      `/contents/privacy_policy.json?v=${PRIVACY_POLICY_VERSION}`
    );
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
