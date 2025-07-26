import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce Platform Redesign | Xanitus Portfolio",
  description:
    "Complete redesign and development of an e-commerce platform, resulting in a 40% increase in conversion rate.",
};

export default function EcommercePlatformPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 pt-24">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Back button */}
        <Link href="/portfolio">
          <Button
            variant="ghost"
            className="mb-8 text-white hover:text-[#a0ff4a] p-0"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero section */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Badge className="bg-[#a0ff4a] text-black">
              <User className="mr-1 h-3 w-3" />
              Fashion Retailer
            </Badge>
            <Badge variant="secondary" className="bg-slate-700 text-gray-300">
              <Calendar className="mr-1 h-3 w-3" />
              January 2024
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            E-commerce Platform Redesign
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Complete redesign and development of an e-commerce platform,
            resulting in a 40% increase in conversion rate.
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Next.js", "Tailwind CSS", "Stripe", "Sanity CMS"].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-[#393e42]/30 text-[#a0ff4a] border-[#393e42]/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main image placeholder */}
        <div className="mb-12">
          <div className="w-full h-64 md:h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">Project Screenshot</span>
          </div>
        </div>

        {/* Project content */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12">
          <CardContent className="p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">
                Project Overview
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                This project involved a complete overhaul of an existing
                e-commerce platform for a major fashion retailer. The client was
                experiencing low conversion rates and poor user experience on
                their existing platform.
              </p>

              <h3 className="text-xl font-bold text-white mb-3">Challenges</h3>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Poor mobile responsiveness</li>
                <li>• Slow loading times</li>
                <li>• Complicated checkout process</li>
                <li>• Outdated design and user interface</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">Solutions</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We implemented a modern, responsive design using Next.js and
                Tailwind CSS, integrated Stripe for seamless payments, and used
                Sanity CMS for content management. The new platform features:
              </p>
              <ul className="text-gray-300 mb-6 space-y-2">
                <li>• Mobile-first responsive design</li>
                <li>• Optimized performance with 90+ Lighthouse scores</li>
                <li>• Streamlined one-click checkout</li>
                <li>• Advanced search and filtering capabilities</li>
                <li>• Real-time inventory management</li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-3">Results</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-[#a0ff4a]/10 border border-[#a0ff4a]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#a0ff4a]">40%</div>
                  <div className="text-sm text-gray-300">
                    Conversion Rate Increase
                  </div>
                </div>
                <div className="bg-[#a0ff4a]/10 border border-[#a0ff4a]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#a0ff4a]">60%</div>
                  <div className="text-sm text-gray-300">Faster Load Times</div>
                </div>
                <div className="bg-[#a0ff4a]/10 border border-[#a0ff4a]/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#a0ff4a]">200%</div>
                  <div className="text-sm text-gray-300">
                    Mobile Traffic Increase
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to action */}
        <Card className="bg-gradient-to-r from-[#a0ff4a]/10 to-[#a0ff4a]/5 border-[#a0ff4a]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in a similar project?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help bring your vision to life with our
              expertise and innovative solutions.
            </p>
            <Button
              asChild
              className="bg-[#a0ff4a] text-black hover:bg-[#8ee639]"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
