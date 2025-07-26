// components/sections/GlobalImpactSection.tsx
"use client";

import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { CountUp } from "../ui/CountUp";

const stats = [
  { number: 50, label: "Clients Served", suffix: "+" },
  { number: 10, label: "Countries Reached", suffix: "+" },
  { number: 50, label: "Lines of Code", suffix: "K+" },
  { number: 99.9, label: "Uptime", suffix: "%" },
];

export function GlobalImpactSection() {
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
            Global <span className="text-[#a0ff4a]">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-[#393e42]/50 border-[#393e42]/30 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-300 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 3D Globe Placeholder - This would be implemented with Three.js */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-96 h-96 bg-[#393e42]/20 rounded-full flex items-center justify-center border border-[#a0ff4a]/30">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <p className="text-white font-semibold">Interactive 3D Globe</p>
              <p className="text-gray-300 text-sm">Click to explore regions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
