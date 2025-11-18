"use client"
import { useCursor } from "@/src/context/CursorContext";
import { PrimaryBadge } from "../badge"
import Image from "next/image";
import { logoBg } from "@/src/assets/images";
import { ContactButton } from "../button/ContactButton";

export const HeroSection = () => {
  const { setHovered } = useCursor();
  return (
    <div className="flex mt-20 items-center justify-between xl:pr-10">
      <div className="max-w-[45%]">
        <PrimaryBadge
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          Frontend Developer
        </PrimaryBadge>
        <div className="mt-5">
          <h2 className="text-[54px] font-light tracking-wider leading-[120%] flex">Tojixo<div className="text-[40px] tracking-normal">'</div>jayev</h2>
          <h1 className="text-[54px] font-light tracking-wider leading-[100%] text-cyan-400">Abduraxmon</h1>
        </div>
        <div className="w-[50%] h-1 my-5 bg-linear-to-r from-cyan-400 to-transparent"></div>
        <p className="text-[17px] tracking-wide text-white/70">Building reliable and intuitive digital experiences using <br /> <span className="text-thirtyColor">React</span> and <span className="text-thirtyColor">Next.js</span>. Passionate about writing clean code and improving frontend architecture.</p>
        <a
          className="w-fit flex mt-5"
          href="#contact-me"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact-me")?.scrollIntoView({
              behavior: "smooth"
            });
          }}>
          <ContactButton />
        </a>
      </div>
      <div className="overflow-hidden w-100 h-120 border-2 border-borderColor rounded-[80px] rounded-tl-[160px] rounded-br-[160px]">
        <Image src={logoBg} alt="logo" width={100} height={100} loading="lazy" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}
