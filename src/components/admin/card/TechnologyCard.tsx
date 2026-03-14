import { Technology } from "@/types"

export const TechnologyCard = ({ tech }: { tech: Technology }) => {
  return (
    <div className="w-full">
      <img src={`/${tech.path}.svg`} alt={"icon"} className="rounded-[3px] w-full cursor-pointer" />
      <div className="w-full h-px bg-descColor/30 mb-1 mt-2" />
      <p className="text-center">{tech.title}</p>
    </div>
  )
}
