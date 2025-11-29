"use client"
import { ContactButton } from "../button/ContactButton"
import { Badge } from "../ui/badge"
import { ProjectSwiper } from "../swiper"
import { projects } from "@/src/data/projects"
import { slugify } from "@/src/hooks/useSlugify"
export const ProjectsSection = ({ page, button }: { page: boolean, button: boolean }) => {

  const isFilteredData = page ? projects
    : projects.filter((item) => {
      if (projects.length > 3) {
        return item.isHome === true ? item.isHome : null
      } else return projects
    })
  return (
    <div className={`${page ? "mt-10" : "mt-30 xl:mt-45"}`}>
      <h2 className={`text-[34px] nc1:text-[40px] xl:text-[54px] main-title  ${page ? "hidden" : ""}`}>Featured Projects</h2>
      <div className="mt-10 flex flex-col gap-20 nc1:gap-0">
        {isFilteredData?.map((item, i) => (
          <div key={i}>
            <div className="grid grid-cols-1 nc1:grid-cols-2 gap-7 xl:gap-25 relative">
              <div className="hidden xl:absolute left-1/2 h-68 xl:h-90 w-px bg-mainColor bg-[linear-gradient(0deg,rgba(0,0,0,1)_-50%,rgba(190,193,221,0.1)_50%,rgba(0,0,0,1)_150%)]" />
              <div className={`${i % 2 === 0 ? "nc1:col-start-2 nc1:row-start-1" : "nc1:col-start-1"} bg-gray-800 nc1:h-68 xl:h-90 rounded-2xl xl:rounded-[20px] overflow-hidden`}>
                <ProjectSwiper data={item.images} />
              </div>
              <div className={`${i % 2 === 0 ? "nc1:col-start-1" : "nc1:col-start-2 nc1:row-start-1"} flex flex-col space-y-4 xl:space-y-6 xl:p-5 pl-0! pb-0!`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-light text-white/90 mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <div className="w-full border border-borderColor mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base xl:text-lg text-white/60 leading-relaxed line-clamp-4 xl:line-clamp-5">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 xl:gap-3 mb-4!">
                  {item.technologies.map((item, i) => (
                    <Badge key={i}>{item}</Badge>
                  ))}
                </div>
                <a
                  style={{ cursor: "none" }}
                  href={`/portfolio/${slugify(item.title)}`}
                  className="w-max mt-auto">
                  <ContactButton>
                    View More
                  </ContactButton>
                </a>
              </div>
            </div>
            <div className={`${isFilteredData.length - 1 === i && "hidden"} hidden nc1:flex items-center justify-center py-7 xl:py-5 relative`}>
              <div className="relative opacity-16 [&_svg]:size-3 xl:[&_svg]:size-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45zM12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      {(button && (projects.length > 3)) && (
        <div className="flex items-center justify-center mt-10 pt-10 border-t border-borderColor">
          <a
            style={{ cursor: "none" }}
            href="/portfolio"
            className="w-max">
            <ContactButton className="py-6! xl:py-7! rounded-full!">
              View All Projects
            </ContactButton>
          </a>
        </div>
      )}
    </div>
  )
}
