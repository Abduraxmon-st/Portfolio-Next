"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { useCursor } from "@/context/CursorContext";
import { ShieldUser } from "lucide-react";
import { useState } from "react";

export const AdminAccessModal = () => {
  const { setHovered } = useCursor();
  const [isFocused, setIsFocused] = useState(false);
  const [pass, setPass] = useState("")
  return (
    <Dialog>
      <DialogTrigger
        style={{ cursor: "none" }}
        className="fixed flex items-center justify-center left-4 bottom-4 z-99 rounded-full border size-7.5 border-borderColor">
        <ShieldUser size={16} className="opacity-40 mt-px" />
      </DialogTrigger>
      <DialogContent
        style={{ cursor: "none" }}
        aria-describedby="undefined"
        className="bg-mainColor border-0 rounded-2xl sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-bold">Admin</DialogTitle>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative mt-5">
            {/* Label */}
            <label
              style={{ cursor: "none" }}
              className={`
          absolute text-descColor/50 pointer-events-none transition-all duration-200
          ${isFocused || pass.length !== 0
                  ? "-top-5 left-0 text-xs"
                  : "top-[46%] -translate-y-1/2 left-4 text-sm"
                }
        `}
            >
              Access key
            </label>

            {/* Input */}
            <Input
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false);
                setPass(e.target.value)
              }}
              type="text"
              style={{ cursor: "none" }}
              className={`text-descColor relative z-2 placeholder:text-transparent`}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
