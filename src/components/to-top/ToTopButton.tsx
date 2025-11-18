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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToTop}
      className={`fixed ${visible ? "bottom-6 to-top" : "-bottom-12 to-top-bottom1"} right-6 z-50 bg-thirtyColor/5 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-borderColor hover:scale-105 hover:bg-thirtyColor/10 active:scale-95`}
      aria-label="Scroll to top"
      style={{cursor: "none"}}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
