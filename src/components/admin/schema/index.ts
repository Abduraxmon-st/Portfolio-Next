import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  link: z.string().url("Link must be a valid URL"),
  description: z.string().min(1, "Description is required"),
  technologies: z.array(z.string()).min(1, "Select at least one technology"),
  type: z.string().min(1, "Type is required"),
  images: z.array(z.instanceof(File)).min(1, "At least one image is required")
});

export const technologySchema = z.object({
  title: z.string().min(1, "Title is required"),
  svg: z.string().min(1, "Svg path is required"),
});

export const mainInfoSchema = z.object({
  badge: z
    .string()
    .min(1, { message: "Badge is required" }),
  fio: z
    .string()
    .min(1, { message: "Full name is required" }),
  pic: z
    .string()
    .min(1, { message: "Picture is required" }),
  desc: z
    .string()
    .min(1, { message: "Description is required" }),
  resume: z.object({
    text: z
      .string()
      .min(1, { message: "Resume text is required" }),
    path: z
      .string()
      .min(1, { message: "Resume path is required" })
    // Agar URL bo‘lishi kerak bo‘lsa, quyidagicha yozish mumkin:
    // .url({ message: "Resume path must be a valid URL" })
  }),
});

export const aboutSchema = z.object({
  pic: z.string().min(1, { message: "Picture is required" }),
  desc: z.string().min(1, "Description is required"),
  experience: z.string().min(1, "Experience is required"),
  location: z.string().min(1, "Location is required"),
  specialization: z.string().min(1, "Specialization is required"),
});

export const contactSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),

  phone: z
    .string()
    .regex(/^\d{9}$/, "Phone must be exactly 9 digits"),

  telegram: z
    .string()
    .min(1, "Telegram is required"),
});