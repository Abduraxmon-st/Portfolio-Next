"use client"
import { ContactButton } from "@/components/button/ContactButton"
import { Container } from "@/components/container"
import LoadingOpacity from "@/components/loading/LoadingOpacity"
import Circles from "@/components/loading/PageLoading"
import { ProjectsSection } from "@/components/main/ProjectsSection"
import { useEffect, useState } from "react"

const ProjectsPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // agar sahifa allaqachon yuklangan bo‘lsa
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }

    // aks holda load eventini kutadi
    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loaded) {
    return <Circles />;
  }
  return (
    <Container>
      <LoadingOpacity loaded={loaded} />
      <div className="flex flex-col gap-5 xl:gap-7.5 text-center nc1:pb-15 xl:pb-30 mt-5">
        <h2 className="main-title mc:text-[50px] xl:text-[60px]">My <span className="text-cyan-400">Portfolio</span></h2>
        <div className="w-full h-px bg-mainColor bg-[linear-gradient(270deg,rgba(0,0,0,1)_-50%,rgba(190,193,221,0.1)_50%,rgba(0,0,0,1)_150%)]" />
        <p className="text-sm tracking-wider xl:leading-7">A collection of projects highlighting my growing expertise in modern frontend
          <br /> development using {" "}
          <span className="text-thirtyColor">React,</span> <span className="text-thirtyColor">Next.js</span> and other <span className="text-thirtyColor">Tools.</span>
        </p>
      </div>
      <ProjectsSection button={false} page />
      <div className="flex items-center justify-center mt-10 pt-10 border-t border-borderColor">
        <a
          style={{ cursor: "none" }}
          href="/home"
          className="w-max">
          <ContactButton className="py-6! xl:py-7! rounded-full!">
            Back to Home
          </ContactButton>
        </a>
      </div>
    </Container>
  )
}

export default ProjectsPage