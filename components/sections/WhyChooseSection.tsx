// components/sections/WhyChooseSection.tsx
"use client";

import { motion } from "framer-motion";
import { Puzzle, Building, Users, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Puzzle,
    title: "Custom Solutions",
    description: "Tailored to your specific business needs and requirements",
    animation: "puzzle",
  },
  {
    icon: Building,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling increased demand",
    animation: "building",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience",
    animation: "team",
  },
  {
    icon: BarChart,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients",
    animation: "chart",
  },
];

export function WhyChooseSection() {
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
            Why Choose <span className="text-[#a0ff4a]">Xanitus</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We deliver excellence through innovation, expertise, and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-white transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4 ">
                    <div className="w-12 h-12 bg-[#393e42] rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-[#a0ff4a]" />
                    </div>
                    <CardTitle className="text-white  text-xl">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
