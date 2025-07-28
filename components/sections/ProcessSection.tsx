// components/sections/ProcessSection.tsx
"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Planning",
    description: "Understanding your business needs and defining project scope",
    duration: "1-2 weeks",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes",
    duration: "2-3 weeks",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description:
      "Building your solution with rigorous testing and quality assurance",
    duration: "4-8 weeks",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description:
      "Seamless deployment to production with performance monitoring",
    duration: "1 week",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Optimization",
    description: "Ongoing maintenance, updates, and performance optimization",
    duration: "Ongoing",
  },
];

export function ProcessSection() {
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
            Our <span className="text-[#a0ff4a]">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#393e42] rounded-full hidden lg:block" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-16 relative ${
                index % 2 === 0
                  ? "lg:flex-row lg:justify-start"
                  : "lg:flex-row-reverse lg:justify-start"
              }`}
            >
              {/* Card */}
              <div
                className={`w-full lg:w-5/12 relative ${
                  index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
                }`}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-white transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#393e42] rounded-full flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-[#a0ff4a]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 mb-3">{step.description}</p>
                        <div className="text-sm text-[#a0ff4a] font-semibold">
                          Duration: {step.duration}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Timeline dot positioned beside each card */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 hidden lg:block ${
                    index % 2 === 0
                      ? "left-full ml-6" // Right side of left cards
                      : "right-full mr-6" // Left side of right cards
                  }`}
                >
                  <div className="w-6 h-6 bg-[#a0ff4a] rounded-full border-4 border-slate-900 z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
