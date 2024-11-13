import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Event } from "../../types";

export const useQueryEvents = () => {
  const navigate = useNavigate();

  return useQuery<Event[]>(
    ["events"],
    async () => {
      const response = await fetch("/assets/contents/events.json");
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
