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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Modern, responsive websites built with cutting-edge technologies",
    details: "React, Next.js, Node.js, TypeScript",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description:
      "Streamline your business processes with intelligent automation",
    details: "Zapier, n8n, Custom APIs, Process Optimization",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications",
    details: "React Native, Flutter, iOS, Android",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "Systems Development",
    description: "Robust backend systems and database architecture",
    details: "PostgreSQL, MongoDB, Redis, Microservices",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    details: "AWS, Azure, Google Cloud, DevOps",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "Complete digital overhaul for modern businesses",
    details: "Strategy, Implementation, Training, Support",
    color: "from-pink-500 to-purple-500",
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
            Our <span className="text-purple-400">Services</span>
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
              <HoverCard>
                <HoverCardTrigger>
                  <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400 transition-all duration-300 cursor-pointer group">
                    <CardHeader>
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="bg-slate-800 border-slate-700 text-white">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-400">
                      Technologies:
                    </h4>
                    <p className="text-sm text-gray-300">{service.details}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
