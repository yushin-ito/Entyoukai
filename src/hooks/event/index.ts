import { useQuery } from "@tanstack/react-query";

import { Event } from "../../types";

export const useQueryEvents = () =>
  useQuery<Event[]>(["events"], async () => {
    const response = await fetch("/contents/events.json");
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
