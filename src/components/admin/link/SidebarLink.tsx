import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
interface SidebarProps {
  label: string,
  icon: React.ReactNode,
  path: string
}
export const SidebarLink = ({ link, open }: { link: SidebarProps, open: boolean }) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={`/dashboard/${link.path}`}
          className="flex items-center gap-2 hover:bg-thirtyColor/12 p-2 rounded-lg text-descColor overflow-hidden transition-all"
        >
          <div className="size-6 flex items-center justify-center">
            {link.icon}
          </div>
          <span>{link.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className={open ? "" : "hidden"}>
        <span>{link.label}</span>
      </TooltipContent>
    </Tooltip>
  )
}
