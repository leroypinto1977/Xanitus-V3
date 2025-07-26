// components/sections/CTASection.tsx
"use client";

import { motion } from "framer-motion";
// import { ChevronRight, Mail, Phone, MessageSquare } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-[#393e42]/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lets discuss how we can help you achieve your digital goals with our
            tailored IT solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
