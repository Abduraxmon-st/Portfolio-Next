"use client"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Project } from "@/types"
import { Edit, Ellipsis, Trash } from "lucide-react"
import Image from "next/image"
import { AdminConfirmModal, ProjectModal } from "../modal"
import { useState } from "react"
const theader = ["№", "title", "info", "link", "technologies", "images", "type"]
export const ProjectsTable = ({ projects }: { projects: Project[] }) => {
  const [openDel, setOpenDel] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [project, setProject] = useState<Project | null>(null)
  const handleDeleteProduct = () => {
    console.log("Deleted product:", project?.title);
  }
  return (
    <div className="border border-descColor/20! rounded-md overflow-hidden grid">
      <Table className="min-w-235.5">
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
          {projects.length === 0 ?
            <TableRow>
              <TableCell className="text-center font-medium text-base py-4" colSpan={theader.length + 1}>
                Project not found
              </TableCell>
            </TableRow>
            : projects.map((project, i) => (
              <TableRow key={project.link + i}>
                <TableCell className="w-7.5">{i + 1}</TableCell>
                <TableCell title={project.title} className="max-w-17.5">
                  <span className="block truncate">
                    {project.title}
                  </span>
                </TableCell>
                <TableCell title={project.desc} className="max-w-37.5">
                  <span className="block truncate">
                    {project.desc}
                  </span>
                </TableCell>
                <TableCell title={project.link} className="max-w-25">
                  {
                    project.type !== "private" ?
                      <a href={project.link} target="_blank" className="block truncate text-blue-500/50">
                        {project.link}
                      </a> :
                      <span className="block truncate text-yellow-400/50">
                        private
                      </span>
                  }
                </TableCell>
                <TableCell
                  title={`${project.technologies.map((t) => `${t.title}, `)}`}
                  className="max-w-37.5">
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
                <TableCell className="min-w-18.5 w-18.5">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => {
                        setOpenEdit(true)
                        setProject(project)
                      }}
                      className="p-1 cursor-pointer">
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setOpenDel(true)
                        setProject(project)
                      }}
                      className="p-1 cursor-pointer">
                      <Trash size={16} className="text-red-700/80" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <AdminConfirmModal
        open={openDel}
        setOpen={setOpenDel}
        handleConfirm={handleDeleteProduct}
        title="Delete project?"
        button="Delete"
      />
      <ProjectModal
        open={openEdit}
        setOpen={setOpenEdit}
        project={project}
      />
    </div>
  )
}
