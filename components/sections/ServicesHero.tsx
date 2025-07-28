"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  TrendingUp,
  Zap,
  Bot,
} from "lucide-react";

export function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-8"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-black">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-32 left-16 w-64 h-64 bg-[#a0ff4a]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]), opacity }}
          className="absolute bottom-32 right-16 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, -50]),
            opacity,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-12 text-[#a0ff4a] opacity-12 hidden lg:block"
      >
        <Code size={32} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-36 right-16 text-blue-400 opacity-12 hidden lg:block"
      >
        <Palette size={28} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 left-16 text-purple-400 opacity-12 hidden lg:block"
      >
        <Smartphone size={30} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-28 right-12 text-cyan-400 opacity-12 hidden lg:block"
      >
        <Cloud size={34} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 right-8 text-orange-400 opacity-12 hidden lg:block"
      >
        <Bot size={36} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming
            <span className="block text-[#a0ff4a] relative mt-2">
              Digital Dreams
              <motion.div
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-[#a0ff4a] w-full origin-left"
              />
            </span>
            <span className="block mt-2">Into Reality</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
        >
          We craft exceptional digital experiences that drive growth, enhance
          user engagement, and revolutionize how businesses connect with their
          audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          {[
            { icon: Palette, label: "UI/UX Design" },
            { icon: Code, label: "Web Development" },
            { icon: Smartphone, label: "Mobile Apps" },
            { icon: Cloud, label: "Cloud Solutions" },
            { icon: Bot, label: "AI Automation" },
            { icon: TrendingUp, label: "Digital Marketing" },
            { icon: Zap, label: "Performance Optimization" },
          ].map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-2 sm:px-4 sm:py-2 hover:bg-white/10 transition-all duration-300"
            >
              <service.icon className="text-[#a0ff4a]" size={16} />
              <span className="text-white font-medium text-xs sm:text-sm">
                {service.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-base text-gray-400 mb-6"
        >
          Scroll down to explore our comprehensive service offerings
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-4"
        >
          <div className="w-1 h-12 bg-gradient-to-b from-[#a0ff4a] to-transparent mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
