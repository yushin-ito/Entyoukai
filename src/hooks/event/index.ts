import { useQuery } from "@tanstack/react-query";

import { EVENT_VERSION } from "../../constants";
import { Event } from "../../types";

export const useQueryEvents = () =>
  useQuery<Event[]>(["events"], async () => {
    const response = await fetch(`/contents/events.json?v=${EVENT_VERSION}`);
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
