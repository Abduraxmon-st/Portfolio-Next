"use client"
import { ContactButton } from "../button/ContactButton"
import { Badge } from "../ui/badge"

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Save Meal",
      desc: "lork;rnpuwbgoiwrb goab gqerh goeubthgw0ietubh wokrfbg oetjb worhti",
      technologies: [
        "Next js",
        "TypeSrcipt",
        "Shadcn"
      ]
    },
    {
      title: "Save Meal",
      desc: "lork;rnpuwbgoiwrb goab gqerh goeubthgw0ietubh wokrfbg oetjb worhti",
      technologies: [
        "Next js",
        "TypeSrcipt",
        "Shadcn"
      ]
    },
    {
      title: "Save Meal",
      desc: "lork;rnpuwbgoiwrb goab gqerh goeubthgw0ietubh wokrfbg oetjb worhti",
      technologies: [
        "Next js",
        "TypeSrcipt",
        "Shadcn"
      ]
    },
  ]
  return (
    <div className="mt-45">
      <h2 className="text-[54px] font-light tracking-wider leading-[120%]">Featured Projects</h2>
      <div className="mt-10 flex flex-col">
        {projects.map((item, i) => (
          <div key={i}>
            <div className="grid grid-cols-2 gap-25 relative">
              <div className="absolute left-1/2 h-90 w-px bg-mainColor bg-[linear-gradient(0deg,rgba(0,0,0,1)_-50%,rgba(190,193,221,0.1)_50%,rgba(0,0,0,1)_150%)]" />
              <div className={`${i % 2 === 0 ? "col-start-2 row-start-1" : "col-start-1"} bg-gray-800 h-90 rounded-[24px]`}></div>
              <div className={`${i % 2 === 0 ? "col-start-1" : "col-start-2 row-start-1"} flex flex-col space-y-4 sm:space-y-6 p-5 pl-0`}>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <div className="w-full border border-borderColor mb-3 sm:mb-4" />
                  <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-4!">
                  {item.technologies.map((item, i) => (
                    <Badge key={i}>{item}</Badge>
                  ))}
                </div>
                <a
                  style={{ cursor: "none" }}
                  href="#"
                  className="w-max mt-auto">
                  <ContactButton>
                    View more
                  </ContactButton>
                </a>
              </div>
            </div>
            <div className={`${projects.length - 1 === i && "hidden"} flex items-center justify-center py-5 relative`}>
              <div className="relative opacity-16">
                {/* <div className="absolute border w-8 rotate-90 top-[7px] -left-2 rounded" />
                <div className="absolute border w-8 rotate-0 top-[7px] -left-2 rounded" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45zM12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
