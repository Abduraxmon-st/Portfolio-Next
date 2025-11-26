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
    <div className="mt-45">
      <h2 className="main-title">Skills & Technologies</h2>
      <div className="grid grid-cols-2 mt-10">
        <div className="border-r border-thirtyColor/50 pr-20">
          <h3 className="flex items-center gap-2.5 mb-5 text-2xl font-light">
            <Paintbrush size={24} className="text-thirtyColor" />
            Frontend
          </h3>
          <div className="flex flex-wrap gap-x-2.5 gap-y-2">
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
        <div className="border-l border-thirtyColor/50 pl-25">
          <h3 className="flex items-center gap-2.5 mb-5 text-2xl font-light">
            <Wrench size={24} className="text-thirtyColor" />
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-x-2.5 gap-y-2">
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
