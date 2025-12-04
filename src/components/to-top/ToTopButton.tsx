"use client"

import { useCursor } from "@/src/context/CursorContext";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { setHovered } = useCursor();
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    toggleVisibility()
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <button
      style={{ cursor: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToTop}
      className={`fixed ${visible ? "xs1:bottom-0 sm:bottom-3 nc1:bottom-6 to-top" : "-bottom-12 to-top-bottom1"} right-3 nc1:right-6 z-9 bg-mainEasierColor text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-borderColor hover:scale-105 hover:bg-mainEasierColor/50 active:scale-95`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
