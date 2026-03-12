"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { projects } from "@/data/projects"
import { Edit, Ellipsis, Trash } from "lucide-react"
import Image from "next/image"
const theader = ["№", "title", "info", "link", "technologies", "images", "type"]
export const ProjectsTable = () => {
  return (
    <div className="border border-descColor/20! rounded-md overflow-hidden grid">
      <Table className="min-w-[942px]">
        <TableHeader>
          <TableRow>
            {
              theader.map((h) => (
                <TableHead key={h}>{h}</TableHead>
              ))
            }
            <TableHead>
              <Ellipsis size={20} className="mx-auto" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            projects.map((project, i) => (
              <TableRow key={project.link + i}>
                <TableCell className="w-[30px]">{i + 1}</TableCell>
                <TableCell title={project.title} className="max-w-[70px]">
                  <span className="block truncate">
                    {project.title}
                  </span>
                </TableCell>
                <TableCell title={project.desc} className="max-w-[150px]">
                  <span className="block truncate">
                    {project.desc}
                  </span>
                </TableCell>
                <TableCell title={project.link} className="max-w-[100px]">
                  <a href={project.link} target="_blank" className="block truncate text-blue-500/50">
                    {project.link}
                  </a>
                </TableCell>
                <TableCell
                  title={`${project.technologies.map((t) => `${t.title}, `)}`}
                  className="max-w-[150px]">
                  <span className="block truncate">
                    {project.technologies.map((t) => `${t.title}, `)}
                  </span>
                </TableCell>
                <TableCell className="min-w-22 w-22 max-w-22">
                  <div className="relative aspect-video h-10 rounded overflow-hidden">
                    <Image loading="lazy" fill src={project.images[0]} alt={`${project.title} picture`} className="object-cover" />
                  </div>
                </TableCell>
                <TableCell title={project.type} className="min-w-13 max-w-15">
                  <Badge
                    variant={"secondary"}
                    className={`bg-transparent text-descColor text-xs! 
                  ${project.type === "working" ? "bg-green-400/20 border-green-400 text-green-500"
                        : project.type === "down" ? "bg-red-400/20 border-red-400 text-red-600"
                          : "bg-yellow-400/20 border-yellow-400 text-yellow-600"}
                  `}>
                    {project.type}
                  </Badge>
                </TableCell>
                <TableCell className="min-w-[74px] w-[74px]">
                  <div className="flex justify-end gap-2">
                    <button className="p-1 cursor-pointer">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 cursor-pointer">
                      <Trash size={16} className="text-red-700/80" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
