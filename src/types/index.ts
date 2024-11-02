export type Article = {
  id: number;
  date: string;
  src: string;
  location: string;
  author: string;
  description: string;
};

export type Event = {
  title: string;
  description: string;
  dates: string[];
};
