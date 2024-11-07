import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import useAppStore from "../../stores";
import { Event } from "../../types";

export const useQueryEvents = () => {
  const setIsLoading = useAppStore((state) => state.setIsLoading);
  const setError = useAppStore((state) => state.setError);
  const navigate = useNavigate();

  return useQuery<Event[]>(
    ["events"],
    async () => {
      const response = await axios.get("/assets/contents/events.json");
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
