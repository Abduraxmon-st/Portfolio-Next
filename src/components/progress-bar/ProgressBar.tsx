"use client"
import { useEffect } from "react";

export const ProgressBar = () => {
  useEffect(() => {
    const progressBarfunction = () => {
      const scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scroll / height) * 100;

      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    progressBarfunction()
    window.addEventListener("scroll", progressBarfunction);
    return () => window.removeEventListener("scroll", progressBarfunction);
  }, []);
  return (
    <div style={{
    boxShadow: "5px 0px 20px 3px rgba(203,172,249,0.6)", // 💜 pastel glow
  }} id="progressBar" className="w-[0%] h-0.5 absolute bottom-0 left-0 bg-cyan-400 bg-[linear-gradient(90deg,rgba(34,211,238,1)_0%,rgba(20,102,217,1)_50%,rgba(146,79,240,1)_85%)] z-50 rounded-full"></div>
  )
}
