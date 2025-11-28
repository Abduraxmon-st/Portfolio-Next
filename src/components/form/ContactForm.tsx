"use client"
import { Loader2, MousePointer2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useCursor } from "@/src/context/CursorContext"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContactForm } from "@/src/hooks/useContactForm"
import { PhoneOrEmailInput } from "../input/PhoneOrEmailInput"
import AnimatedCheck from "@/src/assets/icons/checkIcon"
import AnimatedX from "@/src/assets/icons/xIcon"
import { useRef, useState } from "react"
import FloatingTextarea from "../input/FormTextArea"
const contactFormSchema = z.object({
  name: z.string().min(3, "Name is required").max(100),
  contact: z.string().min(5, "Email or Phone number is required").max(100)
    .refine((value) => {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.startsWith("998")) {
        return cleaned.length === 12
      } else return true
    }, {
      message: "Phone number must be in +998 XX XXX XX XX format"
    })
    .refine((value) => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (/[A-Za-z]/.test(value)) {
        return emailRegex.test(value);
      } else return true;
    }, {
      message: "Please enter a valid email address"
    }),
  message: z.string().min(1, "Message is required").max(500),
})
type ContactFormValues = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const { setHovered } = useCursor();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      contact: "",
      message: "",
      name: ""
    }
  })
  const { loading, success, error, send } = useContactForm();
  const [isFocused, setIsFocused] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const { ref: formRef, ...nameRegister } = register("name");
  const value = watch("name") || "";
  const isFilled = value.length > 0;

  const onSubmit = async (data: ContactFormValues) => {

    await send(
      {
        name: data.name,
        contact: data.contact,
        message: data.message,
      }
    );

    reset({
      contact: "",
      message: "",
      name: ""
    });
  };

  return (
    <div className="w-[40%] h-max">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        id="contact-me"
        className="flex flex-col gap-5" >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative h-fit">
          {/* Label */}
          <label
            style={{ cursor: "none" }}
            className={`
          absolute text-descColor/50 pointer-events-none transition-all duration-200
          ${isFocused || isFilled
                ? "-top-5 left-0 text-xs"
                : "top-1/2 -translate-y-1/2 left-4 text-sm"
              }
          ${errors.name ? "text-red-500/70" : ""}
        `}
          >
            {errors.name ? errors.name.message : "Your Name"}
          </label>

          {/* Input */}
          <Input
            {...nameRegister}
            ref={(el) => {
              formRef(el);
              nameRef.current = el
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => {
              setIsFocused(false);
              nameRegister.onBlur(e);
            }}
            type="text"
            style={{ cursor: "none" }}
            className={`
          text-descColor relative z-2
          ${errors.name
                ? "placeholder:text-red-500/50 border-red-700 ring-3 ring-red-500/30"
                : "placeholder:text-transparent"
              }
        `}
            placeholder=" "
          />
        </div>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >

          <PhoneOrEmailInput
            control={control}
            {...register("contact")}
            errors={errors}
            className={`text-descColor relative z-2 ${errors.contact ? "placeholder:text-red-500/50 border-red-700 ring-3 ring-red-500/30" : "placeholder:text-descColor/50"}`}
            placeholder={errors.contact ? `${errors.contact.message}` : "Email or Phone number"} />
        </div>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <FloatingTextarea
            control={control}
            name="message"
            error={errors.message}
          />
        </div>
        <Button
          style={{ cursor: "none" }}
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={loading || !!errors.message || !!errors.contact || !!errors.name}
          className={`h-11.5 gap-3! rounded-[12px] border-gradient hover:scale-103 active:scale-100 duration-300 
          ${error ? "text-red-700" : "text-descColor"}`}
        >
          {loading ? "Sending"
            : success ? success
              : error ? error
                : "Send me Message"}
          {loading ?
            <Loader2 className="size-4.5 -scale-x-100 mt-[3px] animate-spin" />
            : success ?
              <AnimatedCheck show />
              : error ?
                <AnimatedX show />
                : <MousePointer2 className="size-4.5 -scale-x-100 mt-[3px]" />}
        </Button>
      </form >
    </div >
  )
}
