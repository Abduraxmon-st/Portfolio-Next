import { TechnologyCard } from "@/src/components/card/TechnologyCard";
import { Container } from "@/src/components/container";
import { projects } from "@/src/data/projects";
import { slugify } from "@/src/hooks/useSlugify";
import { ExternalLink, Mail } from "lucide-react";
import Image from "next/image";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug ? slug : ""
  const project = projects.find((item) => slugify(item.title) === title)
  return (
    <Container className="mt-10">
      <h2 className="main-title text-center">{project?.title}</h2>
      <div className="mt-10 mb-5 text-xs text-descColor/30 flex items-center justify-end gap-1">
        <a style={{ cursor: "none" }} href="/portfolio" className="hover:underline underline-offset-3">
          Portfolio
        </a>
        /
        <span className="underline underline-offset-3">
          {project?.title}
        </span>
      </div>

      <div className="grid nc1:grid-cols-2 gap-5 nc1:gap-10 xl:gap-20">
        <p className="row-2 nc1:row-auto">
          {project?.desc}
          <a style={{ cursor: "none" }} href="https://google.com" target="_blank" className="flex gap-1 mt-2.5 items-center text-thirtyColor font-medium hover:underline underline-offset-3">
            Go visit {project?.title} <ExternalLink size={16} />
          </a>
        </p>
        <div className="aspect-video rounded-2xl overflow-hidden">
          <Image width={100} height={100} src={project?.images[0] ?? ""} alt="project image" className="object-cover w-full h-full nc1:h-60 xl:h-full" />
        </div>
      </div>

      <p className="main-title mt-15 nc1:mt-25">Technologies used</p>
      <div className="flex items-center gap-5 flex-wrap mt-10">
        {project?.technologies.map((item, i) => (
          <div key={i}>
            <TechnologyCard
              item={item.title}
              path={item.path.toLowerCase()}
            />
          </div>
        ))}
      </div>

      <p className="main-title mt-15 nc1:mt-25">More Images</p>
      <div className="grid nc1:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-7.5 mt-10">
        {project?.images.map((item, i) => (
          <div key={i} className="aspect-video rounded-2xl overflow-hidden">
            <img src={item} alt="project image" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </Container>
  )
}