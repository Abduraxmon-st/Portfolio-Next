"use client"
import { TechnologyCard } from "@/components/admin/card"
import { ProjectModal, SkillsModal } from "@/components/admin/modal"
import { SearchInput } from "@/components/admin/search"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { technology, tools } from "@/data/skills"
import { Technology } from "@/types"
import { Check, Plus, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const SkillsPage = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputRefAdd = useRef<HTMLInputElement | null>(null)
  const [open, setOpen] = useState<boolean>(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)
  const [toolI, setTool] = useState<string | null>(null)
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
  // focus input tool
  useEffect(() => {
    if (openEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [openEdit]);
  // focus input tool
  useEffect(() => {
    if (openAdd && inputRefAdd.current) {
      inputRefAdd.current.focus();
    }
  }, [openAdd]);
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
      <div className="mt-4">
        <p className="text-lg mb-2">Tools</p>
        <div className="flex flex-wrap gap-4 bg-mainColor/40 p-3 rounded-md">
          {
            tools.map((tool) => (
              <div
                className="relative group"
                key={tool}
                onClick={() => {
                  setTool(tool)
                  setOpenEdit(true)
                }}
              >
                <Badge
                  className="hover:bg-cyan-700/30 cursor-pointer"
                >
                  {
                    (openEdit && (toolI === tool)) ?
                      <input
                        ref={inputRef}
                        type="text"
                        className="ring-0 outline-0 border-0 w-max max-w-30"
                        enterKeyHint="done"
                        maxLength={30}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            console.log("Edited:", toolI, "to:", e.currentTarget.value);
                            setOpenEdit(false)
                            setTool(null)
                          }
                        }}
                      />
                      : tool
                  }
                </Badge>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (!openEdit) {
                      setTool(tool)
                      console.log("Deleted tool:", tool);
                    } else {
                      setOpenEdit(false)
                      setTool(null)
                    }
                  }}
                  className="hidden group-hover:block absolute rounded-full p-px bg-red-500/20 border border-red-600 z-3 right-0 -top-0.5 cursor-pointer">
                  <X size={8} className="text-red-500" />
                </button>
              </div>
            ))
          }
          <Badge
            className="hover:bg-descColor/20 border-borderColor text-descColor bg-descColor/10 [&_svg]:size-4 cursor-pointer"
            onClick={() => {
              setOpenAdd(true)
            }}
          >
            {
              openAdd ?
                <div className="flex items-center">
                  <input
                    ref={inputRefAdd}
                    type="text"
                    className="ring-0 outline-0 border-0 w-max max-w-30"
                    enterKeyHint="done"
                    maxLength={30}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        console.log("Add:", e.currentTarget.value);
                        setOpenAdd(false)
                      }
                    }}
                  />
                  <button
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenAdd(false)
                    }}>
                    <X />
                  </button>
                </div>
                : (
                  <>
                    <Plus /> add tool
                  </>
                )
            }

          </Badge>
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