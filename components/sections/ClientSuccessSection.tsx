// components/sections/ClientSuccessSection.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    company: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "Xanitus transformed our entire digital infrastructure. Their expertise in workflow automation saved us 40% operational costs.",
    rating: 5,
    project: "Enterprise Automation Platform",
    results: ["40% cost reduction", "60% faster processing", "99.9% uptime"],
  },
  {
    name: "Michael Chen",
    position: "Founder, StartupX",
    company: "StartupX",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The mobile app they developed exceeded our expectations. User engagement increased by 200% within the first month.",
    rating: 5,
    project: "Mobile App Development",
    results: [
      "200% user engagement",
      "4.9 app store rating",
      "500K+ downloads",
    ],
  },
  {
    name: "Emily Rodriguez",
    position: "CEO, RetailPlus",
    company: "RetailPlus",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Their e-commerce solution revolutionized our business. Sales increased by 150% after the new platform launch.",
    rating: 5,
    project: "E-commerce Platform",
    results: [
      "150% sales increase",
      "35% conversion rate",
      "24/7 availability",
    ],
  },
];

export function ClientSuccessSection() {
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
            Client <span className="text-purple-400">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real results from real clients who trusted us with their digital
            transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-purple-400 mb-4" />
                  <p className="text-gray-300 mb-4 italic">
                    {`${testimonial.content}`}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-purple-400 font-semibold mb-2">
                      Project: {testimonial.project}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {testimonial.results.map((result) => (
                        <Badge
                          key={result}
                          variant="secondary"
                          className="bg-green-900/30 text-green-300 border-green-500/30"
                        >
                          {result}
                        </Badge>
                      ))}
                    </div>
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
