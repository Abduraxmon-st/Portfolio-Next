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
import { Input } from "@/components/ui/input";
import { useCursor } from "@/context/CursorContext";
import { useCookie } from "@/hooks/useCookie";
import { ShieldUser } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const ACCESS_KEY = process.env.NEXT_ADMIN_ACCESS_KEY

export const AdminAccessModal = () => {
  const router = useRouter()
  const { setCookie, getCookie } = useCookie()
  const Acookie = getCookie("ADMIN_ACCESS_PORT")
  const { setHovered } = useCursor();
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState("");
  const [pass, setPass] = useState("")
  const Akey = ACCESS_KEY
  useEffect(() => {
    setIsError(false)
    setIsErrorMessage("")
  }, [isFocused])

  const handleConfirm = () => {
    if (pass.length === 0) {
      setIsError(true)
      setIsErrorMessage("Enter the access key")
      return
    }
    if ((Akey === pass) && !isError) {
      setCookie("ADMIN_ACCESS_PORT", "true", 30)
      router.push("/dashboard/main")
    } else {
      setIsError(true)
      setIsErrorMessage("Invalid access key")
    }
  }
  if (!!Acookie) {
    return <Link
      href="/dashboard/main"
      style={{ cursor: "none" }}
      className="fixed flex items-center justify-center left-4 bottom-0 sm:bottom-4 z-99 rounded-full border size-7.5 border-borderColor">
      <ShieldUser size={16} className="opacity-40 mt-px" />
    </Link>
  } else return (
    <Dialog>
      <DialogTrigger
        style={{ cursor: "none" }}
        className="fixed flex items-center justify-center left-4 bottom-0 sm:bottom-4 z-99 rounded-full border size-7.5 border-borderColor">
        <ShieldUser size={16} className="opacity-40 mt-px" />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        style={{ cursor: "none" }}
        aria-describedby={undefined}
        className="bg-mainColor border-0 rounded-2xl max-w-[80%] sm:max-w-[350px] pb-4! px-4! text-descColor">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl sm:text-4xl font-bold">Admin</DialogTitle>
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative mt-2 sm:mt-5">
            {/* Label */}
            <label
              style={{ cursor: "none" }}
              className={`
          absolute text-descColor/50 pointer-events-none transition-all duration-200
          ${isFocused || pass.length !== 0
                  ? "-top-5 left-0 text-xs"
                  : "top-[46%] -translate-y-1/2 left-4 text-sm"
                }
          ${isError ? "text-red-500/70" : ""}
        `}
            >
              {isErrorMessage ? isErrorMessage : "Access key"}
            </label>

            {/* Input */}
            <Input
              onFocus={() => setIsFocused(true)}
              onBlur={(e) => {
                setIsFocused(false);
                setPass(e.target.value)
              }}
              type="password"
              style={{ cursor: "none" }}
              className={`text-descColor relative z-2 h-10
              ${isError
                  ? "placeholder:text-red-500/50 border-red-700 ring-3 ring-red-500/30"
                  : "placeholder:text-transparent"
                }
              `}
            />
          </div>
        </DialogHeader>
        <DialogFooter className="flex-row justify-end!">
          <DialogClose
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ cursor: "none" }}
            className="px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm">
            Cancel
          </DialogClose>
          <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ cursor: "none" }}
            variant="ghost"
            onClick={() => handleConfirm()}
            className="hover:bg-mainEasierColor/50 hover:text-descColor">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
