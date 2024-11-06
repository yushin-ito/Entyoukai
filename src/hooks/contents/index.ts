import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import type { Article, Event, FAQ, News, Policy } from "../../types";

export const useQueryArticles = () =>
  useQuery<Article[]>(["articles"], async () => {
    const response = await axios.get("/assets/contents/articles.json");
    return response.data;
  });

export const useQueryEvents = () =>
  useQuery<Event[]>(["events"], async () => {
    const response = await axios.get("/assets/contents/events.json");
    return response.data;
  });

export const useQueryFAQ = () =>
  useQuery<FAQ[]>(["faq"], async () => {
    const response = await axios.get("/assets/contents/faq.json");
    return response.data;
  });

export const useQueryNews = () =>
  useQuery<News[]>(["news"], async () => {
    const response = await axios.get("/assets/contents/news.json");
    return response.data;
  });

export const useQuerySitePolicy = () =>
  useQuery<Policy[]>(["site_policy"], async () => {
    const response = await axios.get("/assets/contents/site_policy.json");
    return response.data;
  });

export const useQueryPrivacyPolicy = () =>
  useQuery<Policy[]>(["privacy_policy"], async () => {
    const response = await axios.get("/assets/contents/privacy_policy.json");
    return response.data;
  });
