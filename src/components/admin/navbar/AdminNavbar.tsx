"use client"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, RefreshCw } from "lucide-react"
import { useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { DashboardSidebarMobile } from "../sidebar/DashboardSidebarMobile"
import { AdminConfirmModal } from "../modal"
import { useCookie } from "@/hooks/useCookie"

export const AdminNavbar = () => {
  const pathname = usePathname()
  const { deleteCookie } = useCookie()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [reloading, setReloading] = useState(false)
  const handleRefresh = () => {
    setReloading(true)
    window.location.reload()
  }

  const handleConfirmLogout = () => {
    deleteCookie("ADMIN_ACCESS_PORT")
    router.push("/home")
  }
  return (
    <nav>
      <div className="flex items-center justify-between bg-borderColor/50 text-descColor! rounded-md lg:rounded-xl py-2.5 lg:py-3.25 pl-4 lg:pl-6 pr-2 lg:pr-3 border-b border-borderColor">
        <h3 className="text-xl lg:text-[22px] font-bold tracking-wide capitalize">
          {pathname.slice(11) ?? ""}
        </h3>
        <div className="flex items-center gap-2 sm:gap-4">
          <Tooltip>
            <TooltipTrigger>
              <div onClick={() => handleRefresh()} className={`p-2 cursor-pointer ${reloading && "animate-spin"}`}>
                <RefreshCw size={18} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{reloading ? "Reloading..." : "Reload window"}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <div
                onClick={() => setOpen(true)}
                className="flex items-center justify-center cursor-pointer p-2">
                <LogOut size={18} className="text-descColor" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
          <div className="md:hidden">
            <DashboardSidebarMobile />
          </div>
        </div>
      </div>
      <AdminConfirmModal
        open={open}
        setOpen={setOpen}
        button="Log out"
        handleConfirm={handleConfirmLogout}
      />
    </nav>
  )
}
