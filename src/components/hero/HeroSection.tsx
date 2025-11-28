"use client"
import { useCursor } from "@/src/context/CursorContext";
import { PrimaryBadge } from "../badge"
import Image from "next/image";
import { logoBg } from "@/src/assets/images";
import { ContactButton } from "../button/ContactButton";

export const HeroSection = () => {
  const { setHovered } = useCursor();
  return (
    <div className="flex mt-10 xl:mt-20 items-center justify-between xl:pr-10">
      <div className=" max-w-[53%] xl:max-w-[45%]">
        <PrimaryBadge
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          Frontend Developer
        </PrimaryBadge>
        <div className="mt-2.5 xl:mt-5">
          <h2 className="main-title flex">Tojixo<div className="text-[35px] xl:text-[50px] tracking-normal">'</div>jayev</h2>
          <h1 className="main-title font-light tracking-wider leading-[100%] text-cyan-400">Abduraxmon</h1>
        </div>
        <div className="w-[50%] h-0.5 xl:h-1 my-3 xl:my-5 bg-linear-to-r from-cyan-400 to-transparent"></div>
        <p className="xl:text-[17px] tracking-wide text-white/70">Building reliable and intuitive digital experiences using <br /> <span className="text-thirtyColor">React</span> and <span className="text-thirtyColor">Next.js</span>. Passionate about writing clean code and improving frontend architecture.</p>
        <div className="text-[17px] tracking-wide text-white/70">
          You can also check my {" "}
          <a
            style={{ cursor: "none" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href="https://github.com/Abduraxmon-st"
            className="text-thirtyColor relative group">GitHub <div className=" absolute w-[0%] group-hover:w-[90%] h-px left-1/2 -translate-x-[55%] -bottom-px bg-thirtyColor transition-all" /></a> account.
        </div>
        <a
          className="w-fit flex mt-7.5 xl:mt-5"
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
      <div className="overflow-hidden w-full max-w-80 xl:max-w-100 h-100 xl:h-120 border-2 border-borderColor rounded-[50px] rounded-tl-[100px] rounded-br-[100px] xl:rounded-[80px] xl:rounded-tl-[160px] xl:rounded-br-[160px]">
        <Image src={logoBg} alt="logo" width={100} height={100} loading="lazy" className="w-full h-full object-cover hover:scale-106 transition-transform duration-500" />
      </div>
    </div>
  )
}
