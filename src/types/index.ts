export type Technology = {
  title: string;
  path: string;
};

export type Project = {
  isHome: boolean;
  title: string;
  type: "down" | "working" | "private";
  link: string;
  desc: string;
  technologies: Technology[];
  images: string[];
};