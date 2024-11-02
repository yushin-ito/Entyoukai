import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Event } from "../../types";

export const useQueryEvents = () =>
  useQuery<Event[]>(["events"], async () => {
    const response = await axios.get("/assets/contents/events.json");
    return response.data;
  });
