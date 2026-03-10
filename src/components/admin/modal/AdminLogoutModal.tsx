"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useCursor } from "@/context/CursorContext";
import { useCookie } from "@/hooks/useCookie";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
export const AdminLogoutModal = ({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) => {
  const router = useRouter()
  const { deleteCookie } = useCookie()

  const handleConfirmLogout = () => {
    deleteCookie("ADMIN_ACCESS_PORT")
    router.push("/home")
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="bg-[#000424] border-0 rounded-2xl max-w-[80%] sm:max-w-[300px] p-4! pl-6! text-descColor">
        <DialogHeader>
          <DialogTitle className="text-start sm:text-center text-2xl font-bold">Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex-row justify-end!">
          <DialogClose
            className="px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
            Cancel
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => handleConfirmLogout()}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
