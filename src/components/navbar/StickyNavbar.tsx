import { ProgressBar } from "../progress-bar"
import { Logo } from "../logotip";
import { useEffect, useState } from "react";
import { useCursor } from "@/src/context/CursorContext";

export const StickyNavbar = ({ visible }: { visible: boolean }) => {
  const [onDrag, setOnDrag] = useState(false)
  const { setHovered } = useCursor()
  useEffect(() => {
    const navbar = document.getElementById("draggable-navbar") as HTMLElement;
    if (!navbar) return;

    let startX: number, startY: number;
    let currentX = 0, currentY = 0;
    let dragging = false;

    const startDrag = (e: any) => {
      dragging = true;
      navbar.classList.add("dragging");

      const point = e.touches ? e.touches[0] : e;

      startX = point.clientX - currentX;
      startY = point.clientY - currentY;

      document.addEventListener("mousemove", onDrag);
      document.addEventListener("touchmove", onDrag);
    };

    const onDrag = (e: any) => {
      if (!dragging) return;

      const point = e.touches ? e.touches[0] : e;

      currentX = point.clientX - startX;
      currentY = point.clientY - startY;

      navbar.style.transition = "none";
      navbar.style.transform = `translate(0, 0) translate(${currentX}px, ${currentY}px)`;
      setOnDrag(true)
    };

    const stopDrag = () => {
      if (!dragging) return;
      dragging = false;

      navbar.classList.remove("dragging");

      // Smooth release
      navbar.style.transition = "transform 1s cubic-bezier(.25,.8,.25,1)";
      navbar.style.transform = "translate(0, 0) translate(0px, 0px)";

      currentX = 0;
      currentY = 0;

      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("touchmove", onDrag);
      setOnDrag(false)
    };

    navbar.addEventListener("mousedown", startDrag);
    navbar.addEventListener("touchstart", startDrag);

    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);

    return () => {
      navbar.removeEventListener("mousedown", startDrag);
      navbar.removeEventListener("touchstart", startDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchend", stopDrag);
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("touchmove", onDrag);
    };
  }, []);

  return (
    <div
      id="draggable-navbar"
      className={`fixed z-49 overflow-hidden top-5 left-1/2 max-w-[450px] -translate-x-1/2 w-full flex items-center justify-between p-4 pl-6 pr-6 border border-borderColor rounded-2xl bg-black/60 navbar-shadow transition-all ease-in-out select-none ${visible ? "translate-y-0 duration-500" : onDrag ? "" : "-translate-y-[200%] duration-200"}`}>
      <Logo />
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative group">
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
      <ProgressBar />
    </div>
  )
}
