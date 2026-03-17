import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/data/admin/sidebar-data"
import { Home, TableOfContents } from "lucide-react"
import { SidebarLink } from "../link"
import { usePathname } from "next/navigation"
import Link from "next/link"

export const DashboardSidebarMobile = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="p-2">
        <TableOfContents size={20}/>
      </SheetTrigger>
      <SheetContent className="bg-mainColor text-descColor! border-0 gap-0 w-[60%]">
        <SheetHeader className="gap-0">
          <SheetTitle className="text-2xl text-descColor">Admin</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="w-full h-px bg-thirtyColor/30 mb-5 mt-2.5 lg:mt-4.75" />

        <div
          className="flex flex-col gap-2 transition-all duration-300 flex-1 px-4 pb-4">
          {sidebarLinks.map((link) => {
            const active = `/dashboard${link.path}` === pathname
            return (
              <SidebarLink key={link.path} link={link} open={false} active={active} />
            )
          })}
          <Link
            href="/home"
            className="mt-auto flex items-center gap-2 hover:bg-thirtyColor/12 p-2 rounded-lg text-descColor overflow-hidden transition-all">
            <div className="size-6">
              <Home />
            </div>
            Home
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
