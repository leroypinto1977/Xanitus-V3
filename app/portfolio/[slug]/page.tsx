import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  mainImage: any;
  galleryImages?: Array<{
    _key: string;
    asset: any;
    caption?: string;
    alt?: string;
  }>;
  technologies: Array<{
    _id: string;
    name: string;
    icon?: any;
  }>;
  publishedAt: string;
  excerpt: string;
  body: any[];
  projectUrl?: string;
}

async function getProject(slug: string): Promise<Project | null> {
  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      mainImage,
      galleryImages,
      technologies[]-> {
        _id,
        name,
        icon
      },
      publishedAt,
      excerpt,
      body,
      projectUrl
    }
  `;

  try {
    const project = await client.fetch(query, { slug });
    return project;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Xanitus",
    };
  }

  return {
    title: `${project.title} | Xanitus Portfolio`,
    description: project.excerpt,
    openGraph: {
      title: project.title,
      description: project.excerpt,
      images: project.mainImage ? [urlFor(project.mainImage).url()] : [],
    },
  };
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ""}
          width={800}
          height={400}
          className="w-full rounded-lg"
        />
        {value.caption && (
          <p className="text-center text-sm text-gray-400 mt-2">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-white mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-white mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#a0ff4a] hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Back button */}
        <Link href="/portfolio">
          <Button
            variant="ghost"
            className="mb-8 text-white hover:text-[#a0ff4a] p-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            {project.client && (
              <Badge className="bg-[#a0ff4a] text-black">
                <User className="mr-1 h-3 w-3" />
                {project.client}
              </Badge>
            )}
            <Badge variant="secondary" className="bg-slate-700 text-gray-300">
              <Calendar className="mr-1 h-3 w-3" />
              {new Date(project.publishedAt).toLocaleDateString()}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8">{project.excerpt}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <Badge
                key={tech._id}
                variant="secondary"
                className="bg-[#393e42]/30 text-[#a0ff4a] border-[#393e42]/30"
              >
                {tech.name}
              </Badge>
            ))}
          </div>

          {/* Project URL */}
          {project.projectUrl && (
            <div className="mb-8">
              <Button
                asChild
                className="bg-[#a0ff4a] text-black hover:bg-[#8ee639]"
              >
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Main image */}
        <div className="mb-12">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Project content */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <PortableText value={project.body} components={components} />
            </div>
          </CardContent>
        </Card>

        {/* Gallery */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.galleryImages.map((image) => (
                <div key={image._key} className="space-y-2">
                  <Image
                    src={urlFor(image.asset).url()}
                    alt={image.alt || "Project gallery image"}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {image.caption && (
                    <p className="text-sm text-gray-400">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <Card className="bg-gradient-to-r from-[#a0ff4a]/10 to-[#a0ff4a]/5 border-[#a0ff4a]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in a similar project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help bring your vision to life with our
              expertise and innovative solutions.
            </p>
            <Button
              asChild
              className="bg-[#a0ff4a] text-black hover:bg-[#8ee639]"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
