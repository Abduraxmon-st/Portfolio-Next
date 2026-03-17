import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../schema";
import z from "zod";
const contactInfo = {
  email: "tojixojayevabduraxmon@gmail.com",
  phone: "9772168861",
  telegram: "https://t.me/Tojixojayev_099"
}
export type contactInfoType = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<contactInfoType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: contactInfo.email ?? "",
      phone: contactInfo.phone ?? "",
      telegram: contactInfo.telegram ?? "",
    },
  });

  useEffect(() => {
    if (contactInfo) {
      reset({
        email: contactInfo.email ?? "",
        phone: contactInfo.phone ?? "",
        telegram: contactInfo.telegram ?? "",
      });
    } else if (!contactInfo) {
      reset({
        email: "",
        phone: "",
        telegram: "",
      });
    }
  }, [contactInfo, reset]);
  return (
    <div>
      <form className="bg-mainColor/40 p-3 rounded-md">
        <div className="flex gap-2 justify-end items-center">
          <p className="text-lg md:text-xl flex-1 pl-2">Contact info</p>
          <Button
            type="button"
            className="bg-descColor/10 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-green-400/20 border border-green-400 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer"
          >
            Save
          </Button>
        </div>
        <div className="w-full h-px border-t border-borderColor mt-3 mb-4" />
        <div className="flex flex-col nc1:flex-row gap-2">
          <div className="flex-1">
            <div className="grid lg:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className={`text-xs font-medium ${errors.email && "text-red-600"}`}>
                  {errors.email ? errors.email.message : "Email"}
                </label>
                <Input
                  {...register("email")}
                  id="email"
                  placeholder="Email"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label htmlFor="telegram" className={`text-xs font-medium ${errors.telegram && "text-red-600"}`}>
                    {errors.telegram ? errors.telegram.message : "telegram"}
                  </label>
                  <Input
                    {...register("telegram")}
                    id="telegram"
                    placeholder="Telegram url"
                    className="h-9 rounded-md placeholder:opacity-50"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="phone" className={`text-xs font-medium ${errors.phone && "text-red-600"}`}>
                    {errors.phone ? errors.phone.message : "Phone number"}
                  </label>
                  <Input
                    {...register("phone")}
                    id="phone"
                    placeholder="Tashkent, Uzbekistan"
                    className="h-9 rounded-md placeholder:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
// email
// telegram
// nomer
// location