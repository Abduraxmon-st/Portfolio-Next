import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
interface SidebarProps {
  label: string,
  icon: React.ReactNode,
  path: string
}
export const SidebarLink = ({ link, open, active }: { link: SidebarProps, open: boolean, active: boolean }) => {
  return (
    <Tooltip>
      <TooltipTrigger className="relative">
        <div className={`absolute h-full w-1 -left-4 top-0 ${active ? "bg-cyan-500" : "bg-transparent"} transition-all duration-200 rounded-r-full`} />
        <Link
          href={`/dashboard/${link.path}`}
          className={`
          relative flex items-center gap-2 p-2 rounded-md overflow-hidden transition-all duration-200  
          ${active ? "text-cyan-400 hover:bg-cyan-400/12 bg-cyan-400/8" : "text-descColor hover:bg-thirtyColor/12"}
          `}
        >
          <div className="size-6 flex items-center justify-center">
            {link.icon}
          </div>
          <span className="text-nowrap">{link.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className={open ? "" : "hidden"}>
        <span>{link.label}</span>
      </TooltipContent>
    </Tooltip>
  )
}
