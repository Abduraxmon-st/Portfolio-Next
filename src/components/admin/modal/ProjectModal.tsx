import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Project } from "@/types"
import { useEffect, useRef, useState } from "react"
import { TechnologiesSelect, TypeSelect } from "../select"
import ImageUploader from "../input/ImageInput"
import { X } from "lucide-react"
import Viewer from 'viewerjs';
import "viewerjs/dist/viewer.css";
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { projectSchema } from "../schema"
import z from "zod"
type ProjectFormData = z.infer<typeof projectSchema>;

interface props {
  open: boolean,
  setOpen: (value: boolean) => void
  project?: Project | null
}
export const ProjectModal = ({ project, open, setOpen }: props) => {
  const [step, setStep] = useState(1)
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const editing = !!project
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      link: "",
      description: "",
      technologies: [],
      type: "",
      images: [],
    },
  });
  const images = watch("images")
  useEffect(() => {
    if (open && project) {
      reset({
        title: project.title ?? "",
        link: project.link ?? "",
        description: project.desc ?? "",
        technologies: project.technologies?.map(t => t.path) ?? [],
        type: project.type ?? "",
        images: project.images?.map(img => new File([], img)) ?? [],
      });
    } else if (open && !project) {
      reset({
        title: "",
        link: "",
        description: "",
        technologies: [],
        type: "",
        images: [],
      });
    } else if (!open) {
      reset({
        title: "",
        link: "",
        description: "",
        technologies: [],
        type: "",
        images: [],
      });
    }
  }, [project, open, reset]);

  useEffect(() => {
    if (!galleryRef.current) return;

    const viewer = new Viewer(galleryRef.current, {
      toolbar: true,
      navbar: false,
      title: false,
      movable: false,
      zoomable: true,

    });

    return () => {
      viewer.destroy()
    }
  }, [images]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="bg-[#000424] border-0 rounded-2xl p-4! text-descColor">
        <DialogHeader>
          <DialogTitle className="text-start text-2xl font-bold ml-2">
            {editing ?
              `Editing ${project?.title}`
              : "Create project"
            }
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {/*Form */}
          <div
            style={{
              scrollbarWidth: "none",
            }}
            className="overflow-x-auto py-px">
            <div
              style={{
                transform: `translateX(${step === 1 ? "0" : "-50%"})`
              }}
              className="w-[calc(100%*2)] grid grid-cols-2 transition-transform duration-150">
              {/* STEP 1 INPUTS*/}
              <div className="flex flex-col gap-3 col-span-1">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="title" className={`text-xs font-medium ${errors.title && "text-red-600"}`}>
                      {errors.title ? errors.title.message : "Title"}
                    </label>
                    <Input
                      {...register("title")}
                      id="title"
                      placeholder="Project title"
                      className="h-9 rounded-md placeholder:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="link" className={`text-xs font-medium ${errors.link && "text-red-600"}`}>{errors.link ? errors.link.message : "Link"}</label>
                    <Input
                      {...register("link")}
                      id="link"
                      placeholder="Project link"
                      className="h-9 rounded-md placeholder:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className={`text-xs font-medium ${errors.description && "text-red-600"}`}>{errors.description ? errors.description.message : "Description"}</label>
                  <Textarea
                    {...register("description")}
                    placeholder="Project descritpion"
                    className={`text-descColor placeholder:text-descColor/50`}
                  />
                </div>
                <div className="flex gap-2">

                  {/* Technologies */}
                  <div className="flex-1">
                    <Controller
                      name="technologies"
                      control={control}
                      render={({ field }) => (
                        <>
                          <label htmlFor="technologies" className={`text-xs font-medium ${errors.technologies && "text-red-600"}`}>
                            {errors.technologies ? errors.technologies.message : "Technologies"}
                          </label>
                          <TechnologiesSelect
                            value={field.value}
                            onChange={field.onChange}
                            technologies={project?.technologies ?? []}
                          />
                        </>
                      )}
                    />
                  </div>

                  {/* Type */}
                  <div>
                    <Controller
                      name="type"
                      control={control}
                      render={({ field }) => (
                        <>
                          <label htmlFor="type" className={`text-xs font-medium ${errors.type && "text-red-600"}`}>
                            {errors.type ? errors.type.message : "Type"}
                          </label>
                          <TypeSelect
                            type={field.value}
                            setTipe={field.onChange}
                            all={false}
                          />
                        </>
                      )}
                    />
                  </div>

                </div>
              </div>

              {/* STEP 2 IMAGES*/}
              <div className="col-span-1">
                <p className="ml-2 text-lg flex items-center gap-1 justify-between pr-2">
                  <span>Images <span className="text-base">( {images.length} )</span></span>
                  {errors.images && <span className="text-red-500 text-xs mt-1">{errors.images.message}</span>}
                </p>
                <Controller
                  name="images"
                  control={control}
                  render={({ field }) => (
                    <div className={`h-[calc(100%-2rem-8px)] mt-2 border-dashed border-borderColor rounded-md ${field.value.length === 0 && "border"}`}>
                      {
                        field.value.length === 0 ? (
                          <ImageUploader images={field.value} setImages={field.onChange} />
                        ) : (
                          <div ref={galleryRef} className="grid grid-cols-2 gap-2 max-h-75 overflow-y-auto">
                            {
                              field.value.map((pic, i) => (
                                <div
                                  key={i}
                                  className={`relative aspect-video ${i === 0 ? "border-2 border-cyan-400" : "border border-borderColor"} rounded-md overflow-hidden`}
                                >
                                  <button
                                    type="button"
                                    onClick={() => {
                                      // rasmni o‘chirish
                                      const newImages = field.value.filter((_, idx) => idx !== i);
                                      field.onChange(newImages);
                                    }}

                                    className="absolute rounded-full p-1 bg-red-500/20 border border-red-600 z-3 right-2 top-2 cursor-pointer">
                                    <X size={12} className="text-red-500" />
                                  </button>
                                  <img
                                    src={URL.createObjectURL(pic)}
                                    alt="preview"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                              ))
                            }
                            <ImageUploader images={field.value} setImages={field.onChange} />
                          </div>
                        )
                      }
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          {/* Footer buttons */}
          <div>
            {
              step === 1 &&
              <DialogFooter className="flex-row justify-end! border-t border-borderColor/70 pt-4 mt-4">
                <DialogClose
                  type="button"
                  className="px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
                  Cancel
                </DialogClose>
                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  className="bg-descColor/10 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer"
                // onClick={() => handleConfirm()}
                >
                  Next
                </Button>
              </DialogFooter>
            }
            {
              step === 2 &&
              <DialogFooter className="flex-row justify-end!">
                <Button
                  type="button"
                  onClick={() => setStep(1)}
                  className="bg-descColor/10 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
                  Previous
                </Button>
                <Button
                  type="submit"
                  className="bg-green-400/20 border border-green-400 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer"
                >
                  {editing ? `Save` : "Create"}
                </Button>
              </DialogFooter>
            }
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
