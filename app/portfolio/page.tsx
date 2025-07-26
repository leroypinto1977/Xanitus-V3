"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { ProjectFilter } from "@/components/ui/project-filter";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  mainImage: any;
  excerpt: string;
  technologies: Array<{
    _id: string;
    name: string;
  }>;
  publishedAt: string;
}

async function getProjects(): Promise<Project[]> {
  const query = `
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      client,
      mainImage,
      excerpt,
      technologies[]-> {
        _id,
        name
      },
      publishedAt
    }
  `;

  try {
    const projects = await client.fetch(query);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

async function getAllTechnologies() {
  const query = `
    *[_type == "technology"] | order(name asc) {
      _id,
      name
    }
  `;

  try {
    const technologies = await client.fetch(query);
    return technologies;
  } catch (error) {
    console.error("Error fetching technologies:", error);
    return [];
  }
}

// Fallback projects for when Sanity is not configured
const fallbackProjects = [
  {
    _id: "1",
    title: "E-commerce Platform Redesign",
    slug: { current: "ecommerce-platform-redesign" },
    client: "Fashion Retailer",
    mainImage: null,
    excerpt:
      "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate.",
    technologies: [
      { _id: "1", name: "Next.js" },
      { _id: "2", name: "Tailwind CSS" },
      { _id: "3", name: "Stripe" },
      { _id: "4", name: "Sanity CMS" },
    ],
    publishedAt: "2024-01-15",
  },
  {
    _id: "2",
    title: "Mobile Banking Application",
    slug: { current: "mobile-banking-application" },
    client: "Financial Services Company",
    mainImage: null,
    excerpt:
      "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
    technologies: [
      { _id: "5", name: "React Native" },
      { _id: "6", name: "Node.js" },
      { _id: "7", name: "MongoDB" },
      { _id: "8", name: "AWS" },
    ],
    publishedAt: "2024-02-20",
  },
  {
    _id: "3",
    title: "Healthcare Management System",
    slug: { current: "healthcare-management-system" },
    client: "Regional Hospital",
    mainImage: null,
    excerpt:
      "Comprehensive healthcare management system for patient records, appointments, and billing.",
    technologies: [
      { _id: "9", name: "React" },
      { _id: "10", name: "Express" },
      { _id: "11", name: "PostgreSQL" },
      { _id: "12", name: "Docker" },
    ],
    publishedAt: "2024-03-10",
  },
];

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [technologies, setTechnologies] = useState<
    Array<{ _id: string; name: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [projectsData, technologiesData] = await Promise.all([
          getProjects(),
          getAllTechnologies(),
        ]);

        // Use fallback projects if no projects are fetched from Sanity
        const finalProjects =
          projectsData.length > 0 ? projectsData : fallbackProjects;

        setAllProjects(finalProjects);
        setProjects(finalProjects);
        setTechnologies(technologiesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAllProjects(fallbackProjects);
        setProjects(fallbackProjects);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleFilterChange = (selectedTechIds: string[]) => {
    if (selectedTechIds.length === 0) {
      setProjects(allProjects);
    } else {
      const filteredProjects = allProjects.filter((project) =>
        project.technologies.some((tech) => selectedTechIds.includes(tech._id))
      );
      setProjects(filteredProjects);
    }
  };

  if (isLoading) {
    return (
      <div className="pt-24">
        <div className="container mx-auto max-w-6xl px-4 py-12 text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-slate-700 rounded mb-8 mx-auto max-w-md"></div>
            <div className="h-4 bg-slate-700 rounded mb-16 mx-auto max-w-2xl"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-slate-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Our <span className="text-[#a0ff4a]">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          Explore our showcase of successful projects and digital solutions that
          have helped our clients achieve their goals.
        </p>

        <ProjectFilter
          technologies={technologies}
          onFilterChange={handleFilterChange}
        />

        {projects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria. Try adjusting your
              filters.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <Link
                href={`/portfolio/${project.slug.current}`}
                key={project._id}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-[#a0ff4a] transition-all duration-300 h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    {project.mainImage ? (
                      <Image
                        src={urlFor(project.mainImage).url()}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-t-lg flex items-center justify-center">
                        <span className="text-gray-400 text-lg">No Image</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      {project.client && (
                        <Badge className="bg-[#a0ff4a] text-black">
                          {project.client}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#a0ff4a] transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4">{project.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
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

                    <div className="flex justify-end">
                      <ArrowRight className="h-5 w-5 text-[#a0ff4a] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Admin notice */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Want to add more projects? Access the Sanity Studio to manage your
            portfolio content.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center px-4 py-2 bg-[#a0ff4a] text-black rounded-lg hover:bg-[#8ee639] transition-colors"
          >
            Access Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
