import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAppStore from "../../stores";
import { Policy } from "../../types";

export const useQuerySitePolicy = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Policy[]>(
    ["site_policy"],
    async () => {
      const response = await axios.get("/assets/contents/site_policy.json");
      return response.data;
    },
    {
      onSettled: () => setIsLoading(false),
      onSuccess: () => setError(null),
      onError: (error) => {
        navigate("/error", { replace: true });
        setError(error as string);
        setIsLoading(false);
      }
    }
  );
};

export const useQueryPrivacyPolicy = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Policy[]>(
    ["privacy_policy"],
    async () => {
      const response = await axios.get("/assets/contents/privacy_policy.json");
      return response.data;
    },
    {
      onSettled: () => setIsLoading(false),
      onSuccess: () => setError(null),
      onError: (error) => {
        navigate("/error", { replace: true });
        setError(error as string);
        setIsLoading(false);
      }
    }
  );
};
