import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Sponsor } from "../../types";

export const useQuerySponsors = () => {
  const navigate = useNavigate();

  return useQuery<Sponsor[]>(
    ["sponsors"],
    async () => {
      const response = await axios.get("/assets/contents/sponsors.json");
      return response.data;
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
