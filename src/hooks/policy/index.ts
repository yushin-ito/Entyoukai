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
        setError(error as string);
        setIsLoading(false);
        navigate("/error");
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
        setError(error as string);
        setIsLoading(false);
        navigate("/error");
      }
    }
  );
};
