"use client"
import { MousePointer2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { useCursor } from "@/src/context/CursorContext"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  contact: z.string().min(1, "Email or Phone is required").max(100),
  message: z.string().min(1, "Message is required").max(500),
})
type ContactFormValues = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { setHovered } = useCursor();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("contact", data.contact);
      formData.append("message", data.message);

      const res = await fetch("https://script.google.com/macros/s/AKfycbxBEnD9hKgohz4FEb3fuJjzGYzBQcJcyVftrXLN4ri_Farz49tSJnzHQ4dqmdCXKTA/exec", {
        method: "POST",
        body: formData,
      });
      const resData = await res.json()
      if (resData.success) {
        setSuccess("Message sent successfully!")
        reset()
      } else {
        setError("Failed to send message")
      }
    } catch (err) {
      console.error(err)
      setError("Failed to send message")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="w-[40%] h-max">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        id="contact-me"
        className="flex flex-col gap-5" >

        <Input
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          {...register("name")}
          type="text"
          className="text-descColor placeholder:text-descColor/50"
          placeholder="Your Name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <Input
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          {...register("contact")}
          type="text"
          className="text-descColor placeholder:text-descColor/50"
          placeholder="Email or Phone" />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}

        <Textarea
          style={{ cursor: "none" }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          {...register("message")}
          placeholder="Your Message"
          className="text-descColor placeholder:text-descColor/50" />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        <Button
          style={{ cursor: "none" }}
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={!isValid || loading}
          className="h-11.5 rounded-[12px] text-descColor border border-borderColor border-gradient hover:scale-103 active:scale-100 duration-300"
        >{loading ? "Sending..." : "Send me Message"}
          <MousePointer2 className="size-4.5 -scale-x-100 mt-[3px]" />
        </Button>
      </form>
    </div>
  )
}
