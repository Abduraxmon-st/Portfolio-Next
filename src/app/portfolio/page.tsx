import { Container } from "@/src/components/container"
import { ProjectsSection } from "@/src/components/main/ProjectsSection"

const ProjectsPage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-5 xl:gap-7.5 text-center pb-15 xl:pb-30 mt-5">
        <h2 className="main-title mc:text-[50px] xl:text-[60px]">My <span className="text-cyan-400">Portfolio</span></h2>
        <div className="w-full h-px bg-mainColor bg-[linear-gradient(270deg,rgba(0,0,0,1)_-50%,rgba(190,193,221,0.1)_50%,rgba(0,0,0,1)_150%)]" />
        <p className="text-sm tracking-wider xl:leading-7">A collection of projects highlighting my growing expertise in modern frontend
          <br /> development using {" "}
          <span className="text-thirtyColor">React,</span> <span className="text-thirtyColor">Next.js</span> and other <span className="text-thirtyColor">Tools.</span>
        </p>
      </div>
      <ProjectsSection button={false} page />
    </Container>
  )
}

export default ProjectsPage