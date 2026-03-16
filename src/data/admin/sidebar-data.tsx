import { BriefcaseBusiness, Cpu, ScrollText, SlidersHorizontal, Table2 } from "lucide-react";

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
  },
  {
    label: "Contact form",
    path: "/contact-form",
    icon: <Table2 />
  }
]