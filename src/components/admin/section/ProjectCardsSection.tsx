import { projects } from "@/data/projects"
import { ProjectCard } from "../card"

export const ProjectCardsSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
      {projects.map((project, i) => (
        <ProjectCard key={project.link + i} item={project} i={i} />
      ))}
    </div>
  )
}
