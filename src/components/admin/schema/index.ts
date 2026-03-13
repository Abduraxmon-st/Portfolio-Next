import { Technology } from "@/types";
import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  link: z.string().url("Link must be a valid URL"),
  description: z.string().min(1, "Description is required"),
  technologies: z.array(z.string()).min(1, "Select at least one technology"),
  type: z.string().min(1, "Type is required"),
  images: z.array(z.instanceof(File)).min(1, "At least one image is required")
});