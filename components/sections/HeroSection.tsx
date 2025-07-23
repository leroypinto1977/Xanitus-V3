// components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ui/particle-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { FloatingElements } from "@/components/ui/floating-elements";

export function HeroSection() {
  const words = [
    { text: "Transforming" },
    { text: "Businesses" },
    { text: "Through" },
    { text: "Tailored", className: "text-purple-400" },
    { text: "IT", className: "text-purple-400" },
    { text: "Solutions", className: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <FloatingElements />

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <TypewriterEffect
            words={words}
            className="text-4xl md:text-6xl font-bold mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Custom development, workflow automation, and digital transformation
            solutions that scale with your business
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Start Your Digital Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
