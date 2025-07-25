// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cog,
  Smartphone,
  Database,
  Cloud,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies",
    details: "React, Next.js, Node.js, TypeScript",
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description:
      "Streamline your business processes with intelligent automation",
    details: "Zapier, n8n, Custom APIs, Process Optimization",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    details: "React Native, Flutter, iOS, Android",
  },
  {
    icon: Database,
    title: "Systems Development",
    description: "Robust backend systems and database architecture",
    details: "PostgreSQL, MongoDB, Redis, Microservices",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    details: "AWS, Azure, Google Cloud, DevOps",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Complete digital overhaul for modern businesses",
    details: "Strategy, Implementation, Training, Support",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#a0ff4a]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-white transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#a0ff4a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-white group-hover:text-[#a0ff4a] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
