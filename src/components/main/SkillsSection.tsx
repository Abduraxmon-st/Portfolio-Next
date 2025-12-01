"use client"
import { useCursor } from "@/src/context/CursorContext";
import { Badge } from "../ui/badge"
import { Paintbrush, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const { setHovered } = useCursor();
  const front = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Shadcn",
    "Tailwind CSS",
    "MUI",
    "Ant Design",
    "Sass",
    "Tanstack query",
    "Zustand",
    "Framer Motion"
  ]
  const tools = [
    "Git",
    "Git Hub",
    "Git Hub Desktop",
    "Figma",
    "Vercel",
    "Netlify",
    "npm",
    "PowerShell",
    "VS Code",
  ]
  return (
    <div className="mt-30 xl:mt-45">
      <h2 className="main-title">Skills & Technologies</h2>
      <div className="grid nc1:grid-cols-2 mt-10">
        <div className="border-b nc1:border-b-0 nc1:border-r border-thirtyColor/50 pb-10 nc1:pb-0 nc1:pr-5 xl:pr-20">
          <h3 className="flex items-center gap-2.5 mb-3 nc1:mb-5 text-xl nc1:text-2xl font-light">
            <Paintbrush className="text-thirtyColor size-5 nc1:size-6" />
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2 xl:gap-x-2.5 gap-y-2">
            {
              front.map((item, i) => (
                <Badge
                  key={i}
                  className="hover:bg-cyan-700/30"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {item}
                </Badge>
              ))
            }
          </div>
        </div>
        <div className="border-t nc1:border-t-0 nc1:border-l border-thirtyColor/50 pt-9 nc1:pt-0 nc1:pl-7 xl:pl-25">
          <h3 className="flex items-center gap-2.5 mb-3 nc1:mb-5 text-xl nc1:text-2xl font-light">
            <Wrench className="text-thirtyColor size-5 nc1:size-6" />
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-2 xl:gap-x-2.5 gap-y-2">
            {
              tools.map((item, i) => (
                <Badge
                  key={i}
                  className="hover:bg-cyan-700/30"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {item}
                </Badge>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
}
