import { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services | Xanitus",
  description: "Comprehensive IT solutions tailored to your business needs",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center">
          Our <span className="text-[#a0ff4a]">Services</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
          We offer a comprehensive range of IT solutions designed to help your
          business thrive in the digital landscape.
        </p>
      </div>

      <ServicesSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}
