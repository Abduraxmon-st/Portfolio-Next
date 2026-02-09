"use client"
import { useCursor } from "@/context/CursorContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isPortfolio = href === "/portfolio"
  const isSlugPortfolio = pathname.startsWith("/portfolio/");
  const { setHovered } = useCursor()

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group">
      <Link
        style={{ cursor: "none" }}
        href={href ?? "#"}
      >
        <span className={`group-hover:text-thirtyColor text-[15px]! xl:text-base! ${(isActive || (isSlugPortfolio && isPortfolio)) ? "text-thirtyColor" : ""} transition-[color] duration-200`}>
          {children}
        </span>
        <div className={`absolute h-px xl:h-0.5 transition-all duration-300 rounded-2xl ${(isActive || (isSlugPortfolio && isPortfolio)) ? "w-full! left-0! bg-thirtyColor/80 bottom-0.5 xl:-bottom-0.5" : "w-0 bottom-0.5 xl:-bottom-0.5 left-1/2 bg-thirtyColor/50 group-hover:w-full! group-hover:left-0!"}`} />
      </Link>
    </div>
  )
}

export default NavbarLink