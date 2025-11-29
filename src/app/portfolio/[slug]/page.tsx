import { Container } from "@/src/components/container";
import { projects } from "@/src/data/projects";
import { slugify } from "@/src/hooks/useSlugify";

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug ? slug : ""
  const project = projects.find((item) => slugify(item.title) === title)
  return (
    <Container className="mt-10">
      <h2 className="main-title text-center">{project?.title}</h2>
      <div className="grid nc1:grid-cols-2 gap-10 xl:gap-20 mt-25">
        <p className="row-2 nc1:row-auto">
          {project?.desc}
        </p>
        <div className="xl:aspect-video rounded-2xl overflow-hidden">
          <img src={project?.images[0]} alt="project image" className="object-cover w-full h-full nc1:h-60 xl:h-full" />
        </div>
      </div>

      <p className="main-title mt-25">Technologies used</p>
      <div className="flex items-center gap-7.5 flex-wrap mt-10">
        {project?.technologies.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>

      <p className="main-title mt-25">More Images</p>
      <div className="grid nc1:grid-cols-2 gap-x-7.5 gap-y-5 xl:gap-y-10 mt-10">
        {project?.images.map((item, i) => (
          <div key={i} className="aspect-video rounded-2xl overflow-hidden">
            <img src={item} alt="project image" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </Container>
  )
}