import { useQuery } from "@tanstack/react-query";

import { Sponsor } from "../../types";

export const useQuerySponsors = () =>
  useQuery<Sponsor[]>(["sponsors"], async () => {
    const response = await fetch("/assets/contents/sponsors.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
