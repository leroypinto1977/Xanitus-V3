import { Metadata } from "next";
// import { motion } from 'framer-motion';
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { GlobalImpactSection } from "@/components/sections/GlobalImpactSection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Xanitus",
  description: "Learn about our company, mission, and values",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          About <span className="text-[#a0ff4a]">Xanitus</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          We're a team of passionate technologists dedicated to transforming
          businesses through innovative digital solutions.
        </p>
      </div>

      {/* Company Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-[#a0ff4a]">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2020, Xanitus began with a simple mission: to help
                businesses leverage technology to achieve their goals. What
                started as a small team of developers has grown into a
                full-service digital agency.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that technology should be accessible, effective, and
                tailored to each client's unique needs. Our approach combines
                technical expertise with strategic thinking to deliver solutions
                that drive real business results.
              </p>
              <p className="text-gray-300">
                Today, we work with clients across industries and around the
                world, helping them navigate the ever-changing digital landscape
                and stay ahead of the competition.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-[#393e42]/20 rounded-lg border border-[#a0ff4a]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-white font-semibold">Company Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-[#393e42]/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Meet Our <span className="text-[#a0ff4a]">Team</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
              },
              {
                name: "Mike Johnson",
                position: "Lead Developer",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Sarah Williams",
                position: "UX Designer",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
              },
              {
                name: "David Brown",
                position: "Project Manager",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
              },
              {
                name: "Emily Davis",
                position: "Marketing Specialist",
                image:
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-[#a0ff4a] transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#a0ff4a]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <GlobalImpactSection />
    </div>
  );
}
