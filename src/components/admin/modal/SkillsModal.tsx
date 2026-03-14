import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Technology } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { technologySchema } from "../schema";
import z from "zod";
import { useEffect } from "react";
import { SquareDashed } from "lucide-react";

interface props {
  open: boolean,
  setOpen: (value: boolean) => void
  technology: Technology | null
  setTech: (value: null) => void
}
export type TechnologyForm = z.infer<typeof technologySchema>;
export const SkillsModal = ({
  open,
  setOpen,
  technology,
  setTech
}: props) => {
  const editing = !!technology
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TechnologyForm>({
    resolver: zodResolver(technologySchema),
    defaultValues: {
      title: "",
      svg: ""
    },
  });

  useEffect(() => {
    if (open && technology) {
      reset({
        title: technology.title ?? "",
        svg: technology.path ?? ""
      });
    } else if (open && !technology) {
      reset({
        title: "",
        svg: ""
      });
      setTech(null)
    } else if (!open) {
      reset({
        title: "",
        svg: ""
      });
      setTech(null)
    }
  }, [technology, open, reset]);


  const handleDeleteTech = () => {
    console.log("Deleted technology:", technology?.title);
    setOpen(false)
    reset()
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        aria-describedby={undefined}
        className="bg-[#000424] border-0 rounded-2xl max-w-[80%] sm:max-w-75 p-4! text-descColor">
        <DialogHeader>
          <DialogTitle className="text-start text-[22px] font-bold line-clamp-1">
            {editing ? `Edit ${technology.title}` : "Create technology"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="flex flex-col gap-2 items-center">
            {
              (technology?.path || editing) ?
                <img src={`/${technology?.path}.svg`} alt={"icon"} className="rounded-[3px] size-40 cursor-pointer" />
                :
                <div className="relative flex items-center justify-center text-descColor/70">
                  <SquareDashed size={150} />
                  <p className="absolute font-black tracking-wider">SVG</p>
                </div>
            }
            <div className="w-full">
              <label htmlFor="title" className={`text-xs font-medium ${errors.title && "text-red-600"}`}>
                {errors.title ? errors.title.message : "Name"}
              </label>
              <Input
                {...register("title")}
                id="title"
                placeholder="Technology name"
                className="h-9 rounded-md placeholder:opacity-50 w-full"
              />
            </div>
            <div className="w-full">
              <label htmlFor="svg" className={`text-xs font-medium ${errors.svg && "text-red-600"}`}>
                {errors.svg ? errors.svg.message : "Svg path"}
              </label>
              <Input
                {...register("svg")}
                id="svg"
                placeholder="Technology path"
                className="h-9 rounded-md placeholder:opacity-50 w-full"
              />
            </div>
          </div>
          <DialogFooter className="flex-row justify-end! mt-4">
            <Button
              type="button"
              onClick={handleDeleteTech}
              disabled={!technology}
              className="bg-red-400/20 border border-red-400 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer mr-auto"
            >
              Delete
            </Button>
            <DialogClose
              type="button"
              className="px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer">
              Cancel
            </DialogClose>
            <Button
              type="submit"
              className="bg-green-400/20 border border-green-400 px-4 hover:bg-white/5 hover:text-descColor transition-colors rounded-md text-sm cursor-pointer"
            >
              {editing ? `Save` : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog >
  )
}
