import { Database } from "./schema";

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
};

export type FAQ = {
  question: string;
  answer: string;
  info: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
