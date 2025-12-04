"use client";

import { ProgressBar } from "../progress-bar";
import { Logo } from "../logotip";
import NavbarLink from "../link/NavbarLink";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { createSwapy } from 'swapy'

export const StickyNavbar = ({
  visible,
  isHome,
  setHovered,
}: {
  visible: boolean;
  isHome: boolean;
  setHovered: (value: boolean) => void;
}) => {
  const swapy = useRef<any>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container) {
      // @ts-ignore

      const swapy = createSwapy(container.current, {
        animation: 'spring'
      })

      swapy?.onSwapStart(() => {
        document.body.style.overflow = "unset";
      })
      swapy?.onSwapEnd(() => {
        document.body.style.overflow = "unset";
      })
    }
    return () => {
      // @ts-ignore
      swapy.current?.destroy?.();
      // Scrollni tiklash
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div ref={container} className="fixed max-w-[450px] w-full sm:w-[92%] xl:w-full top-0 left-0 sm:left-1/2 sm:-translate-x-1/2 z-10 px-4 sm:px-0" >
      <div data-swapy-slot="navbar" className="mx-auto w-full mt-4 sm:mt-5">
        <div
          ref={swapy}
          data-swapy-item="navbar"
          className={`overflow-hidden w-full flex items-center justify-between py-3 xl:py-4 px-5 xl:px-6 border border-borderColor rounded-[14px] xl:rounded-2xl bg-black/60 navbar-shadow select-none backdrop-blur-[2px]  `}
        >
          {isHome ? (
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
          )}

          <div className="flex items-center justify-center gap-4 xl:gap-5">
            <NavbarLink href="/home">Home</NavbarLink>
            <NavbarLink href="/portfolio">Portfolio</NavbarLink>
          </div>

          <ProgressBar />
        </div>
      </div>
    </div>
  );
};
