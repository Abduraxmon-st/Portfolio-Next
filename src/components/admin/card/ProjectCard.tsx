import { ProjectSwiper } from "@/components/admin/swiper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

export const ProjectCard = ({ item, i }: { item: Project, i: number }) => {
  return (
    <div key={i} className="flex flex-col relative z-3 border border-descColor/15 rounded-2xl">
      <div className={`bg-gray-800 aspect-video rounded-t-2xl overflow-hidden`}>
        <ProjectSwiper data={item.images} />
      </div>
      <div className={`flex flex-col flex-1 p-2`}>
        <div>
          <h3 title={item.title} className="flex items-center justify-between text-xl font-light text-white/90 group-hover:text-cyan-400 transition-colors">
            <span className="flex-1 truncate">{item.title}</span>
            <Badge
              variant={"secondary"}
              className={`bg-transparent text-descColor text-xs! 
                  ${item.type === "working" ? "bg-green-400/20 border-green-400 text-green-500"
                  : item.type === "down" ? "bg-red-400/20 border-red-400 text-red-600"
                    : "bg-yellow-400/20 border-yellow-400 text-yellow-600"}
                  `}>
              {item.type}
            </Badge>
          </h3>
          <p title={item.desc} className="text-xs text-white/60 leading-relaxed line-clamp-3 mt-2">{item.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {item.technologies.map((item, i) => (
            <Badge key={i} title={item.title} className="text-xs! px-2! xl:px-2!">{item.title}</Badge>
          ))}
        </div>
        <div className="mt-auto">
          <div className="border-t my-2 border-descColor/20" />
          <div className="grid grid-cols-3 gap-2">
            <Button className="border border-descColor/20 bg-descColor/5 text-descColor">
              Edit
            </Button>
            <Button className="border border-red-600/50 text-red-600/70 bg-red-600/10">
              Delete
            </Button>
            {(item.type === "down" || item.type === "private") ? (
              <Button
                disabled
                className="border border-cyan-600/50 text-cyan-600 bg-cyan-600/10 w-full">
                View
              </Button>
            ) : (
              <a href={item.link} target="_blank" className="w-full">
                <Button
                  className="border border-cyan-600/50 text-cyan-600 bg-cyan-600/10 w-full">
                  View
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
