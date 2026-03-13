"use client"
import { ProjectModal } from "@/components/admin/modal"
import { SearchInput } from "@/components/admin/search"
import { ProjectCardsSection } from "@/components/admin/section/ProjectCardsSection"
import { TypeSelect } from "@/components/admin/select"
import { ProjectsTable } from "@/components/admin/table"
import { ListCardTabs } from "@/components/admin/tabs"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"

const ProjectsPage = () => {
  const [search, setSearch] = useState<string>("")
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string>("")
  // debounce 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase());

    const matchesType =
      type.length > 0 ?
        type === "all" ?
          true
          : project.type === type
        : true

    return matchesSearch && matchesType;
  });

  return (
    <div className="relative">
      <div className="sm:absolute mb-4 sm:mb-0 right-0 top-0 flex items-center gap-2">
        <SearchInput search={search} setSearch={setSearch} />
        <TypeSelect type={type} setTipe={setType} />
        <Button onClick={() => setOpen(true)} className="border border-descColor/20 bg-mainColor/20 text-descColor">
          <Plus size={15}/>
          Add
        </Button>
      </div>
      <ListCardTabs
        list={<ProjectsTable projects={filteredProjects} />}
        card={<ProjectCardsSection projects={filteredProjects} />}
      />
      <ProjectModal
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default ProjectsPage