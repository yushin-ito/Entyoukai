import { useQuery } from "@tanstack/react-query";

import { SPONSOR_VERSION } from "../../constants";
import { Sponsor } from "../../types";

export const useQuerySponsors = () =>
  useQuery<Sponsor[]>(["sponsors"], async () => {
    const response = await fetch(
      `/contents/sponsors.json?v=${SPONSOR_VERSION}`
    );
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
