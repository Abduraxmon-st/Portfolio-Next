"use client"
import { Button } from "@/components/ui/button"
import { sidebarLinks } from "@/data/admin/sidebar-data"
import { ChevronRight, Home, Sidebar } from "lucide-react"
import { useState } from "react"
import { SidebarLink } from "../link"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useWindowDimensions from "@/hooks/useWindowDimensions"

export const DashboardSidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  const { width } = useWindowDimensions()
  const tablet = width ? width <= 768 : false
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  const sidebarToggle = (openSidebar: boolean): number => {
    if (tablet) {
      return 50
    } else return openSidebar ? 50 : 200
  }
  return (
    <aside
      style={{
        width: sidebarToggle(openSidebar),
      }}
      className={`flex flex-col pt-2.5 lg:pt-4 transition-all duration-300 overflow-hidden border border-borderColor/50 ${className}`}>
      <div
        style={{
          paddingInline: tablet ? 13 : openSidebar ? 13 : 16
        }}
        className="flex items-center justify-between transition-all duration-300">
        <span
          style={{
            width: tablet ? 0 : !openSidebar ? 100 : 0
          }}
          className="text-2xl overflow-hidden transition-all duration-300">Admin</span>
        <Button
          variant={"ghost"}
          className="hover:bg-transparent! hover:text-descColor! bg-transparent! hover:opacity-80 p-0! h-6! relative"
          onClick={() => setOpenSidebar(!openSidebar)}>
          <Sidebar />
          <ChevronRight size={12} className={`absolute left-2.25 stroke-4 ${tablet ? "rotate-0" : openSidebar ? "rotate-0" : "rotate-180"}`} />
        </Button>
      </div>

      <div className="w-full h-px bg-thirtyColor/30 mb-5 mt-2.5 lg:mt-4.75" />

      <div style={{
        paddingInline: tablet ? 5 : openSidebar ? 5 : 16
      }}
        className="flex flex-col gap-2 transition-all duration-300 flex-1">
        {sidebarLinks.map((link) => {
          const active = `/dashboard${link.path}` === pathname
          return (
            <SidebarLink key={link.path} link={link} open={openSidebar} active={active} />
          )
        })}
        <Link
          style={{
            marginBottom: tablet ? 4 : openSidebar ? 4 : 16
          }}
          href="/home"
          className="mt-auto flex items-center gap-2 hover:bg-thirtyColor/12 p-2 rounded-lg text-descColor overflow-hidden transition-all">
          <div className="size-6">
            <Home />
          </div>
          Home
        </Link>
      </div>
    </aside>
  )
}
