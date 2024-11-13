import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Policy } from "../../types";

export const useQuerySitePolicy = () => {
  const navigate = useNavigate();

  return useQuery<Policy[]>(
    ["site_policy"],
    async () => {
      const response = await fetch("/assets/contents/site_policy.json");
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};

export const useQueryPrivacyPolicy = () => {
  const navigate = useNavigate();

  return useQuery<Policy[]>(
    ["privacy_policy"],
    async () => {
      const response = await fetch("/assets/contents/privacy_policy.json");
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
