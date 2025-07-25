// components/sections/TechStackSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    name: "Frontend",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "bg-[#ffffff]",
  },
  {
    name: "Backend",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    color: "bg-[#a0ff4a]",
  },
  {
    name: "Mobile",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
    color: "bg-[#ffffff]",
  },
  {
    name: "Cloud",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    color: "bg-[#a0ff4a]",
  },
  {
    name: "DevOps",
    technologies: [
      "GitHub Actions",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Monitoring",
    ],
    color: "bg-[#ffffff]",
  },
  {
    name: "AI/ML",
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI",
      "Hugging Face",
      "Scikit-learn",
    ],
    color: "bg-[#a0ff4a]",
  },
];

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technology <span className="text-[#a0ff4a]">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cutting-edge technologies powering our solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-white transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div
                    className={`w-full h-2 ${category.color} rounded-full mb-4`}
                  />
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#393e42]/30 text-[#a0ff4a] border-[#393e42]/30 hover:bg-[#393e42]/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
