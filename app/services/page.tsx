import { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { DetailedServicesSection } from "@/components/sections/DetailedServicesSection";
import { BoldCTASection } from "@/components/sections/BoldCTASection";

export const metadata: Metadata = {
  title: "Services | Xanitus - Expert IT Solutions & Digital Transformation",
  description:
    "Transform your business with our comprehensive IT services: UI/UX Design, Web Development, Mobile Apps, Cloud Solutions, and Digital Marketing. Expert tech solutions tailored for your success.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Creative Design */}
      <ServicesHero />

      {/* Main Services Overview */}
      <ServicesSection />

      {/* Detailed Services Breakdown */}
      <DetailedServicesSection />

      {/* Bold CTA Section */}
      <BoldCTASection />
    </div>
  );
}
