import type { Database } from "./schema";

export type UseMutationResult<T1, T2> = {
  onSuccess?: (response: T1) => void;
  onError?: (error: T2) => void;
};

export type Contact = Database["public"]["Tables"]["contact"];

export type Article = {
  id: number;
  title: string;
  description: string;
  date: string;
  images: string[];
  avatar: string;
  location: string;
  author: string;
  links: {
    word: string;
    url: string;
  }[];
};

export type Event = {
  title: string;
  description: string;
  dates: string[];
};

export type News = {
  title: string;
  date: string;
  category: "news" | "release" | "system";
  links: {
    word: string;
    url: string;
  }[];
};

export type FAQ = {
  question: string;
  answer: string;
  info: string;
};

export type Policy = {
  title: string;
  description: string;
};

export type Sponsor = {
  name: string;
  url: string | null;
};
