"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Users,
  Award,
  Globe,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export function BoldCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.7]);

  return (
    <div ref={containerRef} className="relative py-16 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900" />
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-r from-[#a0ff4a]/10 via-transparent to-blue-500/10"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-10 text-[#a0ff4a] opacity-5"
      >
        <Zap size={40} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 text-blue-400 opacity-5"
      >
        <Globe size={50} />
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: Users, number: "500+", label: "Happy Clients" },
            { icon: Award, number: "150+", label: "Projects Completed" },
            { icon: Globe, number: "25+", label: "Countries Served" },
            { icon: Zap, number: "99.9%", label: "Uptime Guarantee" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#a0ff4a]/20 rounded-full mb-3">
                <stat.icon className="text-[#a0ff4a]" size={24} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a0ff4a] to-blue-400">
              Transform
            </span>
            Your Business?
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't let your competitors get ahead. Partner with us to build the
            digital future your business deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(160, 255, 74, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#a0ff4a] to-green-400 text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-[#a0ff4a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <Link href="/contact#booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-full hover:border-[#a0ff4a] hover:bg-[#a0ff4a]/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book Free Consultation
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Phone,
                title: "Call Us Now",
                content: "+91 93446 27455",
                action: "Get instant answers to your questions",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "leroy.xanitus@gmail.com",
                action: "Detailed project discussions",
              },
              {
                icon: Calendar,
                title: "Schedule Meeting",
                content: "Book a 30-min call",
                action: "Free strategy session",
              },
            ].map((contact, index) => {
              const isScheduleContact = contact.title === "Schedule Meeting";

              if (isScheduleContact) {
                return (
                  <Link key={contact.title} href="/contact#booking">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#a0ff4a]/30 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#a0ff4a]/20 to-blue-500/20 rounded-full mb-3 group-hover:from-[#a0ff4a]/30 group-hover:to-blue-500/30 transition-all duration-300">
                          <contact.icon className="text-[#a0ff4a]" size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-[#a0ff4a] font-semibold mb-1 text-sm">
                          {contact.content}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {contact.action}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                );
              }

              return (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-[#a0ff4a]/30 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#a0ff4a]/20 to-blue-500/20 rounded-full mb-3 group-hover:from-[#a0ff4a]/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <contact.icon className="text-[#a0ff4a]" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {contact.title}
                    </h3>
                    <p className="text-[#a0ff4a] font-semibold mb-1 text-sm">
                      {contact.content}
                    </p>
                    <p className="text-gray-400 text-xs">{contact.action}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </div>
  );
}
