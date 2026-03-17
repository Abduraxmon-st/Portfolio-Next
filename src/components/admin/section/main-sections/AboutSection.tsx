"use client"
import { Button } from "@/components/ui/button"
import z from "zod";
import { aboutSchema } from "../../schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { logoBg } from "@/assets/images";
const aboutInfo = {
  pic: "/src/assets/images/favicon-logo-without-bg.png",
  desc: "I'm a Frontend Developer specializing in React and Next.js, focused on building clean, scalable, and user-centric web applications. I’m passionate about turning business requirements into efficient interfaces, optimizing workflows, and improving product usability. Although early in my career, I’ve already worked on multiple real- world projects, contributing to dashboards, admin panels, internal tools, and automation-focused features that help teams work faster and more effectively. My goal is to create reliable, maintainable frontend solutions that not only look great but also support business growth, reduce complexity, and simplify day-to-day operations through smart, data - driven development.",
  experience: "1 year",
  location: "Tashkent, Uzbekistan",
  specialization: "Frontend Developer | Telegram Web Apps | Web Solutions React.js & Next.js Specialist"
}
export type aboutInfoType = z.infer<typeof aboutSchema>;

export const AboutSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<aboutInfoType>({
    resolver: zodResolver(aboutSchema),
    defaultValues: {
      pic: aboutInfo.pic ?? "",
      desc: aboutInfo.desc ?? "",
      experience: aboutInfo.experience ?? "",
      location: aboutInfo.location ?? "",
      specialization: aboutInfo.specialization ?? "",
    },
  });

  useEffect(() => {
    if (aboutInfo) {
      reset({
        pic: aboutInfo.pic ?? "",
        desc: aboutInfo.desc ?? "",
        experience: aboutInfo.experience ?? "",
        location: aboutInfo.location ?? "",
        specialization: aboutInfo.specialization ?? "",
      });
    } else if (!aboutInfo) {
      reset({
        pic: "",
        desc: "",
        experience: "",
        location: "",
        specialization: "",
      });
    }
  }, [aboutInfo, reset]);

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))} className="bg-mainColor/40 p-3 rounded-md">
        <div className="flex gap-2 justify-end items-center">
          <p className="text-lg md:text-xl flex-1 pl-2">About info</p>
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
                <label htmlFor="specialization" className={`text-xs font-medium ${errors.specialization && "text-red-600"}`}>
                  {errors.specialization ? errors.specialization.message : "Specialization"}
                </label>
                <Input
                  {...register("specialization")}
                  id="specialization"
                  placeholder="Telegram Web Apps | Web Solutions"
                  className="h-9 rounded-md placeholder:opacity-50"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label htmlFor="experience" className={`text-xs font-medium ${errors.experience && "text-red-600"}`}>
                    {errors.experience ? errors.experience.message : "Experience"}
                  </label>
                  <Input
                    {...register("experience")}
                    id="experience"
                    placeholder="1 year"
                    className="h-9 rounded-md placeholder:opacity-50"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="location" className={`text-xs font-medium ${errors.location && "text-red-600"}`}>
                    {errors.location ? errors.location.message : "Location"}
                  </label>
                  <Input
                    {...register("location")}
                    id="location"
                    placeholder="Tashkent, Uzbekistan"
                    className="h-9 rounded-md placeholder:opacity-50"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 mt-4">
              <div className="flex-1">
                <label htmlFor="desc" className={`text-xs font-medium ${errors.desc && "text-red-600"}`}>{errors.desc ? errors.desc.message : "About description"}</label>
                <Textarea
                  id="desc"
                  {...register("desc")}
                  placeholder="Hero description"
                  className={`text-descColor placeholder:text-descColor/50 text-base! max-h-60`}
                />
              </div>
              <div className="overflow-hidden w-full lg:w-50 xl:w-35 border-2 border-borderColor rounded-3xl">
                <Image src={logoBg} alt="photo" width={100} height={100} className="w-full h-full object-cover hover:scale-106 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
// bio info
// exp, location, specialization
// photo
