"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
interface props {
  open: boolean,
  setOpen: (value: boolean) => void
  title?: string
  button?: string
  handleConfirm: () => void
}
export const AdminConfirmModal = ({
  open,
  setOpen,
  title = "Are you sure?",
  button = "Confirm",
  handleConfirm
}: props) => {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="bg-[#000424] border-0 rounded-2xl max-w-[80%] sm:max-w-75 p-4! pl-6! text-descColor">
        <DialogHeader>
          <DialogTitle className="text-start sm:text-center text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex-row justify-end!">
          <DialogClose
            className="px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
            Cancel
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => handleConfirm()}>
            {button}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
