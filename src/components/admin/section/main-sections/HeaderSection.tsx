"use client"
import { logoBg } from "@/assets/images";
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { mainInfoSchema } from "../../schema";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const mainInfo = {
  badge: "Frontend Developer",
  fio: "Abduraxmon Tojixo'jayev",
  pic: "/src/assets/images/favicon-logo-without-bg.png",
  desc: "Building reliable and intuitive digital experiences using React and Next.js. Passionate about writing clean code and improving frontend architecture.",
  resume: {
    text: "You can also check my",
    path: "/Tojixojayev Abduraxmon's resume.pdf"
  }
}
export type MainInfo = z.infer<typeof mainInfoSchema>;
export const HeaderSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MainInfo>({
    resolver: zodResolver(mainInfoSchema),
    defaultValues: {
      badge: mainInfo.badge ?? "",
      fio: mainInfo.fio ?? "",
      pic: mainInfo.pic ?? "",
      desc: mainInfo.desc ?? "",
      resume: mainInfo.resume ?? {}
    },
  });
  useEffect(() => {
    if (mainInfo) {
      reset({
        badge: mainInfo.badge ?? "",
        fio: mainInfo.fio ?? "",
        pic: mainInfo.pic ?? "",
        desc: mainInfo.desc ?? "",
        resume: {
          text: mainInfo.resume?.text ?? "",
          path: mainInfo.resume?.path ?? ""
        }
      });
    } else if (!mainInfo) {
      reset({
        badge: "",
        fio: "",
        pic: "",
        desc: "",
        resume: { text: "", path: "" }
      });
    }
  }, [mainInfo, reset]);
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="bg-mainColor/40 p-3 rounded-md">
        <div className="flex gap-2 justify-end items-center">
          <p className="text-lg md:text-xl flex-1 pl-2">Header info</p>
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
        {/* Forms */}
        <div className="w-full h-px border-t border-borderColor mt-3 mb-4" />
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="fio" className={`text-xs font-medium ${errors.fio && "text-red-600"}`}>
                  {errors.fio ? errors.fio.message : "FIO"}
                </label>
                <Input
                  {...register("fio")}
                  id="fio"
                  placeholder="FIO"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="badge" className={`text-xs font-medium ${errors.badge && "text-red-600"}`}>
                  {errors.badge ? errors.badge.message : "Badge"}
                </label>
                <Input
                  {...register("badge")}
                  id="badge"
                  placeholder="Frontend Developer"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="title" className={`text-xs font-medium ${errors.desc && "text-red-600"}`}>{errors.desc ? errors.desc.message : "Hero description"}</label>
              <Textarea
                {...register("desc")}
                placeholder="Hero description"
                className={`text-descColor placeholder:text-descColor/50 text-base! max-h-40`}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <div>
                <label htmlFor="resume.text" className={`text-xs font-medium ${errors.resume?.text && "text-red-600"}`}>
                  {errors.resume?.text ? errors.resume.text.message : "Resume path"}
                </label>
                <Input
                  {...register("resume.text")}
                  id="resume.text"
                  placeholder="Frontend Developer"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
              <div>
                <label htmlFor="resume.path" className={`text-xs font-medium ${errors.resume?.path && "text-red-600"}`}>
                  {errors.resume?.path ? errors.resume.path.message : "Resume text"}
                </label>
                <Input
                  {...register("resume.path")}
                  id="resume.path"
                  placeholder="Frontend Developer"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full mc:max-w-60 h-90 nc1:h-70 border-2 border-borderColor rounded-[50px] rounded-tl-[100px] rounded-br-[100px]">
            <Image src={logoBg} alt="logo" width={100} height={100} loading="eager" className="w-full h-full object-cover" />
          </div>
        </div>
      </form>
    </div>
  )
}
// ism familiya
// main Rasm
// desc
// resume "text, file"
// badge