import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Policy } from "../../types";

export const useQuerySitePolicy = () => {
  const navigate = useNavigate();

  return useQuery<Policy[]>(
    ["site_policy"],
    async () => {
      const response = await axios.get("/assets/contents/site_policy.json");
      return response.data;
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
      const response = await axios.get("/assets/contents/privacy_policy.json");
      return response.data;
    },
    {
      onError: () => {
        navigate("/error", { replace: true });
      }
    }
  );
};
