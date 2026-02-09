"use client"
import { useEffect, useState } from "react";
import { StickyNavbar } from "./StickyNavbar";
import { Logo } from "../logotip";
import { useCursor } from "@/context/CursorContext";
import Link from "next/link";
import NavbarLink from "../link/NavbarLink";
import { usePathname } from "next/navigation";
import PageLoadAnimation from "../onload-animation/onLoadAnimation";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/home";
  const { setHovered } = useCursor()
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    toggleVisibility()
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <StickyNavbar visible={visible} isHome={isHome} setHovered={setHovered} />
      <PageLoadAnimation duration={1} translateY={-100}>
        <nav className={`relative w-full xl:max-w-[450px] xl:mx-auto flex items-center justify-between py-4 pl-5 pr-6 x:pr-8 rounded-[13px] border border-[#0e122b] bg-[#04081E] bg-[linear-gradient(270deg,rgba(4,8,30,1)_0%,rgba(12,14,35,1)_100%)]`}>
          {
            isHome ? (
              <Logo />
            ) : (
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Link style={{ cursor: "none" }} href="/home">
                  <Logo />
                </Link>
              </div>
            )
          }
          <div className="flex items-center justify-center gap-5">
            <NavbarLink href="/home" children={"Home"} />
            <NavbarLink href="/portfolio" children={"Portfolio"} />
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative group">
              <Link
                style={{ cursor: "none" }}
                href="#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact-me")?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                <span className="group-hover:text-thirtyColor transition-[color] duration-200">Contact</span>
                <div className="absolute bottom-0.5 xl:-bottom-0.5 left-1/2 w-0 h-px xl:h-0.5 bg-thirtyColor/50 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-2xl text-[15px] xl:text-base"></div>
              </Link>
            </div>
          </div>
        </nav>
      </PageLoadAnimation>

    </>
  )
}
