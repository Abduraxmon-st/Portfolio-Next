"use client"
import { Project } from "@/types"
import { ProjectCard } from "../card"
import { AdminConfirmModal, ProjectModal } from "../modal"
import { useState } from "react"

export const ProjectCardsSection = ({ projects }: { projects: Project[] }) => {
  const [openDel, setOpenDel] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [project, setProject] = useState<Project | null>(null)
  const handleDeleteProduct = () => {
    console.log("Deleted product:", project?.title);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
      {
        projects.length === 0 ?
          <p className="text-center col-span-3 font-medium">Project not found</p>
          : projects.map((project, i) => (
            <ProjectCard
              key={project.link + i}
              item={project} i={i}
              setOpenDel={setOpenDel}
              setOpenEdit={setOpenEdit}
              setProject={setProject}
            />
          ))}
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
