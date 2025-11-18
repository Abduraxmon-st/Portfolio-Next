"use client"
import { useEffect, useState } from "react";
import { StickyNavbar } from "./StickyNavbar";
import { ContactButton } from "../button/ContactButton";
import { Logo } from "../logotip";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);

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
      <StickyNavbar visible={visible} />
      <div className={`relative w-full max-w-[450px] mx-auto flex items-center justify-between py-4 pl-5 pr-8 rounded-[13px] border border-[#0e122b] bg-[#04081E] bg-[linear-gradient(270deg,rgba(4,8,30,1)_0%,rgba(12,14,35,1)_100%)]`}>
        <Logo />
        <div className="relative group">
          <a
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
            <div className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-thirtyColor/50 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-2xl"></div>
          </a>
        </div>
      </div>
    </>
  )
}
