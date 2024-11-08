import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAppStore from "../../stores";
import { Sponsor } from "../../types";

export const useQuerySponsors = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Sponsor[]>(
    ["sponsors"],
    async () => {
      const response = await axios.get("/assets/contents/sponsors.json");
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
