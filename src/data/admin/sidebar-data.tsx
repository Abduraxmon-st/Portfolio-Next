import { BriefcaseBusiness, Cpu, ScrollText, SlidersHorizontal } from "lucide-react";

export const sidebarLinks = [
  {
    label: "Main",
    path: "/main",
    icon: <SlidersHorizontal />
  },
  {
    label: "Projects",
    path: "/projects",
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