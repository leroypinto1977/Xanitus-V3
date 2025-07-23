// components/sections/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Mail, label: "Email Us", value: "hello@xanitus.com" },
              { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567" },
              {
                icon: MessageSquare,
                label: "Live Chat",
                value: "Available 24/7",
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-400 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <contact.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">
                      {contact.label}
                    </h3>
                    <p className="text-gray-300 text-sm">{contact.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
