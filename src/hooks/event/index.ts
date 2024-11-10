import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Event } from "../../types";

export const useQueryEvents = () => {
  const navigate = useNavigate();

  return useQuery<Event[]>(
    ["events"],
    async () => {
      const response = await axios.get("/assets/contents/events.json");
      return response.data;
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
