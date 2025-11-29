import { ProgressBar } from "../progress-bar"
import { Logo } from "../logotip";
import { useEffect, useState } from "react";
import NavbarLink from "../link/NavbarLink";
import Link from "next/link";

export const StickyNavbar = ({ visible, isHome, setHovered }: { visible: boolean, isHome: boolean, setHovered: (value: boolean) => void }) => {
  const [onDrag, setOnDrag] = useState(false)
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
      className={`fixed z-49 overflow-hidden sm:top-5 left-1/2 max-w-[450px] -translate-x-1/2 w-[92%] xl:w-full flex items-center justify-between py-3 xl:py-4 px-5 xl:px-6 border border-borderColor rounded-[14px] xl:rounded-2xl bg-black/60 navbar-shadow transition-all ease-in-out select-none backdrop-blur-xs ${visible ? "translate-y-0 duration-500" : onDrag ? "" : "-translate-y-[200%] duration-200"}`}>
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
      <div className="flex items-center justify-center gap-4 xl:gap-5">
        <NavbarLink href="/home" children={"Home"} />
        <NavbarLink href="/portfolio" children={"Portfolio"} />
      </div>
      <ProgressBar />
    </div>
  )
}
