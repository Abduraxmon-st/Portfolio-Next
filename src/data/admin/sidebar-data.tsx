import { BriefcaseBusiness, Cpu, FileSliders, ScrollText } from "lucide-react";

export const sidebarLinks = [
  {
    label: "Main",
    path: "/main",
    icon: <FileSliders />
  },
  {
    label: "Projects",
    path: "/portfolio",
    icon: <ScrollText />
  },
  {
    label: "Experience",
    path: "/experience",
    icon: <BriefcaseBusiness />
  },
  {
    label: "Skills",
    path: "/skills",
    icon: <Cpu />
  }
]