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
  const swapyy = useRef(null)
  const container = useRef(null)

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      // @ts-ignore

      swapyy.current = createSwapy(container.current)

      // Your event listeners
      // @ts-ignore

      swapyy?.current?.onSwap((event) => {
        console.log('swap', event);
      })
    }

    return () => {
      // @ts-ignore

      // Destroy the swapy instance on component destroy
      swapy?.current?.destroy()
    }
  }, [])

  return (
    <div ref={container} className="fixed max-w-[450px] w-[92%] xl:w-full top-0 left-1/2 -translate-x-1/2 z-10" >
      <div data-swapy-slot="navbar" className="mx-auto max-w-[450px] w-[92%] xl:w-full mt-4 sm:mt-5">
        <div
          ref={swapyy}
          data-swapy-item="navbar"
          className={`overflow-hidden max-w-[450px] w-[92%] xl:w-full flex items-center justify-between py-3 xl:py-4 px-5 xl:px-6 border border-borderColor rounded-[14px] xl:rounded-2xl bg-black/60 navbar-shadow select-none backdrop-blur-[2px] ${visible ? "mt-0 " : "-mt-30 "} `}
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
