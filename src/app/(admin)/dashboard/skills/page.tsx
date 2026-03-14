"use client"
import { TechnologyCard } from "@/components/admin/card"
import { SkillsModal } from "@/components/admin/modal"
import { SearchInput } from "@/components/admin/search"
import { Button } from "@/components/ui/button"
import { technology } from "@/data/skills"
import { Technology } from "@/types"
import { Plus } from "lucide-react"
import { useEffect, useState } from "react"

const SkillsPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [tech, setTech] = useState<Technology | null>(null)
  const [search, setSearch] = useState<string>("")
  const [debouncedSearch, setDebouncedSearch] = useState("");
  // debounce 300ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);


  const filteredTech = technology.filter((tech) => {
    const matchesSearch =
      tech.title.toLowerCase().includes(debouncedSearch.toLowerCase());

    return matchesSearch;
  });
  return (
    <div>
      <div className="flex gap-2 sm:justify-end">
        <SearchInput search={search} setSearch={setSearch} />
        <Button onClick={() => setOpen(true)} className="border border-descColor/20 bg-mainColor/20 text-descColor">
          <Plus size={15} />
          Add
        </Button>
      </div>
      <div className="mt-4 sm:mt-0">
        <p className="text-lg mb-2">Technologies</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 gap-4 bg-mainColor/40 p-3 rounded-md">
          {
            filteredTech.length === 0 ?
              <div className="text-center text-lg my-5 col-span-10">Technology not found</div>
              : filteredTech.map((tech) => (
                <div
                  key={tech.title}
                  onClick={() => {
                    setTech(tech)
                    setOpen(true)
                  }}
                >
                  <TechnologyCard tech={tech} />
                </div>
              ))
          }
        </div>
      </div>
      <SkillsModal
        open={open}
        setOpen={setOpen}
        technology={tech}
        setTech={setTech} />
    </div>
  )
}

export default SkillsPage