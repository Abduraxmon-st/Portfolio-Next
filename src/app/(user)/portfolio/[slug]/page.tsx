"use client";
import { TechnologyCard } from "@/components/card/TechnologyCard";
import { Container } from "@/components/container";
import { projects } from "@/data/projects";
import { slugify } from "@/hooks/useSlugify";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Circles from "@/components/loading/PageLoading";
import LoadingOpacity from "@/components/loading/LoadingOpacity";
import Viewer from "viewerjs";

export default function PortfolioDetailPage() {
  const params = useParams();
  const { slug } = params;
  const [loaded, setLoaded] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }
    const handleLoad = () => setLoaded(true);
    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const title = slug ? slug : ""
  const project = projects.find((item) => slugify(item.title) === title)

  useEffect(() => {
    console.log("galleryRef:", galleryRef.current);
    console.log(
      "images in DOM:",
      galleryRef.current?.querySelectorAll("img")?.length
    );

    if (!galleryRef.current) return;
    if (!project?.images?.length) return;

    const viewer = new Viewer(galleryRef.current, {
      toolbar: true,
      navbar: false,
      title: false,
      movable: false,
      zoomable: true,
    });

    return () => {
      viewer.destroy()
    };
  }, [project?.images, slug, galleryRef, loaded]);

  if (!loaded) {
    return <Circles />;
  }
  return (
    <Container className="mt-10">
      <LoadingOpacity loaded={loaded} />
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
        <div className="row-2 nc1:row-auto mt-4">
          <p className="text-lg opacity-70">{project?.desc}</p>

          {
            project?.privated ? (
              <p className="text-sm text-red-600 font-bold mt-5 opacity-90">This project is private and cannot be accessed.</p>
            ) : project?.isWorking ? (
              <a style={{ cursor: "none" }} href={project?.link} target="_blank" className="relative w-max flex gap-1 mt-2.5 items-center text-thirtyColor font-medium  group">
                Go visit {project?.title}
                <ExternalLink size={16} />
                <div className=" absolute w-[0%] group-hover:w-full h-px left-1/2 -translate-x-[50%] bottom-0 bg-thirtyColor transition-all" />
              </a>
            ) : (
              <p className="relative w-max mt-2.5 items-center text-red-600 font-bold opacity-90">The site is temporarily down</p>
            )
          }
        </div>
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

      {
        project?.images?.length! > 1 && (
          <>
            <p className="main-title mt-15 nc1:mt-25">More Images</p>
            <div ref={galleryRef} className="grid nc1:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-7.5 mt-10">
              {project?.images.map((item, i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <img src={item} alt="project image" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </>
        )
      }
    </Container>
  )
}