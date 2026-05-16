import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { slugify } from "@/hooks/useSlugify";
import { generatePageMetadata } from "@/lib/metadata";

type ProjectLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }> | { slug: string };
}>;

export async function generateMetadata({
  params,
}: Pick<ProjectLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const path = `/portfolio/${slug}`;
  const project = projects.find((item) => slugify(item.title) === slug);

  if (!project) {
    return generatePageMetadata(path);
  }

  const title = `${project.title} — Abduraxmon Tojixojayev`;
  const description = project.desc;
  const image = project.images[0];

  return generatePageMetadata(path, {
    title,
    description,
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  });
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return children;
}
