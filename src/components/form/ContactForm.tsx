"use client"
import { MousePointer2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useCursor } from "@/src/context/CursorContext"

export const ContactForm = () => {
  const { setHovered } = useCursor();
  return (
    <div className="w-[40%] h-max">
      <form noValidate={false} id="contact-me" className="flex flex-col gap-5">
        <Input
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="text"
          className="text-descColor placeholder:text-descColor/50"
          placeholder="Your Name" />
        <Input
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="text"
          className="text-descColor placeholder:text-descColor/50"
          placeholder="Email or Phone" />
        <Textarea
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          placeholder="Your Message"
          className="text-descColor placeholder:text-descColor/50" />
        <Button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ cursor: "none" }}
          type="submit"
          className="h-11.5 rounded-[12px] text-descColor border border-borderColor border-gradient hover:scale-103 active:scale-100 duration-300"
        >Send me Message
          <MousePointer2 className="size-4.5 -scale-x-100 mt-[3px]" />
        </Button>
      </form>
    </div>
  )
}
