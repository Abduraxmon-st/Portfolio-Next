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

export type Experience = {
  date: string;
  type: "Remote" | "On-site" | "Full-time" | "Part-time" | "Hybrid";
  title: string;
  corpName: string;
  desc: string;
  keys: string[];
  technologies: string[];
};